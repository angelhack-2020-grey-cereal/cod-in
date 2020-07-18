import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/HomePage';
import Login from '../../pages/LoginPage';
import Main from '../../pages/MainPage';
import Match from '../../pages/MatchPage';
import Interview from '../../pages/InterviewPage';
import Review from '../../pages/ReviewPage';
import Promotion from '../../pages/PromotionPage';
import Shop from '../../pages/ShopPage';
import sampleInterviewerVideo from '../../assets/videos/interviewer.mp4';
import sampleIntervieweeVideo from '../../assets/videos/interviewee.mp4';
import sampleWhiteboardLogs from '../../assets/whiteboard-logs/sample0.json';
import sampleIdeLogsSample from '../../assets/ide-logs/sample0.json';
import { InterviewContext } from '../../contexts';
import './stylesheet.scss';

function App() {
  const [interviews, setInterviews] = useState({
    'sample0': {
      id: 'sample0',
      duration: 120000,
      interviewerVideoOffset: 0,
      interviewerVideoURL: sampleInterviewerVideo,
      intervieweeVideoURL: sampleIntervieweeVideo,
      whiteboardLogs: sampleWhiteboardLogs,
      ideLogs: sampleIdeLogsSample,
    },
  });

  const addInterview = useCallback(interview => {
    setInterviews({
      ...interviews,
      [interview.id]: interview,
    });
  }, [interviews, setInterviews]);

  return (
    <InterviewContext.Provider value={{ interviews, addInterview }}>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="/match" component={Match}/>
          <Route path="/interview" component={Interview}/>
          <Route path="/review/:interviewId" component={Review}/>
          <Route path="/promotion" component={Promotion}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </InterviewContext.Provider>
  );
}

export default App;
