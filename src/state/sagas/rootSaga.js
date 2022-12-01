import { all, fork } from "redux-saga/effects";
import watcherGetCallUserSaga from "./handlers/fetchCallUsers";
import watcherFinishedCallUserSaga from "./handlers/fetchFinishedCallUser";
import watcherUserSaga from "./handlers/fetchUsers";
import watcherGetSearchSaga from "./handlers/fetchSearchUsers"
import watcherGetUpcomingUserSaga from "./handlers/fetchUpcomingUsers";

export default function* rootSaga() {
 // yield all([fork(watcherUserSaga),fork(watcherGetCallUserSaga),fork(watcherFinishedCallUserSaga),fork(watcherGetSearchSaga),fork(watcherGetUpcomingUserSaga)]);
yield all([watcherUserSaga,watcherGetCallUserSaga,watcherFinishedCallUserSaga,watcherGetSearchSaga,watcherGetUpcomingUserSaga].map(fork))
}
//fork helps to run wathcers in a non blocking way //assigning each thread for each watcher

// all helps to run all the reducers parallely