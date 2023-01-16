import axios from "../../utils/axios";
export const getDataUser = (userId) => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(`user/${userId}`),
  };
};

export const resetPassword = (data, userId) => {
  return {
    type: "RESET_PASSWORD",
    payload: axios.patch(`auth/resetPassword/${userId}`, data),
  };
};
