import AxiosBaseUrl from "./Baseurl";
import { useState } from "react";

const UsePost = (url) => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const post = async (values) => {
    setIsLoading(true);
    try {
      const response = await AxiosBaseUrl.post(`${url}`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setPostData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { post, postData, isLoading, error };
};

export default UsePost;
