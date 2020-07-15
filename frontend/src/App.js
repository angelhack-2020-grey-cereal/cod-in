import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Main from './pages/MainPage';
import Match from './pages/MatchPage';
import Interview from './pages/InterviewPage';
import Promotion from './pages/PromotionPage';
import Shop from './pages/ShopPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/match" component={Match} />
        <Route path="/interview" component={Interview} />
        <Route path="/promotion" component={Promotion} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
