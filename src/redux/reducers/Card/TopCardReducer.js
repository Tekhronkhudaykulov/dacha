const INITIAL_STATE = {
  loading: false,
  message: null,
  topList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "topCard_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "topCard_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "topCard_success":
      return {
        ...state,
        message: payload.message,
        topList: payload.data.data,
        loading: false,
      };
    default:
      return state;
  }
};
