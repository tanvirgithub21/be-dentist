import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = () => {
    const [questionData, setQuestionData] = useState([])

    useEffect(() =>{
        fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-10-data/gh-pages/questionData.json")
        .then(res => res.json())
        .then(data => setQuestionData(data))
    },[])
    return (
        <>
            <h2 className='text-3xl font-semibold text-center my-8'>Question Answer</h2>
        <div className='qurBox grid grid-cols-3 gap-4 justify-center'>
            {
               questionData.map(singleData => (
                <div>
                    <div className='h-[20rem] shadow-lg p-3 border-2 rounded-lg'>
                        <h3 className='text-xl text-center mb-4'>{singleData?.title}</h3>
                        <p className='text-[1.1rem] text-gray-500'>{singleData?.ans}</p>
                    </div>
                </div>
               ) )
            }
        </div>
        </>
    );
};

export default Blog;
