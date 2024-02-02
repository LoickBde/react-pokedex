import axios, { AxiosRequestConfig } from "axios";
import {
  ProcessCallType,
  ReadRequestBuilderType,
  RequestBuilderType,
} from "./types";

export const processCall = ({
  request,
  successCallback,
  errorCallback,
}: ProcessCallType) => {
  return axios.request(request).then(successCallback).catch(errorCallback);
};

export const requestBuilder = ({
  method,
  url,
  data,
  contentType = "application/json",
  responseType = "json",
}: RequestBuilderType): AxiosRequestConfig => {
  return {
    headers: {
      ...(contentType && { "Content-Type": contentType }),
    },
    url,
    method,
    responseType,
    ...(data && { data }),
  };
};

export const getRequestBuilder = ({
  url,
  contentType,
  responseType,
}: ReadRequestBuilderType): AxiosRequestConfig => {
  return requestBuilder({
    method: "GET",
    url,
    contentType,
    responseType,
  });
};
