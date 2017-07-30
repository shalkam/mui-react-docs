import React from 'react';
import { withRouter } from 'react-router';
import { injectIntl } from 'react-intl';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {
  state = {
    showModal: false
  };
  handleMenu(event, value) {}
  render() {
    const { messages } = this.props.intl;
    return (
      <div className="noPrint header">
        <AppBar
          title={
            <div style={{ cursor: 'pointer' }} onClick={() => this.props.history.push('/')}>
              {messages['app.name']}
            </div>
          }
          iconElementLeft={<div />}
          iconElementRight={
            <div>
              <RaisedButton
                primary={true}
                disabled={this.props.location.pathname === '/'}
                style={{ marginRight: 5 }}
                label={messages['app.home']}
                onTouchTap={() => this.props.history.push('/')}
              />
              <RaisedButton
                style={{ marginRight: 5 }}
                label={messages['app.docs']}
                disabled={this.props.location.pathname.startsWith('/docs')}
                primary={true}
                onTouchTap={() => this.props.history.push('/docs')}
              />
              <RaisedButton
                style={{ marginRight: 5 }}
                label={messages['app.tokenSale']}
                primary={true}
                onTouchTap={() => this.props.history.push('/token-launch')}
              />
            </div>
          }
        />
      </div>
    );
  }
}
export default withRouter(injectIntl(Header));
