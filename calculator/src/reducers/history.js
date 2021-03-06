//Let default state be an empty array where our history will go: Don't keep 0 otherwise the list will be empty
//NOTE:Initializing at 0 will show first value in the list as zero
const historyReducer = (state = [], action) => {
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
