const INITIAL_STATE = {
  loading: false,
  message: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "rating_dacha_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "rating_dacha_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "rating_dacha_success":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
