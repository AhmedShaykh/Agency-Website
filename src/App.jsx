import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
// import Features from './Components/Features';
// import Testimonials from './Components/Testimonials';
// import CtaSection from './Components/CtaSection';
// import Footer from './Components/Footer';

const App = () => {

  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <CtaSection /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;