import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_Succsess,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_Succsess,
  USER_AUTH_FAILED,
  USER_AUTH_Succsess,
  USER_LOAD,
} from "../const/userconst";

export const signup = (newuser, navigate) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const res = await axios.post("http://localhost:7000/user/signup", newuser);
    console.log(res.data);
    dispatch({
      type: REGISTER_Succsess,
      payload: res.data,
    });
    navigate("/signin");
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error,
    });
    console.dir(error.response.data);

    error.response.data.msg
      ? alert(error.response.data.msg)
      : error.response.data.forEach((el) => {
          alert(el.msg);
        });
  }
};
export const signin = (user,navigate) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const res = await axios.post("http://localhost:7000/user/signin", user);
    console.log(res.data);
    dispatch({
      type: LOGIN_Succsess,
      payload: res.data,
    });
    navigate('/productlist')
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error,
    });
    console.dir(error);

    error.response.data.msg
      ? alert(error.response.data.msg)
      : error.response.data.forEach((el) => {
          alert(el.msg);
        });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await axios.get("http://localhost:7000/user/current", opts);
    dispatch({ type: USER_AUTH_Succsess, payload: res.data.user });
  } catch (error) {
    dispatch({ type: USER_AUTH_FAILED, payload: error });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
