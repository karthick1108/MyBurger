import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-a96ad.firebaseio.com/",
});

export default instance;
