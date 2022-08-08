import requests from "../../../helpers/requests";

export const deleteDacha = (id) => (dispatch) => {
  dispatch({ type: "delete_dacha_start", payload: id });
  requests
    .deleteDacha(id)
    .then(({ data }) => {
      dispatch({
        type: "delete_dacha_success",
        payload: id,
      });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "delete_dacha_error", payload: message });
    });
};
