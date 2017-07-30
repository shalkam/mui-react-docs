import React from 'react';
export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    mounted = false;

    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount() {
      if (this.state.Component === null) {
        // Load component synchronously if require is used
        if (typeof getComponent().then === 'undefined') {
          AsyncComponent.Component = getComponent().default;
          this.setState({ Component: getComponent().default });
        } else {
          getComponent()
            .then(m => m.default)
            .then(Component => {
              AsyncComponent.Component = Component;
              if (this.mounted) {
                this.setState({ Component });
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const { Component, loading } = this.state;
      if (Component !== null) {
        return (
          <div>
            <Component {...this.props} />
          </div>
        );
      }
      return null;
    }
  };
}
