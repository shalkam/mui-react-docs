import React from 'react';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header.js';
import Nav from './nav.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

class Layout extends React.Component {
  componentWillMount() {
    this.setState({ open: false });
  }
  handleDrawerChange() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          {this.props.location.pathname !== '/' && <Nav />}
          <div className={this.props.location.pathname !== '/' && 'content'}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(Layout);
