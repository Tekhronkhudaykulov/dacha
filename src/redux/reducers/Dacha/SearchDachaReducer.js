const INITIAL_STATE = {
  loading: false,
  message: null,
  searchList: [],
  searchListAll: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "search_dacha_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "search_dacha_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "search_dacha_success":
      return {
        ...state,
        loading: false,
        searchList: payload.data.data,
        searchListAll: payload.data,
      };
    default:
      return state;
  }
};
