const INITIAL_STATE = {
  loading: false,
  message: null,
  token: null,
  userSite: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "user_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "user_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "user_success":
      return {
        ...state,
        userSite: payload,
        loading: false,
      };
    case "clear_user":
      return state.userSite;
    default:
      return state;
  }
};
