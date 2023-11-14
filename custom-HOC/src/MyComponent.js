import WrappedComponent from './WrappedComponent'
const MyComponent = (props) => {
    return (
      <div>
        <p>Regular component</p>
        <p>Custom Data: {props.customData}</p>
      </div>
    );
  };
  
  // Apply the HOC to the component
  export default WrappedComponent(MyComponent);