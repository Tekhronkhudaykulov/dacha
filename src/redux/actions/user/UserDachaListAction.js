import requests from "../../../helpers/requests";

export const userDachaListDacha = () => (dispatch) => {
  dispatch({ type: "user_dacha_list_start"});
  requests
    .userDachaList()
    .then(({ data }) => {
      dispatch({ type: "user_dacha_list_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "user_dacha_list_error", payload: message });
    });
};


export const userDachaListVerified = () => (dispatch) => {
  dispatch({ type: "user_dacha_list_verified_start"});
  requests
    .userDachaListVerified()
    .then(({ data }) => {
      dispatch({ type: "user_dacha_list_verified_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "user_dacha_list_verified_error", payload: message });
    });
};
