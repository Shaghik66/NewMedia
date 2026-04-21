import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";
import { profileReducer } from "./reducers/profileReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducers = combineReducers({
  usersData: usersReducer,
  profileData: profileReducer,
  login: authReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

window.store = store;

export default store;
