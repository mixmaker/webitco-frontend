import { GlobalContext } from "./useStore";

import React, { useState } from "react";

const GlobalState = ({ children }) => {
  const [popularProducts, setPopularProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <GlobalContext.Provider
      value={{ popularProducts, setPopularProducts, isLoading, setIsLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
