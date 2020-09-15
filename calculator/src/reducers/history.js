//Let default state be an empty array where our history will go
const historyReducer = (state = [], action) => {
  switch (action.type) {
    case "HISTORY":
      //Create a Copy of the original state array
      const historyList = [...state];
      //Add the Calculate value to the new array by pushing the history list
      historyList.push(Calculate);
      //Return the updated state(overwriting the states)
      return historyList;
    //By default,makes no change
    default:
      return state;
  }
};
export default historyReducer;
