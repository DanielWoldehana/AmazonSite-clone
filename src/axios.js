import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-clone-f64a5/us-central1/api", //The API (cloud funtion) URL
});

export default instance;
