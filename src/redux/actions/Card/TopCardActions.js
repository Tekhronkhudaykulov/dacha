import requests from "../../../helpers/requests";

export const topCard = () => (dispatch) => {
  dispatch({ type: "topCard_start" });
  requests
    .topCard()
    .then(({ data }) => {
      dispatch({ type: "topCard_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "topCard_error", payload: message });
    });
};
