// import vari
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// componenti 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pagine
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Team from "./pages/Team";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return(
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
