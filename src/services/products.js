import axios from "axios";

const products = () => {
  return axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products",
    params: {
      limit: 100,
      offset: 0,
    },
  });
};

export default products;
