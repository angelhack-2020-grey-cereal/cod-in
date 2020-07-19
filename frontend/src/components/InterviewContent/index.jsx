import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import './stylesheet.scss';
import { ControlledEditor as MonacoEditor, monaco } from '@monaco-editor/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { mmss } from '../../common/utils';
import { UserContext } from '../../contexts';

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
                                           interview, onAddIdeLog, onAddWhiteboardLog, onAddFeedback, defaultProblem, defaultCode,
                                           progress, playing, onChangeProgress, onPlay, onPause, seconds,
                                         }) {
  const interviewing = !interview;
  const reviewing = !interviewing;
  const progressBarRef = useRef(null);
  const [feedbacks, setFeedbacks] = useState(interview ? interview.feedbacks : []);
  const [feedbackValue, setFeedbackValue] = useState('');
  const lastFeedbackRef = useRef(null);
  const startedAtRef = useRef(Date.now());
  const { user: me } = useContext(UserContext);

  const handleAddFeedback = useCallback(() => {
    if (feedbackValue.trim()) {
      const feedback = {
        me: true,
        timestamp: interviewing ? Date.now() - startedAtRef.current : undefined,
        value: feedbackValue,
      };
      if (interviewing) {
        onAddFeedback(feedback);
      }
      setFeedbacks([...feedbacks, feedback]);
      setFeedbackValue('');
    }
  }, [feedbacks, feedbackValue, setFeedbackValue]);

  useEffect(() => {
    const lastFeedback = lastFeedbackRef.current;
    if (lastFeedback) {
      lastFeedback.scrollIntoView();
    }
  });

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

  const monacoEditorProps = (options = {}) => ({
    language: 'javascript',
    theme: 'cod-in',
    options: {
      ...options,
      minimap: { enabled: false },
    },
  });

  return (
    <div className="InterviewContent">
      {
        reviewing &&
        <div className="controls">
          <Button className="play" onClick={playing ? onPause : onPlay}>
            <FontAwesomeIcon fixedWidth icon={playing ? faPause : faPlay}/>
          </Button>
          <div className="progress-bar"
               onMouseDown={handleMouseDown}
               ref={progressBarRef}>
            <div className="progress" style={{ width: `${(progress / interview.duration * 100).toFixed(1)}%` }}/>
          </div>
        </div>
      }
      <div className="editor-container">
        <div className="editor-wrapper">
          <div className="editor whiteboard">
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
          <div className="drawer">
            <div className="drawer-header">
              Feedback
              <FontAwesomeIcon fixedWidth icon={faChevronDown}/>
            </div>
            <div className="drawer-body">
              <div className="feedback-container">
                {
                  feedbacks.map((feedback, i) => (
                    <div className="feedback" key={i} ref={i === feedbacks.length - 1 ? lastFeedbackRef : undefined}>
                      {
                        feedback.timestamp !== undefined ? (
                          <span className="time">{mmss(feedback.timestamp / 1e3 | 0)}  </span>
                        ) : (
                          <span className="user">{me.name}: </span>
                        )
                      }
                      {feedback.value}
                    </div>
                  ))
                }
              </div>
              <div className="feedback-input">
                <input value={feedbackValue}
                       onChange={({ target }) => setFeedbackValue(target.value)}
                       onKeyPress={e => {
                         if (e.key === 'Enter') {
                           e.preventDefault();
                           handleAddFeedback();
                         }
                       }}/>
                <Button onClick={handleAddFeedback}>
                  Enter
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="editor-wrapper">
          <div className="editor ide">
            {
              interviewing ? (
                <MonacoEditor {...monacoEditorProps()}
                              value={defaultCode}
                              onChange={(ev, value) => onAddIdeLog(value)}/>
              ) : (
                <MonacoEditor {...monacoEditorProps({ readOnly: true })}
                              value={ide.value}/>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
