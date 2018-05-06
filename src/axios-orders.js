import axios from "axios";

const instance = axios.create({
  baseURL: "https://test.com/"
});

export default instance;
