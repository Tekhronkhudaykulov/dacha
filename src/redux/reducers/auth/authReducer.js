const INITIAL_STATE = {
  loading: false,
  token: null,
  message: null,
  registerList: [],
  smsToken: null,
  userRecover: [],
  verifyRecoverToken: null
};
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "register_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "register_start_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "register_start_success":
      return {
        ...state,
        message: payload.message,
        token: payload.token,
        loading: false,
        registerList: payload.data,
      };
    case "login_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "login_start_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "login_start_success":
      window.localStorage.setItem("@token", payload.token);
      return {
        ...state,
        message: payload.message,
        token: payload.token,
        loading: false,
      };
    case "sms_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "sms_start_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "sms_start_success":
      window.localStorage.setItem("@token", payload.token);
      return {
        ...state,
        message: payload.message,
        smsToken: payload.token,
        loading: false,
      };
      case "password_Recover_start":
        return {
          ...state,
          message: "",
          loading: true,
        };
      case "password_Recover_start_error":
        return {
          ...state,
          message: payload,
          loading: false,
        };
      case "password_Recover_start_success":
        return {
          ...state,
          message: payload.message,
          loading: false,
          userRecover: payload.user
        };
        case "verifyRecover_start":
          return {
            ...state,
            message: "",
            loading: true,
          };
        case "verifyRecover_start_error":
          return {
            ...state,
            message: payload,
            loading: false,
          };
        case "verifyRecover_start_success":
          window.localStorage.setItem("@token", payload.token);
          return {
            ...state,
            message: payload.message,
            loading: false,
            verifyRecoverToken: payload.token
          };
          case "passwordUpdate_start":
            return {
              ...state,
              message: "",
              loading: true,
            };
          case "passwordUpdate_start_error":
            return {
              ...state,
              message: payload,
              loading: false,
            };
          case "passwordUpdate_start_success":
            return {
              ...state,
              message: payload.message,
              loading: false,
            };
    default:

      return state;
  }
};
