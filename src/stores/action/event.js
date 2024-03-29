import axios from "../../utils/axios";

export const getDataEvent = () => {
  return {
    type: "GET_DATA_EVENT",
    payload: axios.get(
      `event?page=4&limit=5&sort=&searchDateShow=&searchName=`
    ),
  };
};

export const createDataEvent = (data) => {
  return {
    type: "CREATE_DATA_EVENT",
    payload: axios.post("event", data),
  };
};

export const updateDataEvent = (data, id) => {
  return {
    type: "UPDATE_DATA_EVENT",
    payload: axios.patch(`event/${id}`, data),
  };
};

export const deleteDataEvent = (id) => {
  return {
    type: "DELETE_DATA_EVENT",
    payload: axios.delete(`event/${id}`),
  };
};

export const getDataEventById = (id) => {
  return {
    type: "GET_DATA_EVENT_BY_ID",
    payload: axios.delete(`event/${id}`),
  };
};
