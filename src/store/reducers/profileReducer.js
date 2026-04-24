import { socialAPI } from "../../api/api";

const GET_PROFILE = "get_profile";
const CHANGE_PROFILE = "change_profile";

const initState = {
  profile: null,
  file: {},
};

export const profileReducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CHANGE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.payload?.photos,
        },
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

export const changeProfileThunk = (formData) => {
  return async (dispatch) => {
    const response = await socialAPI.changeProfile(formData);
    dispatch(changeProfileReducerAC(response.data));
  };
};

const profileReducerAC = (data) => ({ type: GET_PROFILE, payload: data });
const changeProfileReducerAC = (file) => ({type: CHANGE_PROFILE,payload: file,});
