import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PagesImg from '../components/PagesImg';
import Work from '../components/Work';
import image from "../assets/pro-img.jpg";



const Project  = () => {
  return (
    <div>
      <Navbar />
      <PagesImg heading="PROJECTS" text="Some of my most recent work." image={image}/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project