import React from "react";
import { BiSearch } from "react-icons/bi";
import hospital from "./image/hospital.jpg";
import { FaNotesMedical } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import '../components/footer.css'

function Footer() {
  return (
    <>
      <div className="hospital-footer">
        <div className="hosp-footer-block">
          <h4>
            <FaNotesMedical />
            Health Savy
          </h4>

          <p style={{ paddingLeft: "5px", fontSize: "12px" }}>
            lorem ut wisi wemin veniam, quis laore nostrud exterci tation ilm
            hedi corper turrre sucript laboristsi duis ,lorem ut wisi wemin
            hedi corper turrre sucript laboristsi duis ,lorem ut wisi wemin
           {" "}
          </p>
   
         
        </div>
        <div className="hosp-footer-block" style={{paddingLeft:50}} >
          <h5>Info</h5>
          <div className="info"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   flexWrap: "wrap",
            //   gap: "5px",textAlign:"center"
              
            // }}
          >
            <div className="info1"
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   flexWrap: "wrap",
              //   gap: "14px",
              //   marginTop: "3px",
              //   paddingLeft: "5px",
              // }}
            >
              <HiLocationMarker />
              <HiPhone />
              <FiMail />
            </div>
            <div style={{fontSize:"11px",textAlign:"center"}}>
              <p>Street 1100 Helsinki Finland</p>
              <p>(+123) 1123 4567</p>
              <p>mediclinic@godein</p>
            </div>
           
          </div>
        </div>
        <div className="hosp-footer-block">
          <h5>Social Medial</h5>
          <div className="social-medial"
              // style={{
              //   display: "flex",
              //   flexDirection: "row",
              //   flexWrap: "wrap",
              //   gap: "10px",
              //   marginTop: "3px",
              //   paddingLeft: "5px",
              // }}
            >
              <AiOutlineTwitter />
              <FaFacebookF />
              <AiFillLinkedin />
              <AiOutlineInstagram />
            </div>
        </div>
        {/* <div className="hosp-footer-block">
          <h5>Contact</h5>
          <input
            type={"text"}
            placeholder="Email here"
            style={{ padding: "6px 87px", textAlign: "center" }}
          />
          <br></br>
          <br></br>
          <textarea
            name="w3review"
            placeholder="Message"
            rows="5"
            cols="46"
          ></textarea>
          <br></br>
          <button
            style={{
              backgroundColor: "#42CCCF",
              padding: "8px 24px",
              borderRadius: "12px",
            }}
          >
            Submit
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
