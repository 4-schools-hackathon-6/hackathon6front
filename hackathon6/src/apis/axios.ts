import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://port-0-swing-call-backend-754g42aluv3zyvy.sel5.cloudtype.app/",
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
