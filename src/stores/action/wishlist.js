import axios from "../../utils/axios";

export const getDataWishlist = (id) => {
  return {
    type: "GET_DATA_WISHLIST",
    payload: axios.get(`wishlist/:${id}`),
  };
};

export const createWishlist = (data) => {
  return {
    type: "CREATE_DATA_WISHLIST",
    payload: axios.post(`/wishlist`, data),
  };
};

export const deleteWishlist = (id) => {
  return {
    type: "DELETE_DATA_WISHLIST",
    payload: axios.delete(`wishlist/${id}`),
  };
};
