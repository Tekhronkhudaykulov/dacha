import requests from "../../../helpers/requests";

export const searchDacha = (params) => (dispatch) => {
  dispatch({ type: "search_dacha_start", payload: params });
  requests
    .searchDacha(params)
    .then(({ data }) => {
      dispatch({ type: "search_dacha_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "search_dacha_error", payload: message });
    });
};
