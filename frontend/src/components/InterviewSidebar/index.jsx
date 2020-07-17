import React, { useCallback, useEffect, useRef } from 'react';
import './stylesheet.scss';

export default function InterviewSidebar({ interview, onEnd, progress, playing }) {
  const interviewing = !interview;
  const reviewing = !interviewing;
  const webcamRef = useRef(null);
  const mediaRef = useRef(null);
  const videoProgress = reviewing ? progress - interview.videoOffset : -1;
  const shouldPlayVideo = videoProgress >= 0;

  useEffect(() => {
    if (reviewing) {
      const player = webcamRef.current;
      player.currentTime = videoProgress / 1e3;
    }
  }, [interview, shouldPlayVideo, playing]);

  useEffect(() => {
    if (reviewing) {
      const player = webcamRef.current;
      if (playing && shouldPlayVideo) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [interview, shouldPlayVideo, playing]);

  useEffect(() => {
    if (interviewing) {
      const player = webcamRef.current;
      const recordedChunks = [];
      const interviewStartedAt = Date.now();

      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(stream => {
          player.srcObject = stream;
          return new Promise(resolve => {
            player.onloadedmetadata = () => resolve(stream);
          });
        })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
          mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) {
              recordedChunks.push(e.data);
            }
          };
          mediaRecorder.start();
          const videoStartedAt = Date.now();
          mediaRef.current = {
            interviewStartedAt,
            videoStartedAt,
            mediaRecorder,
            stream,
            recordedChunks,
          };
        });

      return disposeMedia;
    }
  }, []);

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
        interviewStartedAt,
        videoStartedAt,
        mediaRecorder,
        recordedChunks,
      } = mediaRef.current;
      const interviewEndedAt = Date.now();
      mediaRecorder.onstop = () => {
        mediaRecorder.onstop = undefined;
        const blob = new Blob(recordedChunks, {
          type: 'video/webm',
        });
        const videoURL = URL.createObjectURL(blob);
        const videoOffset = videoStartedAt - interviewStartedAt;
        const duration = interviewEndedAt - interviewStartedAt;
        onEnd({ videoURL, videoOffset, duration });
      };
      disposeMedia();
    } else {
      onEnd({ videoURL: null, videoOffset: 0, duration: 0 });
    }
  }, [mediaRef.current, onEnd]);

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
            <video ref={webcamRef} src={interview.videoURL} width={250}/>
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
