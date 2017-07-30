import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IntlProvider, addLocaleData } from 'react-intl';
import arLocaleData from 'react-intl/locale-data/ar';
import i18n from './i18n';
import AppComponent from './components/index.js';

addLocaleData(arLocaleData);
injectTapEventPlugin();
export default class App extends React.Component {
  componentWillMount() {
    this.setState({ locale: 'en' });
  }
  handleLocaleChange(locale, e) {
    this.setState({ locale });
  }
  render() {
    const messages = i18n[this.state.locale];
    return (
      <IntlProvider locale={this.state.locale} key={this.state.locale} messages={messages}>
        <div>
          <HashRouter>
            <Switch>
              <Route path="/" component={AppComponent} />
            </Switch>
          </HashRouter>
        </div>
      </IntlProvider>
    );
  }
}

// <div
//   className="hidden-print lang-select"
//   style={{
//     position: 'fixed',
//     zIndex: 1,
//     top: '50%',
//     left: this.state.locale === 'ar' ? '15px' : '',
//     right: this.state.locale === 'ar' ? '' : '15px'
//   }}>
//   <img
//     onClick={this.handleLocaleChange.bind(this, 'en')}
//     src={require('../assets/images/flags/gb.svg')}
//     alt={messages['locale.en']}
//     title={messages['locale.en']}
//     style={{ width: 32, height: 32, display: 'block', cursor: 'pointer' }}
//     />
//   <img
//     onClick={this.handleLocaleChange.bind(this, 'ar')}
//     src={require('../assets/images/flags/ae.svg')}
//     alt={messages['locale.ar']}
//     title={messages['locale.ar']}
//     style={{ width: 32, height: 32, display: 'block', cursor: 'pointer', marginTop: 10 }}
//     />
// </div>
