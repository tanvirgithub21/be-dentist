import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import CheckOut from "./Component/CheckOut/CheckOut.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword.jsx";
import Home from "./Component/Home/Home.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import NotFound from "./Component/NotFound/NotFound.jsx";
import RequireAuth from "./Component/RequireAuth/RequireAuth.jsx";
import Services from "./Component/Services/Services.jsx";
import Singin from "./Component/Singin/Singin.jsx";
import SingUp from "./Component/SingUp/SingUp.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:id"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Singin />} />
        <Route path="/login/reset" element={<ForgotPassword/>} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
