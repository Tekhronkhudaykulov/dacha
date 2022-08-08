import requests from "../../../helpers/requests";

export const dachaLevel = (params) => (dispatch) => {
    dispatch({ type: "dachaLevel_start", payload: params });
    requests
      .dachaLevel(params)
      .then(({ data }) => {
        dispatch({ type: "dachaLevel_success", payload: data, _method: "PUT" });
        alert("Success")
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "dachaLevel_error", payload: message });
        alert("Error")
      });
  };
  
  
  export const dachaUp = (params) => (dispatch) => {
    dispatch({ type: "dachaUp_start", payload: params });
    requests
      .dachaUp(params)
      .then(({ data }) => {
        dispatch({ type: "dachaUp_success", payload: data, _method: "PUT" });
        alert("Success")

      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "dachaUp_error", payload: message });
        alert("Error")

      });
  };