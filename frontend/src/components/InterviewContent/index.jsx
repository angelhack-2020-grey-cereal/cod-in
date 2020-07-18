import React, { useCallback, useRef } from 'react';
import './stylesheet.scss';
import { ControlledEditor as MonacoEditor, monaco } from '@monaco-editor/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../Button';

monaco
  .init()
  .then(monaco => {
    monaco.editor.defineTheme('cod-in', {
      base: 'vs-dark',
      inherit: true,
      rules: [{ background: '333333' }],
      colors: {
        'editor.background': '#333333',
      },
    });
  })
  .catch(error => console.error('An error occurred during initialization of Monaco: ', error));

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

  const monacoEditorProps = {
    language: 'javascript',
    theme: 'cod-in',
    options: {
      minimap: { enabled: false },
    },
  };

  return (
    <div className="InterviewContent">
      {
        reviewing &&
        <div className="controls">
          <Button className="play" onClick={playing ? onPause : onPlay}>{playing ? 'Pause' : 'Play'}</Button>
          <div className="progress-bar"
               onMouseDown={handleMouseDown}
               ref={progressBarRef}>
            <div className="progress" style={{ width: `${(progress / interview.duration * 100).toFixed(1)}%` }}>
              <div className="playhead"/>
            </div>
          </div>
        </div>
      }
      <div className="editor-container">
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
              <MonacoEditor {...monacoEditorProps}
                            value={defaultCode}
                            onChange={(ev, value) => onAddIdeLog(value)}/>
            ) : (
              <MonacoEditor {...monacoEditorProps}
                            value={ide.value}
                            options={{ readOnly: true }}/>
            )
          }
        </div>
      </div>
    </div>
  );
}
