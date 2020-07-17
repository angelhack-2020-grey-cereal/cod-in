import React, { useCallback, useEffect, useRef } from 'react';
import './stylesheet.scss';

export default function InterviewSidebar({ interview, onEnd }) {
  const interviewing = !interview;
  const reviewing = !interviewing;
  const webcamRef = useRef(null);
  const mediaRef = useRef(null);

  const disposeMedia = useCallback(() => {
    if (mediaRef.current) {
      const {
        mediaRecorder,
        stream,
      } = mediaRef.current;

      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());

      if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    }
  }, [mediaRef.current]);

  const handleEnd = useCallback(() => {
    if (mediaRef.current) {
      const {
        mediaRecorder,
        recordedChunks,
      } = mediaRef.current;

      mediaRecorder.onstop = () => {
        mediaRecorder.onstop = undefined;
        const blob = new Blob(recordedChunks, {
          type: 'video/webm',
        });
        const videoURL = URL.createObjectURL(blob);
        onEnd(videoURL);
      };
      disposeMedia();
    } else {
      onEnd('');
    }
  }, [mediaRef.current, onEnd]);

  useEffect(() => {
    if (interviewing) {
      const player = webcamRef.current;
      const recordedChunks = [];

      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(stream => {
          player.srcObject = stream;
          const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
          mediaRecorder.ondataavailable = e => recordedChunks.push(e.data);
          mediaRecorder.start();
          mediaRef.current = {
            mediaRecorder,
            stream,
            recordedChunks,
          };
        });

      return disposeMedia;
    }
  }, []);

  return (
    <div className="InterviewSidebar">
      <div>
        <h1>문제 1</h1>
        <h1>문제 2</h1>
      </div>
      <div className="webcam">
        {
          interviewing ? (
            <video ref={webcamRef} width={250} autoPlay muted/>
          ) : (
            <video src={interview.videoURL} width={250} autoPlay/>
          )
        }
      </div>
      {
        interviewing &&
        <button onClick={handleEnd}>End the Interview</button>
      }
    </div>
  );
}
