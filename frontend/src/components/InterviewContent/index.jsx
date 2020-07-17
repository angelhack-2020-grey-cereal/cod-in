import React from 'react';
import './stylesheet.scss';
import { ControlledEditor as MonacoEditor } from '@monaco-editor/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InterviewContent({ interview, onAddIdeLog, onAddWhiteboardLog, defaultProblem, defaultCode, progress }) {
  const interviewing = !interview;
  const reviewing = !interviewing;

  return (
    <div className="InterviewContent">
      {
        reviewing &&
        <div className="progressBar">
          <div className="progress" style={{ width: `${(progress / interview.duration * 100).toFixed(1)}%` }}>
            <div className="playhead"/>
          </div>
        </div>
      }
      <div className="editorContainer">
        <div className="whiteboard">
          {
            interviewing ? (
              <ReactQuill
                theme="snow"
                defaultValue={defaultProblem}
                onChange={onAddWhiteboardLog}
              />
            ) : (
              <ReactQuill
                readOnly
                theme="snow"
                value={interview.whiteboardLogs.find(({ timestamp }) => timestamp <= progress).value}
              />
            )
          }
        </div>
        <div className="ide">
          {
            interviewing ? (
              <MonacoEditor
                language="javascript"
                value={defaultCode}
                onChange={(ev, value) => onAddIdeLog(value)}
              />
            ) : (
              <MonacoEditor
                language="javascript"
                value={interview.ideLogs.find(({ timestamp }) => timestamp <= progress).value}
                options={{ readOnly: true }}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}
