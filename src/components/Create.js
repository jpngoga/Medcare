import React from 'react'
import {BsGoogle} from 'react-icons/bs'
import { Link } from "react-router-dom";

function Create() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div style={{display:"block",paddingLeft:"600px"}}>
    <div className='Login-container' style={{textAlign:"center",}}>
            <h3 style={{fontWeight:"350",textAlign:"left"}}>Create new account</h3>
          <br></br>
          <br></br>
          <div className='' style={{width:"300px"}}>

           <div style={{borderBottom:"1px solid gray",}}>
           <label style={{fontWeight:"300"}}>Name</label>
            <input type={"text"} placeholder="" style={{border:"none",marginLeft:"30px"}}/>
           </div>
           <br/>
            <div style={{borderBottom:"1px solid gray"}}>
            <label style={{fontWeight:"300"}}>Email</label>
            <input type={"text"} placeholder="Name" style={{border:"none",marginLeft:"30px"}}/>
            </div>
            <br/>
            <div style={{borderBottom:"1px solid gray"}}>
            <label style={{fontWeight:"300"}}>Password</label>
            <input type={"password"} placeholder="Name" style={{border:"none",marginLeft:"20px"}}/>
            </div>
            <br/>
            <div style={{borderBottom:"1px solid gray"}}>
            <label style={{fontWeight:"300",textAlign:"left"}}>Password</label>
            <input type={"password"} placeholder="******" style={{border:"none",marginLeft:"20px"}}/>
            </div>
           
          </div>
          <br></br>
          <div  style={{  backgroundColor:"#101727",padding:"8px",border:"none", borderRadius:"10px",width:"300px"}}>
            <button  style={{ backgroundColor:"#101727",color:"white", border:"none", borderRadius:"10px"}}>Create account</button>
          </div>
         
        
          <br></br>
          <div  style={{ border:"none", borderRadius:"10px", backgroundColor:"lightgray",width:"300px"}}>
          <BsGoogle/>
          <button style={{ backgroundColor:"lightgray",padding:"8px",border:"none", borderRadius:"10px"}}>Sign up with Google</button>

          </div>
          <br/>
          <div>
          <p style={{textAlign:"left",fontSize:"12px"}}>if you already have an account?<span style={{fontWeigh:"bold",fontSize:"16px"}}> <Link to="/profile/login">Login Here</Link></span></p>
          </div>
          
        </div>
    </div>
      
    </>
  )
}

export default Create
