import axios from "axios";
import { API_BASE_URL } from "../config";

const axiosSecure = axios.create({
  baseURL: API_BASE_URL,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
