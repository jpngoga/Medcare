import React from "react";
import Hero from "./hero";
import Footer from './Footer'

const Pharmacy = () => {
  return (
    <>
      <Hero
        title="Pharmacy"
        description="We are Less Than 1 KM Away!"
        image="https://www.universityofcalifornia.edu/sites/default/files/generic-drugs-istock.jpg"
      />
      <Footer/>
    </>
  );
};

export default Pharmacy;
