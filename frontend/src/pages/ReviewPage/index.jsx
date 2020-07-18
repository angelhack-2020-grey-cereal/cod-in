import React, { useContext, useEffect, useState } from 'react';
import InterviewSidebarContainer from '../../components/InterviewSidebar';
import InterviewContentContainer from '../../components/InterviewContent';
import './stylesheet.scss';
import { InterviewContext } from '../../contexts';
import { Redirect } from 'react-router-dom';

const FPS = 30;

export default function ReviewPage({ match }) {
  const { interviews } = useContext(InterviewContext);
  const { interviewId } = match.params;
  const interview = interviews.find(interview => interview.id === interviewId);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      if (progress >= interview.duration) {
        setPlaying(false);
      } else {
        const lastTickedAt = Date.now();
        const timeoutId = window.setTimeout(() => {
          const tickedAt = Date.now();
          setProgress(progress + (tickedAt - lastTickedAt));
        }, 1000 / FPS);

        return () => {
          window.clearTimeout(timeoutId);
        };
      }
    }
  }, [setProgress, progress, playing]);

  if (!interview) {
    return (
      <Redirect to="/interview"/>
    );
  }

  return (
    <div className="ReviewPage">
      <InterviewSidebarContainer interview={interview} progress={progress} playing={playing}/>
      <InterviewContentContainer
        interview={interview} progress={progress} playing={playing}
        onChangeProgress={setProgress}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}/>
    </div>
  );
}
