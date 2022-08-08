const INITIAL_STATE = {
  loading: false,
  message: null,
  dachaTypeList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "dacha_typeList_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "dacha_typeList_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "dacha_typeList_success":
      return {
        ...state,
        loading: false,
        dachaTypeList: payload.data,
      };
    default:
      return state;
  }
};
