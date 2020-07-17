import React from 'react';
import './stylesheet.scss';
import { ControlledEditor as MonacoEditor } from '@monaco-editor/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InterviewContent({ interview, onAddIdeLog, onAddWhiteboardLog, defaultProblem, defaultCode }) {
  const interviewing = !interview;
  const reviewing = !interviewing;
  console.log(interview);

  return (
    <div className="InterviewContent">
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
              value={interview.whiteboardLogs[0].value}
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
              value={interview.ideLogs[0].value}
              options={{ readOnly: true }}
            />
          )
        }
      </div>
    </div>
  );
}
