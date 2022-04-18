import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import Home from "./Component/Home/Home.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Services from "./Component/Services/Services.jsx";
import SingUp from "./Component/SingUp/SingUp.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<SingUp/>} />
      </Routes>
    </div>
  );
};

export default App;
