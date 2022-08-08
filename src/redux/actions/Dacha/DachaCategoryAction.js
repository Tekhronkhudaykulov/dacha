import requests from "../../../helpers/requests";

export const dachaCategory = () => (dispatch) => {
  dispatch({ type: "dacha_category_start" });
  requests
    .dachaCategory()
    .then(({ data }) => {
      dispatch({ type: "dacha_category_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "dacha_category_error", payload: message });
    });
};
