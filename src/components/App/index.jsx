import React, { Fragment, useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../Header';
import Footer from '../Footer';
import SignIn from '../../pages/SignInPage';
import Main from '../../pages/MainPage';
import Landing from '../../pages/LandingPage';
import Interview from '../../pages/InterviewPage';
import Review from '../../pages/ReviewPage';
import Shop from '../../pages/ShopPage';
import LeaderBoard from '../../pages/LeaderBoardPage';
import Matching from '../../pages/MatchingPage';
import { InterviewContext, UserContext } from '../../contexts';
import mockInterviews from '../../assets/mocks/interviews';
import './stylesheet.scss';
import UseChromeVideo from '../UseChromeDialog';

let defaultUser = null;
try {
  const userJSON = Cookies.get('user');
  if (userJSON) {
    const user = JSON.parse(userJSON);
    if ('name' in user) {
      defaultUser = user;
    }
  }
} catch (e) {
  console.error(e);
}

const isChrome = /Chrome/.test(navigator.userAgent);

function App() {
  const [interviews, setInterviews] = useState(mockInterviews);
  const [user, _setUser] = useState(defaultUser);
  const [ignoreChrome, setIgnoreChrome] = useState(isChrome);

  const setUser = useCallback(user => {
    _setUser(user);
    Cookies.set('user', JSON.stringify(user));
  }, [_setUser]);

  const addInterview = useCallback(interview => {
    setInterviews([
      ...interviews,
      interview,
    ]);
  }, [interviews, setInterviews]);

  return (
    <InterviewContext.Provider value={{ interviews, addInterview }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          {user && <Route path="/matching/:role" component={Matching}/>}
          {user && <Route path="/interview" component={Interview}/>}
          {user && <Route exact path="/review/:interviewId" component={Review}/>}
          {user && <Route path="/review/:interviewId/:dialogType" component={Review}/>}
          <Fragment>
            <div className="App">
              <Header/>
              <Switch>
                <Route exact path="/" component={user ? Main : Landing}/>
                {!user && <Route path="/sign-in" component={SignIn}/>}
                <Route path="/shop" component={Shop}/>
                <Route path="/leaderboard" component={LeaderBoard}/>
                <Redirect to="/"/>
              </Switch>
              <Footer/>
            </div>
          </Fragment>
        </Switch>
        {
          !ignoreChrome &&
          <UseChromeVideo onConfirm={() => setIgnoreChrome(true)}/>
        }
      </UserContext.Provider>
    </InterviewContext.Provider>
  );
}

export default App;
