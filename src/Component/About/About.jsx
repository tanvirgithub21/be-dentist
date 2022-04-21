import React, { useEffect, useState } from 'react';

const About = () => {

    const [about, setAbout] = useState({})
    useEffect(() =>{
        fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-10-data/gh-pages/aboutText.json")
        .then(res => res.json())
        .then(data => setAbout(data))
    },[])
    return (
        <div className='h-[calc(100vh-13rem)]'>
            <h2 className='text-4xl font-semibold text-center my-8'>About Me</h2>
            <div className="flex justify-center">
                <div className="text-[1.2rem] imgTextBox max-w-[25rem] h-56 shadow-lg rounded p-3 border-2 ">
                    <div className="aboutImgBox">
                        <img src="" alt="" />
                    </div>
                    <div className="aboutTextBox">
                        <p>{about?.aboutText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;