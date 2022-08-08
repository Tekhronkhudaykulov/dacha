import requests from "../../../helpers/requests";

export const userUpdate = (params) => (dispatch) => {
  dispatch({ type: "user_update_start", payload: params });
  requests
    .userUpdate(params)
    .then(({ data }) => {
      dispatch({ type: "user_update_success", payload: data, _method: "PUT" });
      alert("Akkaunt muvoffaqiyatli o`zgartirildi!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "user_update_error", payload: message });
      alert("Hatolik bor!");
    });
};
