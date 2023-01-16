import axios from "../../utils/axios";

export const getDataBooking = (userId) => {
  return {
    type: "GET_DATA_BOOKING",
    payload: axios.get(`booking/${userId}?page=&limit=4`),
  };
};

export const createMyBooking = (userId, data) => {
  return {
    type: "CREATE_DATA_BOOKING",
    payload: axios.post(`booking/${userId}`, data),
  };
};
