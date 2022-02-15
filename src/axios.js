import axios from "axios";
let instance = axios.create({
  baseURL: "http://localhost:5001/eshoppers-3ca3e/us-central1/api",
});
export default instance;
