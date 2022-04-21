import React, { useEffect, useState } from "react";
import Loding from "../Loding/Loding";
import photo from '../../images/tanvirPhoto.png'


const About = () => {
  const [loding, setLoding] = useState(true);

  const [about, setAbout] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/ass-10-data/gh-pages/aboutText.json"
    )
      .then((res) => res.json())
      .then((data) => setAbout(data));
    setLoding(false);
  }, []);
  return (
    <>
      {loding ? (
        <Loding/>
      ) : (
        <div className="h-[calc(100vh-14rem)]">
          <h2 className="text-4xl font-semibold text-center my-8">About Me</h2>
          <div className="flex justify-center">
            <div className="text-[1.2rem] imgTextBox max-w-[25rem]  shadow-lg rounded p-3 border-2 ">
              <div className="aboutImgBox w-[8rem] h-[8rem] mb-8 border-blue-500 border-4 overflow-hidden rounded-[50%] mx-auto ">
                <img src={photo} alt="images" />
              </div>
              <div className="aboutTextBox">
                <p>{about?.aboutText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
