// import vari
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// componenti 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pagine
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return(
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
