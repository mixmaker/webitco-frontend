import { GlobalContext } from "./useStore";

import React, { useState } from "react";

const GlobalState = ({ children }) => {
  const [popularProducts, setPopularProducts] = useState();
  const [currentProduct, setCurrentProduct] = useState();
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <GlobalContext.Provider
      value={{
        popularProducts,
        setPopularProducts,
        currentProduct,
        setCurrentProduct,
        isLoading,
        setIsLoading,
        category,
        setCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
