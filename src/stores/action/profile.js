import axios from "../../utils/axios";

export const updateDataUser = (data, id) => {
  return {
    type: "UPDATE_DATA_USER",
    payload: axios.patch(`user/${id}`, data),
  };
};
