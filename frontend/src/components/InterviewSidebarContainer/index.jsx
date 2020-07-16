
import React, { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import ReactPlayer from 'react-player'
import './stylesheet.scss';


export default function InterviewSidebarContainer () {

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [link, setLink] = useState('');

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);

    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    const url = URL.createObjectURL(blob);
    setLink(url);
  }, [mediaRecorderRef, setCapturing, recordedChunks]);


  return (
    <div className="InterviewSidebarContainer">
      <h1>문제 1</h1>
      <h1>문제 2</h1>
      <div className="Webcam">
        <Webcam
          audio={true}
          ref={webcamRef}
          height={200}
          width={250}
          videoConstraints={{ height: 200, width: 250 }}
        />
        {recordedChunks.length > 0 ? (
          <ReactPlayer 
            url={link} 
            controls={true}
            height={200}
            width={250}
          />
          ) : ( 
            <div style={{height: 200, width: 250}}></div>
          )
        }
      </div>
      {capturing ? (
        <button
          className="Button"
          type="button"
          onClick={handleStopCaptureClick}
        >
          Test Stop
        </button>
      ) : (
        <button 
          className="Button"
          type="buton"
          onClick={handleStartCaptureClick}
        >
          Test Start
        </button>
      )}
    </div>
  )
}
