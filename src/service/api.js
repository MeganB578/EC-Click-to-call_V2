import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/auth/`;

const API_URLS = {
  POST_LOGIN: `${COMMON_URL}login`,
  POST_REGISTER: `${COMMON_URL}register`,
};

export const postLogin = (payload) => apis.post(API_URLS.POST_LOGIN, payload);

export const postRegister = (payload) =>
  apis.post(API_URLS.POST_REGISTER, payload);
