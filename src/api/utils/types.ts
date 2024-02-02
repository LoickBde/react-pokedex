import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  ResponseType,
} from "axios";

export type ProcessCallType = {
  request: AxiosRequestConfig;
  successCallback?: (resp: AxiosResponse) => unknown;
  errorCallback?: (e: AxiosError) => unknown;
};

export type RequestBuilderType = {
  method: Method;
  url: string;
  data?: Record<string, unknown> | string;
  contentType?: string;
  responseType?: ResponseType;
};

export type ReadRequestBuilderType = Omit<
  RequestBuilderType,
  "method" | "data"
>;
