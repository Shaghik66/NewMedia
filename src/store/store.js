import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";
import { profileReducer } from "./reducers/profileReducer";

const rootReducers = combineReducers({
  usersData: usersReducer,
  profileData: profileReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
