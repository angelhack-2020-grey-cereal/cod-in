import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Header from './Header';
import Home from './HomePage';
import Login from './LoginPage';
import Main from './MainPage';
import Match from './MatchPage';
import Interview from './InterviewPage';
import Promotion from './PromotionPage';
import Shop from './ShopPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route apth="/match" component={Match} />
        <Route path="/interview" component={Interview} />
        <Route path="/promotion" component={Promotion} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
