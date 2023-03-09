import React from "react";
import Hero from "./hero";
import NursaryCard from "./nursaryCard";
import Footer from '../components/Footer'
const Nursary = () => {
  return (
    <>
      <Hero
        title="Services"
        description="Taking Care Of You Is Our Top Priority"
        image="https://www.elsevier.com/__data/assets/image/0019/1034461/HomeHealthcare-1.jpg"
      />
      <br></br>
      <br></br>
      <h4 style={{textAlign:"center", color:"#43D5CB", fontWeight:"400"}}>Our nurses provide a wide variety of services including taking care of elderly,<br></br>physiotherapy and many more</h4>
      <br></br>
      <div style={{display:"flex", flexDirection:"row", flexGrow:"initial",flexWrap:"wrap",gap:"5px"}}>
        <NursaryCard
          imag="https://www.findablackdoctor.com/wp-content/themes/fabd/src/assets/hp-hero.jpg"
          
          descriptions=" "
          description="In Home Care we give"
        />
        <NursaryCard
          imag="https://imageio.forbes.com/specials-images/imageserve/469368746/0x0.jpg?format=jpg&width=1200"
          description="Home physiotherapy"
        />
        <NursaryCard
          imag="https://thevoiceofblackcincinnati.com/wp-content/uploads/2021/06/AdobeStock_305412791-scaled.jpeg"
          description="Home Nursing"
        />
        <NursaryCard
          imag="https://blackdoctorsusa.com/assets/images/medical-mentor-program.jpg"
          description="Home Psychology"
        />
     
        
      </div>
      <br></br>
      <div style={{textAlign: "center",}}>
      <button  style={{
              backgroundColor: "#42CCCF",
              padding: "10px 24px",
              borderRadius: "12px",
              border:"none"
            }}>Learn More</button>
      </div>
      <br></br>
      <br></br>
      <Footer/>
  
    </>
  );
};

export default Nursary;
