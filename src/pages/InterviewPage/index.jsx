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
  const outputsLogs = useMemo(() => [{ value: [], timestamp: 0 }], []);
  const feedbacks = useMemo(() => [], []);
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
      outputsLogs,
      feedbacks,
      user: mockInterviewee,
      accepted: true,
      timestamp: Date.now(),
    });
    history.push(`/review/${id}/result`);
  }, [addInterview, whiteboardLogs, ideLogs]);

  const handleAddWhiteboardLog = useCallback(value => {
    whiteboardLogs.unshift({ value, timestamp: Date.now() - start });
  }, [whiteboardLogs]);

  const handleAddIdeLog = useCallback(value => {
    ideLogs.unshift({ value, timestamp: Date.now() - start });
  }, [ideLogs]);

  const handleAddOutputsLog = useCallback(value => {
    outputsLogs.unshift({ value, timestamp: Date.now() - start });
  }, [outputsLogs]);

  const handleAddFeedback = useCallback(feedback => {
    feedbacks.push(feedback);
  }, [feedbacks]);

  return (
    <div className="InterviewPage">
      <InterviewSidebar onEnd={handleEnd}/>
      <InterviewContent onAddWhiteboardLog={handleAddWhiteboardLog}
                        onAddIdeLog={handleAddIdeLog}
                        onAddOutputsLog={handleAddOutputsLog}
                        onAddFeedback={handleAddFeedback}
                        defaultProblem={defaultProblem}
                        defaultCode={defaultCode}/>
    </div>
  );
}
