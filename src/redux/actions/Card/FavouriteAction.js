import requests from "../../../helpers/requests";

export const postFavourite = (id) => (dispatch) => {
  dispatch({ type: "favourite_post_start" });
  requests
    .postFavourite(id)
    .then(({ data }) => {
      dispatch({ type: "favourite_post_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "favourite_post_error", payload: message });
    });
};

export const getFavourite = () => (dispatch) => {
  dispatch({ type: "get_favourite_start" });
  requests
    .getFavourite()
    .then(({ data }) => {
      dispatch({ type: "get_favourite_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "get_favourite_error", payload: message });
    });
};
