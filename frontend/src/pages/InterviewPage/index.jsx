import React, { useCallback, useContext, useMemo } from 'react';
import * as uuid from 'uuid';
import { useHistory } from 'react-router-dom';
import InterviewSidebar from '../../components/InterviewSidebar';
import InterviewContent from '../../components/InterviewContent';
import './stylesheet.scss';
import { InterviewContext } from '../../contexts';
import { mockInterviewee } from '../../assets/mocks/users';

const defaultProblem = 'State the problem here.';
const defaultCode = `function solution() {
  // write your solution here
}`;

export default function InterviewPage() {
  const { addInterview } = useContext(InterviewContext);
  const whiteboardLogs = useMemo(() => [{ value: defaultProblem, timestamp: 0 }], []);
  const ideLogs = useMemo(() => [{ value: defaultCode, timestamp: 0 }], []);
  const start = useMemo(() => Date.now(), []);
  const history = useHistory();

  const handleEnd = useCallback(({ interviewerVideoURL, interviewerVideoOffset, duration }) => {
    const id = uuid.v4();
    addInterview({
      id,
      role: 'interviewer',
      duration,
      interviewerVideoOffset,
      interviewerVideoURL,
      intervieweeVideoURL: require('../../assets/videos/interviewee.mp4'),
      whiteboardLogs,
      ideLogs,
      user: mockInterviewee,
      accepted: true, // TODO:
      timestamp: Date.now(),
      comments: [], // TODO:
    });
    history.push(`/review/${id}`);
  }, [addInterview, whiteboardLogs, ideLogs]);

  const handleAddWhiteboardLog = useCallback(value => {
    whiteboardLogs.unshift({ value, timestamp: Date.now() - start });
  }, [whiteboardLogs]);

  const handleAddIdeLog = useCallback(value => {
    ideLogs.unshift({ value, timestamp: Date.now() - start });
  }, [ideLogs]);

  return (
    <div className="InterviewPage">
      <InterviewSidebar onEnd={handleEnd}/>
      <InterviewContent
        onAddWhiteboardLog={handleAddWhiteboardLog}
        onAddIdeLog={handleAddIdeLog}
        defaultProblem={defaultProblem}
        defaultCode={defaultCode}
      />
    </div>
  );
}
