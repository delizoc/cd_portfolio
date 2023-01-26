import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PagesImg from '../components/PagesImg';
import image from '../assets/about-img.png';
import AboutContent from '../components/AboutContent';





const About = () => {
  return (
    <div>
      <Navbar />
      <PagesImg heading="ABOUT." text="I'm probably skiing." image = {image}/>
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;