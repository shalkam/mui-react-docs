import React, { PureComponent } from 'react';
import './index.scss';

class TokenLaunch extends PureComponent {
  render() {
    return (
      <main className="token-launch-container">
        <section className="introduction-section"><Introduction /></section>
        <section className="serverless-future-section"><ServerlessFuture /></section>
        <section className="serverless-computing-points-section"><ServeLessComputing /></section>
        <section className="marketplace-feedback-loop-section"><MarketplaceFeedback /></section>
        <section className="developers-funds-section"><DeveloperFund /></section>
        <section className="wrl-token-section"><WrlToken /></section>
        <section className="buy-tokens-section"><BuyToken /></section>
        <section className="team-section"><Teams /></section>
        <section className="faq-section"><FAQ /></section>
        <section className="footer-section"><Footer /></section>
      </main>
    );
  }
}

const Introduction = () => {
  return (
    <div className="introduction-section-container container">
      <nav className="container navbar navbar-toggleable-md navbar-light">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand">
          <div className="brand-image" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-left">
            <li className="nav-item active title-semibold-20">
              <a className="nav-link">Docs</a>
            </li>
            <li className="nav-item active title-semibold-20">
              <a className="nav-link">Procurement</a>
            </li>
            <li className="nav-item active title-semibold-20">
              <a className="nav-link">Token Sale <span className="sr-only">(current)</span></a>
            </li>
          </ul>

        </div>
      </nav>

      <div className="token-launch-info container">
        <div className="token-launch--description">
          <div className="tl-header1">WRL Token Launch</div>
          <div className="title-semibold-30">
            Wireline Is Launching the Largest Open Source Fund for software development related to Serverless and Distributed Applications.
          </div>
        </div>
        <div className="pre-sale-container">
          <div className="pre-sale-container--title">
            <span> The Launch Event is Scheduled for </span>
            <strong>9:00am Sept 1st 2017.</strong>
            <span>
              Customers can participate in the institutional pre-sale between August 15-30.
            </span>
          </div>
          <input
            type="text"
            className="pre-sale-container--email"
            placeholder="Your Email Address"
          />
          <input
            type="button"
            className="uppercase btn btn-lg btn-pri btn-signuptoken"
            value="Signup For Pre-Sales"
          />
        </div>
      </div>
    </div>
  );
};

const ServerlessFuture = () => {
  return (
    <div className="serverless-future-container container">
      <div className="get-to-know-more">v</div>
      <div className="title serverless-text">The App Store for the Serverless Future</div>
      <div className="paragraph-light-30">
        Wireline community has a rich economic interactions between participants:{' '}
      </div>
      <ul className="paragraph-light-30 dashed future-list">
        <li>Corporate buying compute time</li>
        <li>Developers receiving royalties</li>
        <li>Service providers completing paid projects</li>
      </ul>
      <div className="future">WRL is the token which backs these interactions. </div>
      <button className="uppercase btn btn-lg btn-pri btn-download">Download Whitepaper</button>
    </div>
  );
};

const ServeLessComputing = () => {
  return (
    <div className="serverless-computing-container container">
      <div className="">
        <i className="" />
        <div className="paragraph-light-30 para-text">
          ICOs won’t replace venture, they’ll benefit from it
        </div>
        <div className="uppercase para-author">- BY LUCAS GEIGER</div>
        <div className="uppercase paragraph-light-20 para-source">Venture Beat</div>
      </div>
      <div className="">
        <i className="" />
        <div className="paragraph-light-30 para-text">
          Serverless Computing lorem ipsum dolor acmet minon sapience
        </div>
        <div className="uppercase para-author">- BY Manuel Toscano</div>
        <div className="uppercase paragraph-light-20 para-source">NEW YORK TIMES</div>
      </div>
      <div className="">
        <i className="" />
        <div className="paragraph-light-30 para-text">
          How serverless computing could help enterprises cut cloud complexity
        </div>
        <div className="uppercase para-author">- BY Clive Longbottom</div>
        <div className="uppercase paragraph-light-20 para-source">The Economist</div>
      </div>
    </div>
  );
};

const MarketplaceFeedback = () => {
  return (
    <div className="marketplace-feedback-container container">
      <div className="title">THE MARKET PLACE EXCHANGE</div>
      <div className="paragraph-light-30 para-text">
        A network effect is enabled by the developer building foundational building blocks and IT organizations using them in real business applications. The marketplace is creating value today.
      </div>
      <div className="placeholder" />
      <div className="details">
        <div className="paragraph-light-20">
          <div>
            <span className="title-semibold-20">Developers</span>
            {' '}
            publish 'Wires' these are the building blocks of code that can be connected into larger apps. Developers familiam with package managers are repositories such as NPM, understand this model. The difference is that developers are rewarded for components that are useful and popular, similar to an appstore.
          </div>
        </div>
        <div className="paragraph-light-20">
          <div>
            <span className="title-semibold-20">IT organizations</span>
            {' '}
            have a one-stop solution for deploying custom applications or installing third party applications built by the developer community.
          </div>
        </div>
      </div>
    </div>
  );
};

const DeveloperFund = () => {
  return (
    <div className="developers-fund-container container">
      <div className="fund-details">
        <div className="title">Developers Fund</div>
        <div className="paragraph-light-30">
          The Developer fund kicks of the developer adoption of the platform and creates meaningful code for IT Organizations. Our fund will guarantee the payments and contract specific works which are critical to the ecosystem.
        </div>
        <div className="title-semibold-30 blockchain-text">Blockchain</div>
        <div className="paragraph-light-20">
          The blockchain enables fairness, transparency, auditing of the uses of the developer fund. A cap of 2.5% of all funds can be disbursed in any quarter, combining royalties due and procurement opportunities. If Wireline's obligations are greater than that, it must purchase tokens outright in the market.
        </div>
      </div>
      <div className="fund-charts" />
    </div>
  );
};

const WrlToken = () => {
  return (
    <div className="wrl-token-container container">
      <div>
        <i />
        <span className="title">The WRL Token</span>
      </div>
      <div className="paragraph-light-30 para-text">
        The WRL token is the means of sharing in the value created by the ecosytem among Developer, IT organizations, and other parties working for the success of serverlesss and distributed applications.
      </div>
      <div className="wrl-token-details">
        <div className="title-semibold-30">
          Developers and Corporate users have different incentives for buying, holding and selling the token.
        </div>
        <div className="details">
          <div className="sub-details">
            <div className="title-semibold-30">Developers</div>
            <div className="paragraph-light-20">
              Developers publish 'Wires' these are the building blocks of code that can be connected into larger apps. Developers familiam with package managers are repositories such as NPM, understand this model. The difference is that developers are rewarded for components that are useful and popular, similar to an appstore.
            </div>
          </div>
          <div className="sub-details">
            <div className="title-semibold-30">Corporate Users</div>
            <div className="paragraph-light-20">
              IT organizations have a one-stop solution for deploying custom applications or installing third party applications built by the developer community.
            </div>
          </div>
        </div>
        <div>
          <div className="chart" />
          <div className="paragraph-light-20">
            Over time it would be expected that corporate users out pace the growth of Developers, as in natural in most software ecosystems.
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyToken = () => {
  return (
    <div className="buy-token-container">
      <div className="token-sold">
        <div className="uppercase title-white buy-tokens">BUY TOKENS</div>
        <div className="uppercase title-semibold-20">Get ready for the</div>
        <div className="uppercase title-semibold-20">September Launch</div>
        <div className="timeleft">
          <div>
            <div className="title-xl">
              45
            </div>
            <div className="paragraph-light-20 uppercase text">Days</div>
          </div>
          <div className="title-xl spacer">:</div>
          <div>
            <div className="title-xl">12</div>
            <div className="paragraph-light-20 uppercase">Hours</div>
          </div>
          <span className="title-xl spacer">:</span>
          <div>
            <div className="title-xl">09</div>
            <div className="paragraph-light-20 uppercase">Min</div>
          </div>
        </div>
        <div className="paragraph-light-20 uppercase token-sold-quota">TOKEN SOLD</div>
        <input
          type="button"
          value="GET CONTRACT ADDRESS"
          className="btn btn-lg btn-pri btn-address"
        />
      </div>
      <div className="timeline">
        <div className="uppercase title-bold-20 timeline-text">Timeline</div>
        <div className="timeline-details">
          <div className="timeline-detail-item">
            <div className="title-semibold-15 date uppercase">Mar 20 2017</div>
            <div className="title-semibold-20 event">Lorem ipsum dolor</div>
            <div className="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                checked="checked"
                readOnly
                value="ropt1"
                className="timeline-done"
              />
              <label htmlFor="ritema" />
            </div>
          </div>
          <div className="timeline-detail-item">
            <div className="title-semibold-15 date">JUN 15 2017</div>
            <div className="title-semibold-20 event">Sit amet consectetuer </div>
            <div className="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value="ropt1"
                className="timeline-done"
              />
              <label htmlFor="ritema" />
            </div>
          </div>
          <div className="timeline-detail-item">
            <div className="title-semibold-15 date">AUG 30 2017</div>
            <div className="title-semibold-20 event">Magna aliquam erat volutpat </div>
            <div className="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value="ropt1"
                className="timeline-done"
              />
              <label htmlFor="ritema" />
            </div>
          </div>
          <div className="timeline-detail-item">
            <div className="title-semibold-15 date">SEP 01 2017</div>
            <div className="title-semibold-20 event">Nonummy nibh euismod </div>
            <div className="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value="ropt1"
                className="timeline-done"
              />
              <label htmlFor="ritema" />
            </div>
          </div>
          <div className="timeline-detail-item">
            <div className="title-semibold-15 date">NOV 20 2017</div>
            <div className="title-semibold-20 event">Enim ad minim veniam quis </div>
            <div className="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value="ropt1"
                className="timeline-done"
              />
              <label htmlFor="ritema" />
            </div>
          </div>
          <div className="timeline-detail-item">
            <div className="title-semibold-15 date">NOV 24 2017</div>
            <div className="title-semibold-20 event">Aliquip ex ea commodo </div>
            <div className="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value="ropt1"
                className="timeline-done"
              />
              <label htmlFor="ritema" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="team-container container">
      <div className="col-md-4">
        <div className="title uppercase">Team</div>
      </div>
      <div className="col-md-4">
        <div className="title-semibold-30">Founding Team</div>
        <div className="team-members">
          <div className="team-member-item">
            <div className="title-semibold-20 name">Lucas Geiger</div>
            <div className="paragraph-light-20">Sr FullStack Engineer</div>
            <div className="paragraph-light-20">3x Entrepreneur</div>
          </div>
          <div className="team-member-item">
            <div className="title-semibold-20 name">Rich Burdon</div>
            <div className="paragraph-light-20">Sr Engineer Google Cloud</div>
            <div className="paragraph-light-20">App Engine Architect</div>
          </div>
          <div className="team-member-item">
            <div className="title-semibold-20 name">Massimo Di Pierro Phd.</div>
            <div className="paragraph-light-20">Professor DePaul University</div>
            <div className="paragraph-light-20">High Performance computing</div>
            <div className="paragraph-light-20">Author of Web2Py Framework</div>
          </div>
          <div className="team-member-item">
            <div className="title-semibold-20 name">Andy Madsen</div>
            <div className="paragraph-light-20">Integration Services Engineer</div>
          </div>
          <div className="team-member-item">
            <div className="title-semibold-20 name">Jeremy Dillworth</div>
            <div className="paragraph-light-20">Full Stack Architect</div>
          </div>
          <div className="team-member-item">
            <div className="title-semibold-20 name">Nathan Morris</div>
            <div className="paragraph-light-20">Platform Engineer</div>
            <div className="paragraph-light-20">3x Entrepreneur</div>
          </div>
          <div className="team-member-item">
            <div className="title-semibold-20 name">Kieran Bellew</div>
            <div className="paragraph-light-20">Testing Engineer</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="title-semibold-30">Advisory & Inventors</div>
        <div className="team-members">
          <div className="team-member-item">
            <div className="title-semibold-20 name">Bruno Orsini</div>
            <div className="paragraph-light-20">Google, Sr. Business</div>
            <div className="paragraph-light-20">Development Manager Android, Chrome & VR</div>
          </div>
        </div>
        <div className="team-member-item">
          <div className="title-semibold-20 name">Stealth IBM</div>
          <div className="paragraph-light-20">(Disclosure Pending Corporate Approval)</div>
        </div>
        <div className="team-member-item">
          <div className="title-semibold-20 name">Stealth Amazon</div>
          <div className="paragraph-light-20">(Disclosure Pending Corporate Approval)</div>
        </div>
        <div className="team-member-item">
          <div className="title-semibold-20 name">Stephen Duvignau</div>
          <div className="paragraph-light-20">Partner at FAMA Investimentos</div>
        </div>
        <div className="team-member-item">
          <div className="title-semibold-20 name">William Harris</div>
          <div className="paragraph-light-20">Salesforce Director of Product Management</div>
        </div>
        <div className="team-member-item">
          <div className="title-semibold-20 name">Marc Herson</div>
          <div className="paragraph-light-20">Ex Softbank Ventures</div>
        </div>
        <div className="team-member-item">
          <div className="title-semibold-20 name">Nicole Miller</div>
          <div className="paragraph-light-20">Ex Reuters</div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container container">
      <div className="col-md-4">
        <div className="title uppercase">FAQs</div>
      </div>
      <div className="quORa-list col- md-8">
        <div className="qaORa-item">
          <div className="question title-semibold-30">Why Issue a Token and not use Dollars?</div>
          <div className="answer paragraph-light-20">
            Firstly, rewards membership in any community (such as airline rewards) belong on the blockchain for many reasons, including transparency and auditability. We forsee this trend growing following Wireline's lead. Secondly, App stores have very complicated accounting. Micropayments: International banking causes great overhead for the app-store owner, meaning that only when accounts reach a minimum level will payments be made. Split pay: Wireline's platform multiplies complexity by allowing third party wires to be nested in different wires. This causes great trouble in determining splits. Lastly Corporations can reduce costs by reserving compute time: Corporations can effectively pre-pay for compute time by holding tokens.
          </div>
        </div>
        <div className="qaORa-item">
          <div className="question title-semibold-30">Why Issue a Token and not use Dollars?</div>
          <div className="answer paragraph-light-20 fade-text">
            Firstly, rewards membership in any community (such as airline rewards) belong on the blockchain for many reasons, including transparency and auditability. We forsee this trend growing following Wireline's lead. Secondly, App stores have very complicated accounting. Micropayments: International banking causes great overhead for the app-store owner, meaning that only when accounts reach a minimum level will payments be made. Split pay: Wireline's platform multiplies complexity by allowing third party wires to be nested in different wires. This causes great trouble in determining splits. Lastly Corporations can reduce costs by reserving compute time:
            {' '}
            <span>Corporations can effectively pre-pay for compute time by holding tokens.</span>
          </div>
        </div>
        <input type="button" value="More" className="uppercase btn btn-pri btn-more" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container container">
      <div className="deployment">
        <div className="time paragraph-light-30">Your next app deployed in 2 minutes</div>
        <input type="button" className="uppercase btn btn-pri btn-store" value="Go to app store" />
      </div>
      <div className="links">
        <div className="brand-image" />
        <div className="medium-24 primary-links">Docs</div>
        <div className="medium-24 primary-links">Procurement</div>
        <div className="medium-24 primary-links">Token Sale</div>
        <div className="paragraph-light-20 secondary-links">Copyright  Wireline © 2017</div>
        <div className="paragraph-light-20 secondary-links">Terms & Conditions</div>
        <div className="paragraph-light-20 secondary-links"> Privacy Policy</div>
      </div>
    </div>
  );
};
export default TokenLaunch;
