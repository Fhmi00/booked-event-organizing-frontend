import axios from "../../utils/axios";

export const getDataUser = (id) => {
  //   const DATADUMMY = {
  //     status: 200,
  //     message: "Success Get User By Id",
  //     data: [
  //       {
  //         userId: id,
  //         name: "fahmi",
  //         username: "fahmi",
  //         gender: "Male",
  //         profession: "user",
  //         nationality: "Indonesia",
  //         dateOfBirth: "2020-01-01",
  //         phoneNumber: "0812345678",
  //         role: "user",
  //       },
  //     ],
  //   };
  //   return {
  //     type: "GET_USER_BY_ID_DUMMY",
  //     payload: DATADUMMY,
  //   };
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`),
  };
};
