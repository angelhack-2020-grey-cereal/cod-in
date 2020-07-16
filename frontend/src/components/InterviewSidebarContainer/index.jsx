
import React, { useState, useCallback, useRef, useContext} from 'react';

import { BlobContext } from '../../contexts';

import Webcam from 'react-webcam';
import ReactPlayer from 'react-player'
import './stylesheet.scss';

export default function InterviewSidebarContainer () {
  const [blob, setBlob] = useContext(BlobContext);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [state, setState] = useState(0);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    }, [setRecordedChunks]);

  const handleStartCaptureClick = useCallback(() => {
    setState(1);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setState, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setState(2);
  }, [mediaRecorderRef, setState]);

  const handleSetReplayBlob = useCallback(() => {
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    const url = URL.createObjectURL(blob);
    setBlob(url);
    setState(3);
  }, [recordedChunks, setBlob]);

  function renderButton (state) {
    if (state === 1) {
      return (
        <button
        className="Button"
        type="button"
        onClick={handleStopCaptureClick}
        >
          Test Stop
        </button>
      );
    };

    if (state === 2) {
      return (
        <button 
          className="Button"
          type="button"
          onClick={handleSetReplayBlob}
        >
          Test Replay (TODO: back to main)
        </button> 
      );
    };

    return (
      <button 
        className="Button"
        type="buton"
        onClick={handleStartCaptureClick}
      >
        Test Start
      </button> 
    );
  };

  return (
    <div>
      <div className="InterviewSidebarContainer">
        <div>
          <h1>문제 1</h1>
          <h1>문제 2</h1>
        </div>
        <div className="Webcam">
          {state === 3 ? (
              <ReactPlayer 
                url={blob} 
                controls={true}
                height={200}
                width={250}
              />
            ) : ( 
              <Webcam
                audio={true}
                ref={webcamRef}
                height={200}
                width={250}
                videoConstraints={{ height: 200, width: 250 }}
              />
            )
          }
        </div>
        {renderButton(state)}
      </div>
    </div>
  );
};
