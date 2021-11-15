const baseURL = "http://152.136.185.210:7878/api/hy66";

const http = async (url, options = {}) => {
  try {
    return await fetch(baseURL + url, options);
  } catch (error) {
    console.log("Request Failed", error);
  }
};

export const Get = async (url) => {
  try {
    const res = await http(url);
    return await res.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
};

export const Post = async (url) => {
  try {
    const res = http(url, {
      method: "POST",
    });
    return await res.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
};
