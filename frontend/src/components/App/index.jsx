import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../../pages/LoginPage';
import Main from '../../pages/MainPage';
import Interview from '../../pages/InterviewPage';
import Review from '../../pages/ReviewPage';
import Promotion from '../../pages/PromotionPage';
import Shop from '../../pages/ShopPage';
import Matching from '../../pages/MatchingPage';
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
      <Switch>
        <Route path="/matching/:role" component={Matching}/>
        <Route path="/interview" component={Interview}/>
        <Route path="/review/:interviewId" component={Review}/>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/promotion" component={Promotion}/>
            <Route path="/shop" component={Shop}/>
            <Redirect to="/"/>
          </Switch>
          <Footer/>
        </div>
      </Switch>
    </InterviewContext.Provider>
  );
}

export default App;
