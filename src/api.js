import axios from "axios";

export const getPopularProducts = async (limit) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products?limit=${limit}`
  );
  return data;
};

export const getProductfromId = async (productId) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
  return data;
};

export const getCategoryProducts = async (categoryName) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );
  return data;
};
