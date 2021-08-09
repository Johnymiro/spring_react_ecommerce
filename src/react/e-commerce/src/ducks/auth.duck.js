import { showCurrentUserSuccess } from "./user.duck";

export const AUTH_INFO_SUCCESS = "app/auth/AUTH_INFO_SUCCESS";

export const LOGIN_REQUEST = "app/auth/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "app/auth/LOGIN_SUCCESS";
export const LOGIN_ERROR = "app/auth/LOGIN_ERROR";

export const SIGNUP_REQUEST = "app/auth/SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "app/auth/SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "app/auth/SIGNUP_ERROR";

export const LOGOUT_REQUEST = "app/auth/LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "app/auth/LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "app/auth/LOGOUT_ERROR";

const initialState = {
  isAuthenticated: false,

  loginInProgress: false,
  loginError: null,

  signupInProgress: false,
  signupError: null,

  logoutInProgress: false,
  logoutError: null,

  user: null,
};

export default function authReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_INFO_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!payload,
      };

    case LOGIN_REQUEST:
      return { ...state, loginInProgress: true, loginError: null };
    case LOGIN_SUCCESS:
      console.log("Login succes inside the reducer")
      return {
        ...state,
        loginInProgress: false,
        isAuthenticated: true,
        user: payload,
      };
    case LOGIN_ERROR:
      return { ...state, loginInProgress: false, loginError: payload };

    case SIGNUP_REQUEST:
      return { ...state, signupInProgress: true, signupError: null };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupInProgress: false,
      };
    case SIGNUP_ERROR:
      return { ...state, signupInProgress: false, signupError: payload };

    case LOGOUT_REQUEST:
      return { ...state, logoutInProgress: true, logoutError: null };
    case LOGOUT_SUCCESS:
      return { ...state, logoutInProgress: false, isAuthenticated: false };
    case LOGOUT_ERROR:
      return { ...state, logoutInProgress: false, logoutError: payload };
    default:
      return state;
  }
}

export const authInfoSuccess = (user) => ({
  type: AUTH_INFO_SUCCESS,
  payload: user,
});

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginError = (e) => ({ type: LOGIN_ERROR, payload: e });

export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupError = (e) => ({ type: SIGNUP_ERROR, payload: e });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutError = (e) => ({ type: LOGOUT_ERROR, payload: e });

export const login =
  ({ username, password }) =>
  (dispatch, getState, crudApi) => {
    dispatch(loginRequest());
    return crudApi
      .auth()
      .signInWithUsernameAndPassword({ username, password })
      .then((res) => {
        if (!res?.data) {
          throw Error("Missing data");
        }
        console.log("Login Response", res);
        console.count();
        dispatch(loginSuccess(res.data));
        res?.data?.accessToken
          ? window.localStorage.setItem("jwt", res.data.accessToken)
          : window.localStorage.setItem("jwt", "");
      })
      .catch((e) => {
        dispatch(loginError(e));
        throw e;
      });
  };

export const signup = (params) => (dispatch, getState, crudApi) => {
  const { email, password, username } = params;
  dispatch(signupRequest());
  return crudApi
    .auth()
    .createUser({ email, password, username })
    .then((r) => {
      dispatch(signupSuccess());
    })
    .catch((e) => {
      dispatch(signupError(e));
      throw e;
    });
};

export const logout = () => (dispatch, getState, crudApi) => {
  dispatch(logoutRequest());
  return crudApi
    .auth()
    .signOut()
    .then(() => dispatch(logoutSuccess()))
    .then(() => dispatch(showCurrentUserSuccess(null)))
    .catch((e) => {
      dispatch(logoutError(e));
      throw e;
    });
};
