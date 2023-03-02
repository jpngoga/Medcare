import React from 'react'
import {BiSearch} from 'react-icons/bi'
import hospital from '../image/hospital.jpg'

export const Hospital =()=> {
  return (
    <div className='hospital-wrapper'>
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
        <div className='hospital-footer'>
          <div className='hosp-footer-block'>
            <h4>Mediclinic</h4>
          </div>
          <div className='hosp-footer-block'>
            <h5>Latest News</h5>
          </div>
          <div className='hosp-footer-block'>
          <h5>Twitter Feed</h5>
          </div>
        </div>
    </div>
  )
}
