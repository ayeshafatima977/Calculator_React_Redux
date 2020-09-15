const history = (resultHistory) => {
  return {
    type: "HISTORY",
    // This is the data we are passing through the reducer so that it can do its job
    payload: resultHistory,
  };
};
