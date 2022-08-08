const INITIAL_STATE = {
  loading: false,
  message: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "add_home_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "add_home_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "add_home_success":
      return {
        ...state,
        loading: false,
      };
    case "dacha_update_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "dacha_update_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "dacha_update_success":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
