import requests from "../../../helpers/requests";
export const premiumDacha = () => (dispatch) => {
  dispatch({ type: "premium_dacha_start" });
  requests
    .premiumDacha()
    .then(({ data }) => {
      dispatch({ type: "premium_dacha_success", payload: data.data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "premium_dacha_error", payload: message });
    });
};
