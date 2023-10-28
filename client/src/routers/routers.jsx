import React, { useEffect } from "react";
// import Footer from "./components/Footer";
import Hero from "../components/Hero";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Packages from "../components/PackagesCard";
import ScrollToTop from "../components/ScrollToTop";
import About from "../components/Services";
import Reviews from "../components/Testimonials";
import scrollreveal from "scrollreveal";
import Home from "../components/home";
import PackagesDetails from "../components/packageDetail";
import Contact from "../components/Contact";
import Signin from "../components/Login";

// import Login from "../components/login";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      },
    );
  }, []);
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:slug" element={<PackagesDetails />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/signin" element={<Signin />} />
    </Routes>
    // </BrowserRouter>
  );
}
