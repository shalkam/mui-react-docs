import React, { Component } from 'react';
import { Button, Col, NavLink, Row } from 'reactstrap';

import logo_sm from '../../../assets/images/logo_sm.png';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row className="upper mb-50">
          <Col xs="12" md="3">
            <NavLink><span className="medium">Docs</span></NavLink>
            <NavLink><span className="medium">Procurement</span></NavLink>
            <NavLink><span className="medium">Token Sale</span></NavLink>
          </Col>

          <Col xs="12" md="9" lg="6" className="text-center">
            <p>Stay in the know</p>

            <input name="email" placeholder="YOUR E-MAIL" />

            <Button className="transparent bordered">Subscribe</Button>
          </Col>
        </Row>

        <Row className="lower">
          <Col xs="12" md="3">
            <NavLink><img src={logo_sm} alt="Logo small" /></NavLink>
          </Col>

          <Col xs="12" md="9" xl="6" className="text-center">
            <NavLink><span>Copyright Wireline © 2017</span></NavLink>
            <NavLink><span>Terms & Conditions</span></NavLink>
            <NavLink><span>Privacy Policy</span></NavLink>
          </Col>
        </Row>
      </div>
    );
  }
}
