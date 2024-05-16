import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Windows from "./components/AboutServices/Windows.jsx";
import BI from "./components/AboutServices/BI.jsx";
import PowerApps from "./components/AboutServices/PowerApps.jsx";
import Website from "./components/AboutServices/Website.jsx";
import Replyin24 from "./components/Services/Replyin24.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#FBFBFB] dark:bg-[#F2735B] dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Replyin24 />
      <Windows />
      <BI />
      <PowerApps />
      <Website />
      <Footer />
    </div>
  );
};

export default App;
