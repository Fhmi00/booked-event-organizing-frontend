import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://fazzpay-d3aubygex-bagusth15.vercel.app",
});

export default axiosApiIntances;
