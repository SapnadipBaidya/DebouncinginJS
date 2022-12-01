import { call, put, takeLatest ,select} from "redux-saga/effects";
import axios from "axios";
function* handleGetCallUsers() {//this is worker saga
 
  let pageNumber = yield select((state)=>state.reducerCallPagination);
    let pageSize=5;
  function fetchGetToCallUsers(){
   
   // console.log("api is getting page number "+pageNumber);
    const url = `http://localhost:4000/getUserCallWorkBook.do?pageNumber=${pageNumber}&pageSize=${pageSize}`;
  return axios.post(url)
  .then((response) => {
    console.log(response.data.workbookItems);
    return response.data.workbookItems})
  .catch(function (error) {
    // handle error
    console.log(error);
    return error;
  })
  }
  try {//call ->  put  // both of this works togather
    
    const callUsers = yield call(fetchGetToCallUsers);
   // console.log("inside try");
    console.log(callUsers);
   // console.log("inside try");

    yield put({ type: "GET_TO_CALL_USERS_SUCCESS", callUsers: callUsers });
    console.log("callUsers "+callUsers);
    //put is dispatching a new action with the result from the previous yield. here (users) is the result from previous yield
  } catch (err) {
    console.log("inside err");
    console.log(err);
    yield put({ type: "GET_TO_CALL_USERS_FAILED", message: err.message });
  }
}
console.log("hello above inside watcherGetCallSaga generator");


function* watcherGetCallUserSaga() {//this is watcher saga
  console.log("hello inside watcherGetCallSaga above yield");
  yield takeLatest("GET_TO_CALL_USERS_REQUESTED", handleGetCallUsers);  //watcher constantly checks for GET_TO_CALL_USERS_FAILED to come in , once it came then it runs the function

  console.log("hello inside watcherGetCallSaga below yeild");
}

export default watcherGetCallUserSaga;
