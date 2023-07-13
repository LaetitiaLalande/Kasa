import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accommodations from "./pages/Accommodations/Accommodations";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Accommodations/:id" element={<Accommodations />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
