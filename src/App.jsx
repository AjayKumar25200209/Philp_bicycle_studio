
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
