import axios from "../../utils/axios";

export const getDataUser = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`),
  };
};

export const updateDataUser = (id, data) => {
  return {
    type: "UPDATE_DATA_USER",
    payload: axios.patch(`user/updateUser/${id}`, data),
  };
};

export const updateImageUser = (id, data) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`user/updateImage/${id}`, data),
  };
};

export const updatePassword = (id, data) => {
  return {
    type: "UPDATE_PASSWORD",
    payload: axios.patch(`user/updatePassword/${id}`, data),
  };
};
