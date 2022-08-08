const INITIAL_STATE = {
    loading: false,
    message: null,
  };
  
  export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case "dachaLevel_start":
        return {
          ...state,
          message: "",
          loading: true,
        };
      case "dachaLevel_error":
        return {
          ...state,
          message: payload,
          loading: false,
        };
      case "dachaLevel_success":
        return {
          ...state,
          loading: false,
        };
      case "dachaUp_start":
        return {
          ...state,
          message: "",
          loading: true,
        };
      case "dachaUp_error":
        return {
          ...state,
          message: payload,
          loading: false,
        };
      case "dachaUp_success":
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };
  