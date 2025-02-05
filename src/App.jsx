import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Produts from "./Components/Products/Produts";
// Import AOS for animation
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Produts />
    </>
  );
}

export default App;
