import React from 'react'
import Navbar from '../components/Navbar';
import HomeImg from '../components/HomeImg';
import Footer from '../components/Footer';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;