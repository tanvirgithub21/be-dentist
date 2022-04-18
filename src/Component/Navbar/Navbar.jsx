import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { AiOutlineCloseSquare , AiOutlineBars} from "react-icons/ai";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-50">
      <div className="flex h-[3rem] items-center justify-between bg-white md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-[#00b8d2]"
        >
          Be Dentist
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8  cursor-pointer md:hidden"
        >
          {open ? <AiOutlineCloseSquare/> : <AiOutlineBars/>}
        </div>

        <ul className={`shadow-xl md:h-auto md:flex md:items-center md:pb-0 bg-slate-100 rounded-b-[.8rem] md:rounded-b-[0rem] md:bg-white absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[3rem] " : "top-[-700%]"
          }`} >


          <li className="linkBox md:ml-8 text-xl md:my-0 my-7">
              <NavLink to='/home' className={({ isActive }) =>  isActive? "active" : "deActive"} >Home</NavLink>
          </li>
          <li className="linkBox md:ml-8 text-xl md:my-0 my-7">
              <NavLink to='/services' className={({ isActive }) =>  isActive? "active" : "deActive"} >Services</NavLink>
          </li>
          <li className="linkBox md:ml-8 text-xl md:my-0 my-7">
          <NavLink to='/blog' className={({ isActive }) =>  isActive? "active" : "deActive"} >Blog</NavLink>
          </li>
          <li className="linkBox md:ml-8 text-xl md:my-0 my-7">
          <NavLink to='/about' className={({ isActive }) =>  isActive? "active" : "deActive"} >About</NavLink>
          </li>

          <li className="linkBox md:ml-8 text-xl md:my-0 my-7">
          <NavLink to='/login' className={({ isActive }) =>  isActive? "active" : "deActive"} >Login</NavLink>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;