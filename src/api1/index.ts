import axios, { AxiosRequestConfig } from "axios";

const VERSION = "/v1";
const URL_API = "/api";

const config: AxiosRequestConfig = {
  baseURL: "https://localhost:8000" + URL_API + VERSION,
  withCredentials: true,
};

const internalConfig: AxiosRequestConfig = {
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
};

export const instance = axios.create(config);
export const internalInstance = axios.create(internalConfig);
