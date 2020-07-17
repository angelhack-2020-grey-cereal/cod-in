import React from 'react';
import InterviewSidebarContainer from '../../components/InterviewSidebar';
import InterviewContentContainer from '../../components/InterviewContent';
import './stylesheet.scss';

export default function InterviewPage() {
  return (
    <div className="InterviewPage">
      <InterviewSidebarContainer/>
      <InterviewContentContainer/>
    </div>
  );
}
