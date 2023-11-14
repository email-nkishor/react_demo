import React from 'react';

const withCustomLogic = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // Additional logic can be added here
      this.state = {
        customData: 'This is custom data111'
      };
    }

    render() {
      // Enhance the props of the wrapped component
      const enhancedProps = {
        ...this.props,
        customData: this.state.customData,
      };

      // Return the wrapped component with enhanced props
      return <WrappedComponent {...enhancedProps} />;
    }
  };
};
export default withCustomLogic;