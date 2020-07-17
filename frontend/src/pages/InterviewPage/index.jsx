import React, { useCallback, useContext, useMemo } from 'react';
import InterviewSidebar from '../../components/InterviewSidebar';
import InterviewContent from '../../components/InterviewContent';
import './stylesheet.scss';
import { InterviewContext } from '../../contexts';
import * as uuid from 'uuid';
import { useHistory } from 'react-router-dom';

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

  const handleEnd = useCallback(videoURL => {
    const id = uuid.v4();
    addInterview({
      id,
      videoURL,
      whiteboardLogs,
      ideLogs,
    });
    history.push(`/review/${id}`);
  }, [addInterview, whiteboardLogs, ideLogs]);

  const handleAddWhiteboardLog = useCallback(value => {
    whiteboardLogs.push({ value, timestamp: Date.now() - start });
  }, [whiteboardLogs]);

  const handleAddIdeLog = useCallback(value => {
    ideLogs.push({ value, timestamp: Date.now() - start });
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
