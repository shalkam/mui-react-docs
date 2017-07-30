import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import Home from './home/index';
// import TokenLaunch from './token-launch/index';
// import Docs from './docs/index';
import { Home, TokenLaunch, Docs } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.scss';
import '../assets/styles/app.scss';

export default class admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s">
          <title>MUI React App</title>
        </Helmet>
        <Switch>
          <Route path="/docs" component={Docs} />
          <Route path="/token-launch" component={TokenLaunch} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
