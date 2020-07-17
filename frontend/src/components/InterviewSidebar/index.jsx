import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { BlobContext } from '../../contexts';

import Webcam from 'react-webcam';
import './stylesheet.scss';

const MODE_INTERVIEW = false;
const MODE_REVIEW = true;

export default function InterviewSidebar() {
  const { setBlob } = useContext(BlobContext);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [mode, setMode] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  }, [setRecordedChunks]);

  const handleStartCaptureClick = useCallback(() => {
    setMode(MODE_REVIEW);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    });
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable,
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setMode, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setMode(MODE_INTERVIEW);
  }, [mediaRecorderRef, setMode]);

  useEffect(() => {
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });
      const url = URL.createObjectURL(blob);
      setBlob(url);
    }
  }, [recordedChunks, setBlob]);

  useEffect(() => {
    return function cleanup() {
      if (recordedChunks.length > 0) {
        mediaRecorderRef.current.removeEventListener('dataavailable', handleDataAvailable);
        setRecordedChunks([]);
      }
    };
  }, [recordedChunks, handleDataAvailable]);

  return (
    <div className="InterviewSidebar">
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
          [MODE_INTERVIEW]: (
            <button
              className="button"
              type="buton"
              onClick={handleStartCaptureClick}
            >
              Test Start
            </button>
          ),
          [MODE_REVIEW]: (
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
    </div>
  );
}
