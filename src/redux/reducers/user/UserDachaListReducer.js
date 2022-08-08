const INITIAL_STATE = {
  loading: false,
  message: null,
  token: null,
  userDachaList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "user_dacha_list_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "user_dacha_list_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "user_dacha_list_success":
      return {
        ...state,
        loading: false,
        userDachaList: payload.data.data,
      };
    case "delete_dacha_success":
      return {
        ...state,
        loading: false,
        userDachaList: state.userDachaList.filter(
          (item) => item.id !== payload
        ),
      };
    default:
      return state;
  }
};
