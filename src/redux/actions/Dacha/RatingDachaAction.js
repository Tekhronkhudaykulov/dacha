import requests from "../../../helpers/requests";

export const ratingDacha = (params) => (dispatch) => {
  dispatch({ type: "rating_dacha_start", payload: params });
  requests
    .ratingDacha(params)
    .then(({ data }) => {
      dispatch({
        type: "rating_dacha_success",
        payload: data,
      });
      alert("Dachaga reyting berildi!")
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "rating_dacha_error", payload: message });
    });
};
