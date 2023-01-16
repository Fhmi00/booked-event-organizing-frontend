const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA PRODUCT
  isLoading: false,
  isError: false,
  message: "",
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    case "GET_DATA_BOOKING_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_BOOKING_FULFILLED": {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    case "GET_DATA_BOOKING_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    case "CREATE_DATA_BOOKING_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_DATA_BOOKING_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "CREATE_DATA_BOOKING_REJECTED": {
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
export default booking;
