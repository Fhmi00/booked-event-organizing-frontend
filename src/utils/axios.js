import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://booked-event-organizing-backend.vercel.app/api/",
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const refreshToken = localStorage.getItem("refreshToken");
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      refreshtoken: refreshToken,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const refreshToken = localStorage.getItem("refreshToken");
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      refreshtoken: refreshToken,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // JIKA TIDAK MENERAPKAN REFRESH TOKEN
    // if (error.response.status === 403) {
    //   localStorage.clear();
    //   window.location.href = "/signin";
    // }
    // console.log(error.response.data.msg);
    // JIKA MENERAPKAN REFRESH TOKEN
    if (error.response.status === 403) {
      // console.log(error.response.data.msg);
      if (error.response.data.msg === "jwt expired") {
        axiosApiIntances
          .post("auth/refresh")
          .then((res) => {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            // console.log(res.data.refreshToken);
            window.location.reload();
          })
          .catch(() => {
            localStorage.clear();
            window.location.href = "/signin";
          });
      } else {
        localStorage.clear();
        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
