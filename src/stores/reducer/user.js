const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID": {
      return {
        ...state,
        data: action.payload.data[0],
      };
    }
    case "GET_USER_BY_ID_PENDING": {
      return {
        ...state,
        data: {},
      };
    }
    case "GET_USER_BY_ID_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data[0],
      };
    }
    case "GET_USER_BY_ID_REJECTED": {
      return {
        ...state,
        data: {},
      };
    }
    case "UPDATE_DATA_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_DATA_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_DATA_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_DATA_IMAGE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_DATA_IMAGE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_DATA_IMAGE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_PASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_PASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
