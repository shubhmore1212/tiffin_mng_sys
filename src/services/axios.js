import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const GET = (url, payload) => instance.get(url).then((res) => res.data);

export const PUT = (url, payload) =>
  instance.put(url, payload).then((res) => res);

export const DELETE = (url, payload) =>
  instance.delete(url).then((res) => res.data);

export const POST = (url, body) => instance.post(url, body).then((res) => res);
