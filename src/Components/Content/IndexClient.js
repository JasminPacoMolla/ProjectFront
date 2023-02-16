import React from 'react';
import IndexHeader from '../Header/IndexHeader';
import Header from '../Header/Header';

import HeroSection from '../Body/HeroSection';
import FeatureSection from '../Body/FeatureSection';
import AboutSection from '../Body/AboutSection';
import AboutSection2 from '../Body/AboutSection2';
import Pricing from '../Body/Pricing';
import Footer from '../Footer/Footer';
import IndexHeaderold from '../Header/IndexHeaderold';


export const IndexClient = () => {
  return (

    <React.Fragment>
      <IndexHeaderold/>
        {/* <IndexHeader /> */}
        {/* <Header/> */}
        <HeroSection/>
        <FeatureSection/>
        <AboutSection/>
        {/* <AboutSection2/> */}
        <Pricing/>
        
        <Footer/>
      
    </React.Fragment>
  )
}
