import axios, { AxiosInstance } from "axios";

const baseURL: string = "https://api.github.com/";
const params = {
  // client_id: "1d011406efab02a39427",
  // client_secret: "da2f13b80002a40c3876902b0812a7c3919a72cc"
}

const api: AxiosInstance = axios.create({
  baseURL,
  params
});

export { api }