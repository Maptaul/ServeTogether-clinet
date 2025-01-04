import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://serve-together-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
