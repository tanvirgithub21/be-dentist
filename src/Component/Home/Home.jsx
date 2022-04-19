import React from "react";
import { Link } from "react-router-dom";
import doctorImg from "../../images/doctor.png";
import Services from "../Services/Services";
import "./Home.css"

const Home = () => {
  return (
        <>
            <section className="h-auto pt-[7rem] bg-slate-100  overflow-hidden">
              <div className="containerBox mx-3 md:w-[70%] md:mx-auto h-full  items-center flex">

                <div className="homeWrap flex md:h-[300px]">

                  <div className="homeText text-gray-black flex flex-col justify-center ">
                    <h2 className="homeTitle ml-16 text-[1.3rem] md:text-4xl font-semibold mb-6 min-w-[175px] md:min-w-[300px] text-[#00b8d2] fontCss leading-[1.5] tracking-[.3rem] ">Every Smile <br /> has a Story </h2>
                    <Link to='/services' className="ml-16 homeBtn text-white font-semibold px-3 py-1 bg-gray-600 hover:bg-gray-500 text-center w-[8rem] rounded-lg">
                      Our Services
                    </Link>
                  </div>

                  <div className="homeImage h-full object-cover">
                    <img className="scale-[1]	" src={doctorImg} alt="Doctor Images" />
                  </div>
                  
                </div>

              </div>
            </section>

            <Services/>
        </>
  );
};

export default Home;
