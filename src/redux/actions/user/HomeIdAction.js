import requests from "../../../helpers/requests";

export const fetchIdUser = (id) => (dispatch) => {
  dispatch({ type: "fetch_Id_user_start", payload: id });
  requests
    .fetchIdUser(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_Id_user_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "fetch_Id_user_error", payload: message });
    });
};
