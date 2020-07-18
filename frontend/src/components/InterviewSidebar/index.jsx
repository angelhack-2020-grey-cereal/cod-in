import React, { useCallback, useEffect, useRef } from 'react';
import sampleIntervieweeVideo from '../../assets/videos/interviewee.mp4';
import './stylesheet.scss';

export default function InterviewSidebar({ interview, onEnd, progress, playing }) {
  const interviewing = !interview;
  const reviewing = !interviewing;
  const interviewerVideoRef = useRef(null);
  const intervieweeVideoRef = useRef(null);
  const mediaRef = useRef(null);
  const videoProgress = reviewing ? progress - interview.interviewerVideoOffset : -1;
  const shouldPlayVideo = videoProgress >= 0;

  useEffect(() => {
    if (reviewing) {
      const interviewerVideo = interviewerVideoRef.current;
      interviewerVideo.currentTime = videoProgress / 1e3;
    }
  }, [interview, shouldPlayVideo, playing]);

  useEffect(() => {
    if (reviewing) {
      const intervieweeVideo = intervieweeVideoRef.current;
      intervieweeVideo.currentTime = progress / 1e3;
    }
  }, [interview, playing]);

  useEffect(() => {
    if (reviewing) {
      const interviewerVideo = interviewerVideoRef.current;
      if (playing && shouldPlayVideo) {
        interviewerVideo.play();
      } else {
        interviewerVideo.pause();
      }

      const intervieweeVideo = intervieweeVideoRef.current;
      if (playing) {
        intervieweeVideo.play();
      } else {
        intervieweeVideo.pause();
      }
    }
  }, [interview, shouldPlayVideo, playing]);

  useEffect(() => {
    if (interviewing) {
      const player = interviewerVideoRef.current;
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
        const interviewerVideoURL = URL.createObjectURL(blob);
        const interviewerVideoOffset = videoStartedAt - interviewStartedAt;
        const duration = interviewEndedAt - interviewStartedAt;
        onEnd({ interviewerVideoURL, interviewerVideoOffset, duration });
      };
      disposeMedia();
    } else {
      onEnd({ interviewerVideoURL: null, interviewerVideoOffset: 0, duration: 0 });
    }
  }, [mediaRef.current, onEnd]);

  return (
    <div className="InterviewSidebar">
      <div>
        <h1>문제 1</h1>
        <h1>문제 2</h1>
      </div>
      <div className="video interviewer">
        {
          interviewing ? (
            <video ref={interviewerVideoRef} width={250} autoPlay muted/>
          ) : (
            <video ref={interviewerVideoRef} src={interview.interviewerVideoURL} width={250}/>
          )
        }
      </div>
      <div className="video interviewee">
        {
          interviewing ? (
            <video ref={intervieweeVideoRef} src={sampleIntervieweeVideo} width={250} autoPlay muted/>
          ) : (
            <video ref={intervieweeVideoRef} src={interview.intervieweeVideoURL} width={250}/>
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
