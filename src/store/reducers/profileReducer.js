import { socialAPI } from "../../api/api";

const GET_PROFILE = "get_profile";

const initState = {
  profile: null,
};

export const profileReducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export const profileThunk = (id) => {
  return async (dispatch) => {
    const response = await socialAPI.getProfile(id);
    dispatch(profileReducerAC(response.data));
  };
};

const profileReducerAC = (data) => ({ type: GET_PROFILE, payload: data });
