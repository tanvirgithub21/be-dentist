import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {

  const [email, setEmail] = useState("")
  
  const hendalResetPassword = (e)=>{
    e.preventDefault();
    toast.configure()

    sendPasswordResetEmail(auth, email)
    .then(() => {
     console.log('email sent')
    // Password reset email sent!
    // ..
    // console.log(result, 'result')
    toast.success("Check Your Email")
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage.slice(22, -2).toUpperCase())

  });
  }


  return (
    <div className="flex h-[calc(100vh-13rem)] justify-center items-center">
     <form onSubmit={hendalResetPassword} className="w-[30rem]  shadow-lg p-4 border-2 rounded-md py-10">

         <div className="mb-9">
             <h3 className="text-center text-3xl font-bold text-gray-700">Reset your Password</h3>
         </div>
         <div className="mb-5">
             <input onChange={e => setEmail(e.target.value)} className="bg-slate-200 w-full px-2 py-3 text-lg rounded-md" type="text" name="email" id="email" placeholder="Enter your email" required />
         </div>

         <div className="">
             <button className="bg-green-400 hover:bg-green-500 text-2xl ease-in-out duration-300 font-semibold text-white w-full px-2 py-3 text-lg rounded-md" type="submit"  >Reset Password</button>
         </div>

         <div className="mb-5 text-lg">
            <div className="flex flex-col items-center pt-6 text-center">
            <Link to="/singup" className="text-blue-500">Create an Account!</Link>
            <span>Already have an account? <Link to="/login" className="text-blue-500">Login!</Link></span>
            </div>
         </div>
     </form>
    </div>
  );
};

export default ForgotPassword;
