import { AUTH_LOGIN } from "../constants/actionTypes";

export const authLogin = (authData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN, payload: authData });
  } catch (error) {
    console.log(error.message);
  }
};
