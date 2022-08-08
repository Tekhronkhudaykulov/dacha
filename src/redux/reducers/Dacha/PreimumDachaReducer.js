const INITIAL_STATE = {
  loading: false,
  message: null,
  premiumList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "premium_dacha_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "premium_dacha_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "premium_dacha_success":
      return {
        ...state,
        loading: false,
        premiumList: payload.data,
      };
    default:
      return state;
  }
};
