const INITIAL_STATE = {
  loading: false,
  message: null,
  token: null,
  userId: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "fetch_Id_user_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "fetch_Id_user_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "fetch_Id_user_success":
      return {
        ...state,
        loading: false,
        userId: payload.data,
      };
    default:
      return state;
  }
};
