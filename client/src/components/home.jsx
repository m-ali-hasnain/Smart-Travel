import React, { useEffect } from "react";
// import Footer from "./components/Footer";
import Hero from "../components/Hero";

import PackagesCard from "./PackagesCard";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import scrollreveal from "scrollreveal";

export default function App() {
 
  return (
    <div>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <PackagesCard />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}
