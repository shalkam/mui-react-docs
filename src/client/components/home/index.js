import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { injectIntl } from 'react-intl';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './header/Header';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import './Home.scss';

class Home extends React.Component {
  render() {
    const { locale, messages } = this.props.intl;
    return (
      <div>
        <Header />
        <Banner />
        <div className="Homepage">
          <div className="services pv-100">
            <Container>
              <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                  <h1>Full Service,</h1>
                  <h1>No Servers.</h1>

                  <p>
                    Imagine server apps which install in one click. Now imagine infinite scale, no servers to manage, no operating system, no excess capacity.
                  </p>
                  <p>
                    <strong>You’ve imagined Wireframe</strong>
                    , a fully managed platform for developing, hosting, monitoring your serverless apps.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="community pv-100">
            <Container>
              <StickyContainer>
                <Row>
                  <Col xs="12" md="6">
                    <div className="rect" />
                    <div className="rect" />
                    <div className="rect" />
                    <div className="rect" />
                    <div className="rect" />
                    <div className="rect" />
                  </Col>
                  <Col xs="12" md="6" className="pv-50">
                    <Sticky topOffset={80}>
                      {(
                        {
                          style,
                          isSticky,
                          wasSticky,
                          distanceFromTop,
                          distanceFromBottom,
                          calculatedHeight
                        }
                      ) => (
                        <div style={style}>
                          <h1>Community</h1>
                          <h1>Powered</h1>
                          <h1>Marketplace</h1>

                          <p>
                            Wireline is the definitive package manager for the serverless cloud. Search the community for apps and libraries and call them directly from your code. Compose your app with smaller serverless apps, "wires" as we call them. Certainly someone has the same cloud connecting problem you have, and there's an app for that.
                          </p>
                        </div>
                      )}
                    </Sticky>
                  </Col>
                </Row>
              </StickyContainer>
            </Container>
          </div>

          <div className="api">
            <Row>
              <Col xs="12" md="6" className="left pv-100">
                <Row>
                  <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                    <h1>Batteries</h1>
                    <h1>Included</h1>

                    <ul>
                      <li>HTTP Request API</li>
                      <li>Scheduling</li>
                      <li>Secrets Management</li>
                      <li>Versioning out of the box</li>
                    </ul>

                    <p>
                      Creating a script to connect two clouds may be easy for you. But it's not everyday you feel like debugging an OAuth authentication dance, and setting up a message queue. We have all the expected APIs you need with a healthy dose of sanity.
                    </p>

                    <h3>
                      Wireline lets you build that integration in 10 lines of code.
                    </h3>
                  </Col>
                </Row>
              </Col>

              <Col xs="12" md="6" className="right pv-100">
                <Row>
                  <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                    <h3 className="alert">Coming soon</h3>

                    <p className="large">Blockchain</p>
                    <p className="large">Welcome</p>

                    <p>
                      Build audi  le Oracles to connect Toolchains  and marketplace for deploying blockchain distributed apps, that interact with the public cloud.
                    </p>

                    <p>
                      Wireline let's you build the bridge between the current IT demands and the blockchain enabled future.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default injectIntl(Home);
