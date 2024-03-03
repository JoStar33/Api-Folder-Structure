import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { DefaultResponse } from "@/types";
import { ProductGet, ProductPatch, ProductPost } from "@/api3/product";
import { ContentsGet, ContentsPatch, ContentsPost } from "@/api3/contents";

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

const responseBody = <T = DefaultResponse>(response: AxiosResponse<T>) => response.data;

export const instance = axios.create(config);
export const internalInstance = axios.create(internalConfig);

export const requests = {
  get: <T extends DefaultResponse = DefaultResponse>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData) => instance.post<T>(url, body).then(responseBody),
  put: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData) => instance.put<T>(url, body).then(responseBody),
  delete: <T extends DefaultResponse = DefaultResponse>(url: string) => instance.delete<T>(url).then(responseBody),
  patch: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData | undefined) => instance.patch<T>(url, body).then(responseBody),
};

export const Get = {
  ...ProductGet,
  ...ContentsGet,
}

export const Post = {
  ...ProductPost,
  ...ContentsPost
}

export const Patch = {
  ...ProductPatch,
  ...ContentsPatch,
}