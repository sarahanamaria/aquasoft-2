const baseUrl = "http://localhost:3000/";

// A function that makes a fetch request to the api. It receives the method as a parameter and it can be used with multiple requests such as GET, POST, DELETE etc. - Vlad Talimba
const callApi = async (endpoint, method, body) => {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res;
};

export default callApi;
