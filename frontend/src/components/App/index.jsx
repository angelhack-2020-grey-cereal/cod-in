import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { InterviewContext } from '../../contexts';
import './stylesheet.scss';

import Header from '../Header';
import Home from '../../pages/HomePage';
import Login from '../../pages/LoginPage';
import Main from '../../pages/MainPage';
import Match from '../../pages/MatchPage';
import Interview from '../../pages/InterviewPage';
import Review from '../../pages/ReviewPage';
import Promotion from '../../pages/PromotionPage';
import Shop from '../../pages/ShopPage';

function App() {
  const [interviews, setInterviews] = useState({});

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
