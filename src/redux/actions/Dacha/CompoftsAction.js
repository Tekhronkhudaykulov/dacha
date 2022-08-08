import requests from "../../../helpers/requests";

export const comfortItem = () => (dispatch) => {
  dispatch({ type: "comforts_start" });
  requests
    .comforts()
    .then(({ data }) => {
      dispatch({ type: "comforts_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "comforts_error", payload: message });
    });
};
