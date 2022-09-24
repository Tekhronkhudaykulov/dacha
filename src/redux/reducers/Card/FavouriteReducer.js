const INITIAL_STATE = {
  loading: false,
  message: null,
  favouriteList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "favourite_post_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "favourite_post_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "favourite_post_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    case "get_favourite_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "get_favourite_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "get_favourite_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        favouriteList: payload.dacha,
      };
    case "delete_favourite_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "delete_favourite_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "delete_favourite_success":
      window.location.reload();
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
