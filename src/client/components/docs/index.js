import React from 'react';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AgAutocomplete from 'react-algoliasearch';
import content from './content.md';
import Header from './header';
import Nav from './nav';
import './style/style.css';
import './style/algolia.css';

export default class Docs extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="docs-container">
          <Header />
          <Nav />
          <div className="docs-content">
            <hr />
            <AgAutocomplete
              apiKey={'6be0576ff61c053d5f9a3225e2a90f76'}
              appId={'latency'}
              displayKey="name"
              indices={[{ index: 'contacts' }]}
              inputId="input-search"
              placeholder="Search..."
            />
            <hr />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
