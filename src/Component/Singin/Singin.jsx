import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Singin = () => {

      // singin Account Email And Password 
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [singinError, setSinginError] = useState('')

      //show error massages
      useEffect(()=>{
        if(singinError){
          toast.configure()
          toast.error(`${singinError.toUpperCase()}`)
        }
      },[singinError])

      //navigate
      const navigate = useNavigate()
      const [ loginUser ] = useAuthState(auth);
      let location = useLocation()
      let from = location.state?.from?.pathname || "/";

      //singin with google
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      if(loginUser){
        navigate(from, {replace: true} )
      }
      //singin email and password
  
      const formSubmitSingin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          navigate(from, {replace: true} )
        })
        .catch((error) => {
          console.log(error.code)
          setSinginError( error.code.slice(5))
        });
      }



  return (

        <section className="h-[calc(100vh-3rem)]">

            <div className=" w-full h-full flex justify-center items-center">
                <div className="w-full h-auto min-h-full sm:w-4/5 md:w-6/12 lg:w-4/12 px-4 flex items-center">
                <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        onClick={() => signInWithGoogle()}
                        className="w-fill bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs text-[1rem]"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <FcGoogle className="text-3xl mr-1"/>
                        Sign in with Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with Credentials</small>
                    </div>

                    <form onSubmit={formSubmitSingin}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    
                    <div className="text-center mt-6">
                        <input
                          className="bg-gray-800 hover:bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full cursor-pointer"
                          type="submit"
                          value="SING IN"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    </form>

                    <div className="flex px-1 flex-wrap text-lg mt-6 text-gray-800">
                        <div className="w-1/2">
                            <Link
                            to="/login/reset"
  /*                           onClick={e => e.preventDefault()} */
                            className="text-red-500"
                            >
                            Forgot password?
                            </Link>
                        </div>
                        <div className="w-1/2 text-right">
                            <Link
                            to="/singup"
    /*                         onClick={e => e.preventDefault()} */
                            className="text-blue-500"
                            >
                            Create new account
                            </Link>
                        </div>
                    </div>

                  </div>
                </div>

                </div>
            </div>

        </section>

    );
};

export default Singin;