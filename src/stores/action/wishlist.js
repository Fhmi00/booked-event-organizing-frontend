import axios from "../../utils/axios";

export const getDataWishlist = (userId) => {
  return {
    type: "GET_DATA_WISHLIST",
    payload: axios.get(`wishlist/:${userId}?page=1&limit=4`),
  };
};

export const createWishlist = (data) => {
  return {
    type: "CREATE_DATA_WISHLIST",
    payload: axios.post(`/wishlist`, data),
  };
};

export const deleteWishlist = (wishlistId) => {
  return {
    type: "DELETE_DATA_WISHLIST",
    payload: axios.delete(`wishlist/${wishlistId}`),
  };
};
