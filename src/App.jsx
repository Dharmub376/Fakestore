import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/products";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
  <>
  <Navbar />
  <div className="pt-20">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</>

);

export default App;
