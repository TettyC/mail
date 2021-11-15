import { Get } from "./request";

export const getHomeMultidata = () => {
  return Get("/home/multidata");
};
