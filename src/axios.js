import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-clone-f64a5/us-central1/api",
  // baseURL: "https://us-central1-fir-clone-f64a5.cloudfunctions.net/api", //The API (cloud funtion) URL
});

//to run locally run command firebase emulators:start

export default instance;
