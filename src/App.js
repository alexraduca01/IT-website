// react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ShopContextProvider } from "./context/shop-context";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Portfolio from "./pages/Portfolio";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <ShopContextProvider>
      <Router className="App">
        <div className="bg-stone-100">
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
