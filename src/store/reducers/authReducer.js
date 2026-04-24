import { socialAPI } from "../../api/api";
const LOGIN = "login";

const initState = {
  userId: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export const loginThunkCreator = (body) => {
  return async (dispatch) => {
    const response = await socialAPI.login(body);
    dispatch(loginAC(response.data.data.userId));
  };
};

const loginAC = (data) => ({ type: LOGIN, payload: data });
