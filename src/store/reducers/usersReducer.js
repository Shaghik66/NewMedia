const GET_ALL_USERS = "get_all_users";
const IS_LOADING = "is_loading";
import { socialAPI} from "../../api/api"; 


const initState = {
  users: [],
  isLoading: false,
};

export const usersReducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const getUsersThunk = () => {
  return async (dispatch) => {
    dispatch(isLoadingAC(true));
    const response = await socialAPI.getAllUsers();
    dispatch(usersReducerAC(response?.data.items));
    dispatch(isLoadingAC(false));
  };
};

export const usersReducerAC = (data) => ({type: GET_ALL_USERS, payload: data});

export const isLoadingAC = (data) => ({type: IS_LOADING, payload: data});
