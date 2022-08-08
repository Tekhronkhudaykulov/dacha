const INITIAL_STATE = {
  loading: false,
  message: null,
  dachaCategory: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "dacha_category_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "dacha_category_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "dacha_category_success":
      return {
        ...state,
        loading: false,
        dachaCategory: payload.data,
      };
    default:
      return state;
  }
};
