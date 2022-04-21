import React from "react";
import { Navigate} from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
// import footerLogo '../../images/logo.png'


const Footer = () => {
  
  return (
    <>
    <div className="flex bg-black h-40 text-white justify-center items-center text-lg">
        <div className="copyRightText">
          <p>&copy; {new Date().getFullYear()} "Be Dentist" All Right Reserved</p>
        </div>
        <div className="socialIcon flex ">
            <BsFacebook className="mx-3 cursor-pointer"/>
            <BsInstagram className="mx-3 cursor-pointer"/>
            <BsTwitter className="mx-3 cursor-pointer"/>
            
        </div>
    </div>
    </>
  );
};

export default Footer;
