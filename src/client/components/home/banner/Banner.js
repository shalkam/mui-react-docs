import React, { Component } from 'react';

import logo from '../../../assets/images/logo.png';
import './Banner.scss';
import { Button } from 'reactstrap';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner text-center">
        <img src={logo} className="logo" alt="Wireline" />

        <div className="content">
          <h3>Application Marketplace for Serverless and Distributed Apps</h3>

          <Button className="alert">Login Github</Button>
          <Button className="transparent">Login Google</Button>
        </div>
      </div>
    );
  }
}
