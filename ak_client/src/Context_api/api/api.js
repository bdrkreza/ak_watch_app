import axios from "axios";

let apiUrl = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  token
    ? (apiUrl.defaults.headers.common["Authorization"] = token)
    : delete apiUrl.defaults.headers.common["Authorization"];
};

export default apiUrl;
