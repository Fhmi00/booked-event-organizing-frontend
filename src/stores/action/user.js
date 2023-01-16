import axios from "../../utils/axios";

export const getDataUser = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`),
  };
};

export const updateDataUser = (data) => {
  return {
    type: "UPDATE_DATA_USER",
    payload: axios.patch(`user/updateUser/`, data),
  };
};

export const updateImageUser = (data) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`user/updateImage`, data),
  };
};

export const updatePassword = (data) => {
  return {
    type: "UPDATE_PASSWORD",
    payload: axios.patch(`user/updatePassword`, data),
  };
};
