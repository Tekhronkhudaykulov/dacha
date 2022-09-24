import requests from "../../../helpers/requests";
import { toast } from "react-toastify";

export const registerPage = (userInfo) => (dispatch) => {
  dispatch({ type: "register_start", payload: userInfo });
  requests
    .register(userInfo)
    .then(({ data }) => {
      dispatch({ type: "register_start_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "register_start_error", payload: message });
    });
};

export const login = (userLogin) => (dispatch) => {
  dispatch({ type: "login_start", payload: userLogin });
  requests
    .login(userLogin)
    .then(({ data }) => {
      dispatch({ type: "login_start_success", payload: data });
      console.log(toast.success);
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "login_start_error", payload: message });
      toast.error("Hatolik yuz berdi");
    });
};

export const sms = (params) => (dispatch) => {
  dispatch({ type: "sms_start", payload: params });
  requests
    .sms(params)
    .then(({ data }) => {
      dispatch({ type: "sms_start_success", payload: data });
      alert("Hush kelibsiz!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "sms_start_error", payload: message });
      alert("Sms codni to`gri tering!");
    });
};

export const passwordRecover = (params) => (dispatch) => {
  dispatch({ type: "password_Recover_start", payload: params });
  requests
    .passwordRecover(params)
    .then(({ data }) => {
      dispatch({ type: "password_Recover_start_success", payload: data });
      alert("Raqam to`g`ri!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "password_Recover_start_error", payload: message });
      alert("Bazada bunaqa raqam topilmadi!");
    });
};

export const verifyRecover = (params) => (dispatch) => {
  dispatch({ type: "verifyRecover_start", payload: params });
  requests
    .verifyRecover(params)
    .then(({ data }) => {
      dispatch({ type: "verifyRecover_start_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "verifyRecover_start_error", payload: message });
      alert("Sms codni to`gri tering!");
    });
};

export const passwordUpdate = (params) => (dispatch) => {
  dispatch({ type: "passwordUpdate_start", payload: params });
  requests
    .passwordUpdate(params)
    .then(({ data }) => {
      dispatch({ type: "passwordUpdate_start_success", payload: data });
      alert("Parol muvafaqqiyatli o`zgartirildi!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "passwordUpdate_start_error", payload: message });
      alert("Hatolik bor!");
    });
};
