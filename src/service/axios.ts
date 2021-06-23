import axios, { AxiosInstance } from "axios";

const baseURL: string = "https://api.github.com/";
const params = {
  // client_id: process.env.VUE_APP_CLIENT_ID,
  // client_secret: process.env.VUE_APP_CLIENT_SECRET
}

const api: AxiosInstance = axios.create({
  baseURL,
  params
});

export { api }