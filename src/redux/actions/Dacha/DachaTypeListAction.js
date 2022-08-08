import requests from "../../../helpers/requests";

export const dachaTypeList = () => (dispatch) => {
  dispatch({ type: "dacha_typeList_start" });
  requests
    .dachaTypeList()
    .then(({ data }) => {
      dispatch({ type: "dacha_typeList_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "dacha_typeList_error", payload: message });
    });
};
