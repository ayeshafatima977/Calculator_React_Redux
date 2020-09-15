//Let default state be an empty array where our history will go
const historyReducer = (state = ["0"], action) => {
  switch (action.type) {
    case "HISTORY":
      //Prepare a result object
      const newResult = {
        result: action.payload,
      };
      //Create a Copy of the original state array
      const historyList = [...state];
      //Add the Calculate value to the new array by pushing the history list
      historyList.push(newResult);
      //Return the updated state(overwriting the states)
      return historyList;
    //By default,makes no change
    default:
      return state;
  }
};
export default historyReducer;
