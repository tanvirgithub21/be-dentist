import React, { useEffect, useState } from "react";
import Loding from "../Loding/Loding";
import "./Blog.css";

const Blog = () => {
  const [questionData, setQuestionData] = useState([]);

  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/ass-10-data/gh-pages/questionData.json"
    )
      .then((res) => res.json())
      .then((data) => setQuestionData(data));
    setLoding(false);
  }, []);
  return (
    <>
      {loding ? (
        <Loding/>
      ) : (
        <div className="h-[calc(100vh-13rem)]">
          <h2 className="text-3xl font-semibold text-center my-8">
            Question Answer
          </h2>
          <div className="qurBox grid grid-cols-3 gap-4 justify-center">
            {questionData.map((singleData) => (
              <div key={singleData.id}>
                <div className="h-[20rem] shadow-lg p-3 border-2 rounded-lg">
                  <h3 className="text-xl text-center mb-4">
                    {singleData?.title}
                  </h3>
                  <p className="text-[1.1rem] text-gray-500">
                    {singleData?.ans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
