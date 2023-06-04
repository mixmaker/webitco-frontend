import React, { useEffect } from "react";
import { getPopularProducts } from "../api";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import useStore from "../contexts/useStore";

const Home = () => {
  const { popularProducts, setPopularProducts, setIsLoading } = useStore();

  const popularData = async () => {
    try {
      const data = await getPopularProducts(15);
      setPopularProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    popularData();
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products
        data={popularProducts}
        title="Some of our most popular products"
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
