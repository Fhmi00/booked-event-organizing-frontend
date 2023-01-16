const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA PRODUCT
  isLoading: false,
  isError: false,
  message: "",
};
const password = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    case "GET_DATA_USER_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_USER_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }
    case "GET_DATA_USER_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    case "RESET_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "RESET_PASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "RESET_PASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    }
  }
};

export default password;
