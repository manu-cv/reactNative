import axios from "axios";

export const axiosGetCall = async () => {
  const response = await axios({
    url: "https://jsonplaceholder.typicode.com/posts/",
    method: "get",
  });
  return response;
};
export const AxiosPostCall = async (data) => {
  const response = await axios({
    url: "https://jsonplaceholder.typicode.com/posts/",
    method: "post",
    data: data,
  });
  return response;
};

export const axiosLoginPostCall = async (data) => {
  const response = await axios.post(
    "https://dev-kkem-p2.zappyhire.com/api/zusers/auth/login/",
    data
  );
  return response;
};
