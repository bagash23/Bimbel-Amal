import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, Dashboard, FlashSale, Login, Registrasi, Testimonial } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sale" element={<FlashSale />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Registrasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
