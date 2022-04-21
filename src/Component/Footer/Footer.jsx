import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
  
  return (
    <>
    <div className="flex flex-col md:flex-row bg-black h-40 text-white justify-center md:justify-evenly items-center text-[1rem] md:text-lg mt-8">
        <div className="copyRightText mb-6 md:mb-0 text-center ">
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
