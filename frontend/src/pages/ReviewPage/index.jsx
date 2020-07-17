import React, { useContext } from 'react';
import InterviewSidebarContainer from '../../components/InterviewSidebar';
import InterviewContentContainer from '../../components/InterviewContent';
import './stylesheet.scss';
import { InterviewContext } from '../../contexts';
import { Redirect } from 'react-router-dom';

export default function ReviewPage({ match }) {
  const { interviews } = useContext(InterviewContext);
  const { interviewId } = match.params;
  const interview = interviews[interviewId];

  if (!interview) {
    return (
      <Redirect to="/interview"/>
    );
  }

  return (
    <div className="ReviewPage">
      <InterviewSidebarContainer interview={interview}/>
      <InterviewContentContainer interview={interview}/>
    </div>
  );
}
