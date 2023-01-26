import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PagesImg from '../components/PagesImg';
import image from '../assets/intro-img.png'
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PagesImg heading="CONTACT." text="Lets chat." image = {image} />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact