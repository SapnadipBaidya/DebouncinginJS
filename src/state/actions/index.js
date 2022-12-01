export const CLICKFREEDAOPEN = () => {
  return (dispatch) => {
    dispatch({
      type: "CLICKEDOPEN",
      payload: true,
    });
  };
};

export const CLICKFREEDACLOSE = () => {
  return (dispatch) => {
    dispatch({
      type: "CLICKEDCLOSE",
      payload: false,
    });
  };
};

export const getUsers = () => {
  return {
    type: "GET_USERS_REQUESTED",
  };
};

export const getToCallUsers = () => {
  return {
    type: "GET_TO_CALL_USERS_REQUESTED",
  };
};

export const getSearchUsers = () => {
  return {
    type: "SEARCH_USERS_REQUESTED",
  };
};

export const getFinishedCallUsers = () => {
  return {
    type: "GET_FINISHED_CALL_USERS_REQUESTED",
  };
};

export const getUpcomingUsers = () => {
  return {
    type: "UPCOMING_USERS_REQUESTED",
  };
};

export const NEXT = () => {
  return {
    type: "NEXT",
    payload: 1,
  };
};

export const PREV = () => {
  return (dispatch) => {
    dispatch({
      type: "PREV",
      payload: 1,
    });
  };
};

export const finishNEXT = () => {
  return {
    type: "FINISHNEXT",
    payload: 1,
  };
};

export const finishPREV = () => {
  return (dispatch) => {
    dispatch({
      type: "FINISHPREV",
      payload: 1,
    });
  };
};

export const searchNEXT = () => {
  return {
    type: "SEARCHNEXT",
    payload: 1,
  };
};

export const searchPREV = () => {
  return (dispatch) => {
    dispatch({
      type: "SEARCHPREV",
      payload: 1,
    });
  };
};
export const GETLETTERS = (letter) => {
  return (dispatch) => {
    dispatch({
      type: "LETTERS",
      payload: letter,
    });
  };
};


export const rememberLastPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: "LASTPAGE",
      payload: page,
    });
  };
};

export const rememberLastFinishedPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: "LASTFINISHEDPAGE",
      payload: page,
    });
  };
};

