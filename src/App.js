import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Spinner from "react-spinkit";
import useStore from "./contexts/useStore";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Productlist from "./pages/Productlist";
import Register from "./pages/Register";
import { useLocation } from "react-router";

function App() {
  const user = false;
  const { isLoading, setIsLoading } = useStore();

  useEffect(() => {
    if (isLoading) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [isLoading]);

  const locationForloading = useLocation();
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [locationForloading]);

  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      {isLoading && (
        <div
          className="loading"
          style={{
            position: "fixed",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            background: "rgba(0,0,0,0.9)",
          }}
        >
          <Spinner name="folding-cube" color="wheat" fadeIn="none" />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
      )
    </div>
  );
}

export default App;
