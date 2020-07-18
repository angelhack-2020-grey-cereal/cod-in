import React, { useCallback, useRef } from 'react';
import './stylesheet.scss';
import { ControlledEditor as MonacoEditor } from '@monaco-editor/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InterviewContent({
                                           interview, onAddIdeLog, onAddWhiteboardLog, defaultProblem, defaultCode,
                                           progress, playing, onChangeProgress, onPlay, onPause,
                                         }) {
  const interviewing = !interview;
  const reviewing = !interviewing;
  const progressBarRef = useRef(null);

  const handleMouseDown = useCallback(e => {
    const handleMouseMove = e => {
      const progressBar = progressBarRef.current;
      const rect = progressBar.getBoundingClientRect();
      const width = rect.right - rect.left;
      const x = e.clientX - rect.left;
      const proportion = Math.min(Math.max(0, x / width), 1);
      onChangeProgress(proportion * interview.duration);
    };

    const handleMouseUp = e => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (prevPlaying) {
        onPlay();
      }
    };

    const prevPlaying = playing;
    onPause();
    handleMouseMove(e);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [interview, onPause, playing]);

  const whiteboard = reviewing && (
    interview.whiteboardLogs.find(({ timestamp }) => timestamp <= progress) ||
    interview.whiteboardLogs[0]
  );

  const ide = reviewing && (
    interview.ideLogs.find(({ timestamp }) => timestamp <= progress) ||
    interview.ideLogs[0]
  );

  return (
    <div className="InterviewContent">
      {
        reviewing &&
        <div className="controls">
          <button className="play" onClick={playing ? onPause : onPlay}>{playing ? 'Pause' : 'Play'}</button>
          <div className="progressBar"
               onMouseDown={handleMouseDown}
               ref={progressBarRef}>
            <div className="progress" style={{ width: `${(progress / interview.duration * 100).toFixed(1)}%` }}>
              <div className="playhead"/>
            </div>
          </div>
        </div>
      }
      <div className="editorContainer">
        <div className="whiteboard">
          {
            interviewing ? (
              <ReactQuill theme="snow"
                          defaultValue={defaultProblem}
                          onChange={onAddWhiteboardLog}/>
            ) : (
              <ReactQuill theme="snow"
                          value={whiteboard.value}
                          readOnly/>
            )
          }
        </div>
        <div className="ide">
          {
            interviewing ? (
              <MonacoEditor language="javascript"
                            value={defaultCode}
                            onChange={(ev, value) => onAddIdeLog(value)}/>
            ) : (
              <MonacoEditor language="javascript"
                            value={ide.value}
                            options={{ readOnly: true }}/>
            )
          }
        </div>
      </div>
    </div>
  );
}
