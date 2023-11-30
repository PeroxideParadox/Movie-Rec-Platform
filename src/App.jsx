import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import { Route, Router, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
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
      }
    );
  }, []);
  return (
    <BrowserRouter>

      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/home">
        <div>

          <ScrollToTop />




          <Navbar />
          <Hero />
          <Services />
          <Recommend />
          <Testimonials />
          <Footer />
        </div>

      </Route>


















    </BrowserRouter>
  );
}



















































































































