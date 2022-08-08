import requests from "../../../helpers/requests";

export const addHome = (payload) => (dispatch) => {
  dispatch({ type: "add_home_start", payload });
  requests
    .addHome(payload)
    .then(({ data }) => {
      dispatch({ type: "add_home_success", payload: data });
      alert("Dacha qo`shildi !");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "add_home_error", payload: message });
      alert("Dacha qo`shishda hatolik bor !");
    });
};

export const dachaUpdate = (params) => (dispatch) => {
  dispatch({ type: "dacha_update_start", payload: params });
  requests
    .dachaUpdate(params)
    .then(({ data }) => {
      dispatch({ type: "dacha_update_success", payload: data, _method: "PUT" });
      alert("Dacha o`zgartirildi !");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "dacha_update_error", payload: message });
      alert("Dacha o`zgartirishda hatolik bor!");
    });
};
