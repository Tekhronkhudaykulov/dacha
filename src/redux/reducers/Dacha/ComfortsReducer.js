const INITIAL_STATE = {
  loading: false,
  message: null,
  comfortsList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "comforts_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "comforts_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "comforts_success":
      return {
        ...state,
        loading: false,
        comfortsList: payload.data,
      };
    default:
      return state;
  }
};
