export const fetchGetCall = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "get",
  });
  const jsonRes = await response.json();
  return jsonRes;
};
/*
export const FetchPostCall = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    Headers: {
      "Content-type": "application/json; charset:UTF-8",
    },
  });
  const resJSON = await response.json();
  return resJSON;
};
*/

export const FetchPostCall = async (data) => {
  const response = await fetch(
    "https://dev-kkem-p2.zappyhire.com/api/zusers/auth/login/",
    {
      method: "POST",
      body: JSON.stringify(data),
      Headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const resJSON = await response.json();
  return resJSON;
};
