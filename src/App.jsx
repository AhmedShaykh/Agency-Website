import React from "react";
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Recovery from "./Components/Recovery/Recovery.jsx";
import Cloud from './Components/Cloud/Cloud.jsx'
import Contact from "./Components/Contact/Contact.jsx";
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Recovery />
      <Cloud />
      <Contact />
      <Footer />
    </>
  );
}

export default App;