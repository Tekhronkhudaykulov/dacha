const INITIAL_STATE = {
  loading: false,
  message: null,
  token: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "user_update_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "user_update_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "user_update_success":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
