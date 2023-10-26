export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };

  export const incrementWithValue = (value=1) =>{
    return {
        type: "INCREMENT_WITH_VALUE",
        value:value
    }
  };
  