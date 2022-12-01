const initialState = {
    callUsers: [],
    loading: false,
    error: "",
  };
  
  const callUsers = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TO_CALL_USERS_REQUESTED":
        return { ...state, loading: true };
      case "GET_TO_CALL_USERS_SUCCESS":
        return { ...state, loading: false, callUsers: action.callUsers };
      case "GET_TO_CALL_USERS_FAILED":
        return { ...state, loading: false, error: action.message };
      default:
        return state;
    }
  };
  
  export default callUsers;
  