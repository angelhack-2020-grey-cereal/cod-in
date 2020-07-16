
import React, { useState, useCallback, useRef, useContext, useEffect } from 'react';

import { BlobContext } from '../../contexts';

import Webcam from 'react-webcam';
import './stylesheet.scss';

const MODE_INTERVIEW_STOP = false;
const MODE_INTERVIEW_START = true;

export default function InterviewSidebar () {
  const { setBlob } = useContext(BlobContext);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [mode, setMode] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  useEffect(() => {
    return function cleanup() {
      mediaRecorderRef.current.removeEventListener(
        "dataavailable",
        handleDataAvailable,
      )
      mediaRecorderRef.current.removeEventListener(
        "dataavailable",
        handleSetReplayBlob,
      )
      // TODO: remove after test
      console.log('test')
    };
  }, [])

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    }, [setRecordedChunks])

  const handleSetReplayBlob = useCallback(() => {
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    const url = URL.createObjectURL(blob);
    setBlob(url);
  }, [recordedChunks, setBlob])

  const handleStartCaptureClick = useCallback(() => {
    setMode(MODE_INTERVIEW_START);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable,
    );
    // TODO: 정상적으로 동작하게하는 다른 옵션이 있는 것 같음. 현재는 동작 하지 않음
    mediaRecorderRef.current.addEventListener(
      "stop",
      handleSetReplayBlob,
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setMode, mediaRecorderRef, handleDataAvailable, handleSetReplayBlob])

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setMode(MODE_INTERVIEW_STOP);
  }, [mediaRecorderRef, setMode])

  return (
    <div>
      <div className="InterviewSidebarContainer">
        <div>
          <h1>문제 1</h1>
          <h1>문제 2</h1>
        </div>
        <div className="webcam">
          <Webcam
            audio={true}
            ref={webcamRef}
            height={200}
            width={250}
            videoConstraints={{ height: 200, width: 250 }}
          />
        </div>
        {
          {
            [MODE_INTERVIEW_STOP]: (
              <button 
                className="button"
                type="buton"
                onClick={handleStartCaptureClick}
              >
                Test Start
              </button> 
            ), 
            [MODE_INTERVIEW_START]: (
              <button
                className="button"
                type="button"
                onClick={handleStopCaptureClick}
              >
                Test Stop
              </button> 
            ),
          }[mode]
        }
        {/* TODO: remove after test */}
        <button 
          className="button"
          type="button"
          onClick={handleSetReplayBlob}
        >
          Test Replay
        </button>
      </div>
    </div>
  );
}
