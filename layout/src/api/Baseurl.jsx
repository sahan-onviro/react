import Axios from "axios";

const AxiosBaseUrl = Axios.create({
  baseURL: "https://formas.free.beeceptor.com/api/",
});

export default AxiosBaseUrl;
