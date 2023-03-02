import React from 'react'
import {BiSearch} from 'react-icons/bi'
import hospital from '../image/hospital.jpg'
// import {FaNotesMedical} from 'react-icons/fa'
// import {HiLocationMarker} from 'react-icons/hi'
// import {HiPhone} from 'react-icons/hi'
// import {FiMail} from 'react-icons/fi'
// import {AiOutlineTwitter} from 'react-icons/ai'
// import {FaFacebookF} from 'react-icons/fa'
// import {AiFillLinkedin} from 'react-icons/ai'
// import {AiOutlineInstagram} from 'react-icons/ai'
import Hero from "./hero";
import Footer from './Footer'

export const Hospital =()=> {
  return (
    <div className='hospital-wrapper'>
    {/* headers start */}
    <Hero
        title="Hospitals"
        description="Search For Hospitals Nearby"
        image="https://as1.ftcdn.net/v2/jpg/02/81/21/10/1000_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg"
      />
    {/* headers ends */}
        <div className='hospital-header'>
            <section  className='hosp-head-block1' style={{width:"400px"}}>
            <h1>Make a difference in the lives of others<span>Fast Help 24/7</span></h1>
            </section>
            <section className='hosp-head-block1'>
                <input type={"text"} placeholder="Search"/>
                <BiSearch style={{postion: "relative", marginLeft:"-20px"}}/>
            </section>
        </div>
        <br></br>
        <h2 className='hospital-h2'>See nearby Hospitals <br></br>Specialized in your illness</h2>
        <br></br>
       
        <h1 className='hospital-h1'>Top Hospitals</h1>
        <br></br>
        <div className='hospital-img-container'>
            <div> <img src={hospital} alt="imageNotFound" /> <h4> Hero Hospital</h4><p>Located here</p></div>
            <div> <img src={hospital} alt="imageNotFound" /> <h4> Hero Hospital</h4><p>Located here</p></div>
            <div> <img src={hospital} alt="imageNotFound" /> <h4> Hero Hospital</h4><p>Located here</p></div>
       
        </div>
        <div className='hosp-button-cover'><button className='hosp-button'>See More</button></div>
        <br></br>
        {/* <div className='hospital-footer' style={{marginBottom: 0}}>
          <div className='hosp-footer-block'>
            <h4><FaNotesMedical/>Mediclinic</h4>
           
            <p style={{paddingLeft:"5px",fontSize:"12px"}}>lorem ut wisi wemin veniam, quis laore nostrud exterci  tation ilm hedi corper turrre sucript laboristsi  duis ,lorem ut wisi wemin veniam, quis laore nostrud exterci  tation ilm hedi corper turrre sucript laboristsi  duis </p>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"4px",}}>
              <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap",gap:"25px",marginTop:"3px",paddingLeft:"5px"}}>  
                <HiLocationMarker/>
                <HiPhone/>
                <FiMail/> 
              </div>
              <div>
                <p >Street 1100 Helsinki Finland</p>
                <p>(+123) 1123 4567</p>
                <p>mediclinic@godein</p>
              </div>
               <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"10px",marginTop:"3px",paddingLeft:"5px"}}>  
                <AiOutlineTwitter/>
                <FaFacebookF/>
                <AiFillLinkedin/>
                <AiOutlineInstagram/> 
              </div>
            </div>
          </div>
          <div className='hosp-footer-block' style={{width:"220px"}}>
            <h5>Latest News</h5>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"4px"}}> 
              <img src={hospital} alt="imageNotFound" style={{width:"80px"}}/>
              <div> 
                <h6> Hero Hospital</h6>
                <p style={{fontSize:"12px"}}>Located here</p>
              </div>
             
            </div>
            <br></br>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"4px"}}> 
              <img src={hospital} alt="imageNotFound" style={{width:"80px"}}/>
              <div> 
                <h6> Hero Hospital</h6>
                <p style={{fontSize:"12px"}}>Located here</p>
              </div>
             
            </div>
            <br></br>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"4px"}}> 
              <img src={hospital} alt="imageNotFound" style={{width:"80px"}}/>
              <div> 
                <h6> Hero Hospital</h6>
                <p style={{fontSize:"12px"}}>Located here</p>
              </div>
             
            </div>

          </div>
          <div className='hosp-footer-block'>
          <h5>Twitter Feed</h5>
          <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"5px",}}>
              <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap",gap:"65px",marginTop:"3px",paddingLeft:"5px"}}>  
                <AiOutlineTwitter/>
                <AiOutlineTwitter/>
                <AiOutlineTwitter/>
                
                
                                
              </div>
              <div style={{width:"260px"}}>
                <section>
                  <p style={{fontSize:"14px"}}><span>@jaysonmountain</span>you can open a ticket by simply send us your purchase code in DM and we will check it out</p>
                </section>
                <section>
                  <p style={{fontSize:"14px"}}><span>@jaysonmountain</span>you can open a ticket by simply send us your purchase code in DM and we will check it out</p>
                </section>
                <section>
                  <p style={{fontSize:"14px"}}><span>@jaysonmountain</span>you can open a ticket by simply send us your purchase code in DM and we will check it out</p>
                </section>
                
               
              </div>
              
          </div>
          </div>
          <div className='hosp-footer-block'>
          <h5>Contact</h5>
          <input type={"text"} placeholder="Email here" style={{padding:"6px 103px",textAlign:"center"}} />
          <br></br>
          <br></br>
          <textarea  name="w3review" placeholder='Message' rows="5" cols="50">

          </textarea>
          <br></br>
          <button style={{backgroundColor:"#42CCCF", padding:"8px 24px", borderRadius:"12px"}}>Submit</button>
          </div>
        </div> */}
        <Footer/>
    </div>
  )
}
