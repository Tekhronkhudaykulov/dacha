const INITIAL_STATE = {
  loading: false,
  message: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "delete_dacha_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "delete_dacha_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "delete_dacha_success":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
