// packages
import { AsyncStorage } from "react-native";

// api
import giantApi from "../api";

// context and provider
import createDataContext from "./createDataContext";

// navigation
import { navigate } from "../navigation/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { errorMessage: "", token: action.payload };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "LOGOUT":
      return { token: null, errorMessage: "" };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await giantApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "LOGIN", payload: response.data.token });

    navigate("AllGiants");
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Something went wrong when signing up",
    });
  }
};

const login = (dispatch) => async ({ email, password }) => {
  try {
    const response = await giantApi.post("/login", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "LOGIN", payload: response.data.token });
    navigate("AllGiants");
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Something went wrong when logging in",
    });
  }
};

const logout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
  navigate("authFlow");
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR_MESSAGE" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout, clearErrorMessage },
  { token: null, errorMessage: "" }
);
