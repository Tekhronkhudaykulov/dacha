import requests from "../../../helpers/requests";

export const fetchUser = () => (dispatch) => {
  dispatch({ type: "user_start" });
  requests
    .fetchUser()
    .then(({ data }) => {
      dispatch({ type: "user_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "user_error", payload: message });
    });
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: "clear_user" });
};
