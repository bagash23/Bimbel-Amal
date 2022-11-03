import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, FlashSale, Login, Registrasi } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sale" element={<FlashSale />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Registrasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
