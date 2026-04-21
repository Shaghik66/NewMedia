import { socialAPI } from "../../api/api";

const GET_ALL_USERS = "get_all_users";
const IS_LOADING = "is_loading";
const CHANGE_PAGE = "change_page";

const initState = {
  users: [],
  isLoading: false,
  page: 1,
  totalCount: 2000,
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
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};

export const getUsersThunk = (page) => {
  return async (dispatch) => {
    dispatch(isLoadingAC(true));
    const response = await socialAPI.getAllUsers(page);
    dispatch(usersReducerAC(response?.data.items));
    dispatch(isLoadingAC(false));
  };
};

const usersReducerAC = (data) => ({type: GET_ALL_USERS,payload: data,});
const isLoadingAC = (data) => ({ type: IS_LOADING, payload: data });
export const changePageAc = (newPage) => ({type: CHANGE_PAGE, payload: newPage})
