import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import auth from '../firebase.init';

const SingUp = () => {

    
    // Minimum eight characters, at least one letter and one number
    const passwordReagx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    //Error massages 
    const [errorMassages, setErrorMassages] = useState(null);

    // Create Account Email And Password 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [machPassword, setmachPassword] = useState('');

    // check confirm password and strong password and show error massages
    useEffect(()=>{

        if((passwordReagx.test(password))){
            if(confirmPassword){
                if(password === confirmPassword){
                    setmachPassword(confirmPassword)
                    setErrorMassages("")
                }else{
                    setmachPassword("")
                    setErrorMassages("Password not match!")
                }
            }else{
                setErrorMassages("")
            }
        }else{
            if(password || confirmPassword){
                setErrorMassages("8 characters,only letter and number")
            }else{
                setErrorMassages(null)
            }
        } 
    },[password, confirmPassword])

    const [ createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)

/*     const handelCreatUser = (event) =>{
        event.preventDefault()
        console.log(email, machPassword)
        createUserWithEmailAndPassword(email, machPassword)
    } */

    const handelCreatUser = () =>{
        createUserWithEmailAndPassword(email, machPassword)
        console.log(email, machPassword,)
        sendEmailVerification()
    }

    return (
        <>
            <div className="bg-zinc-100 min-h-[calc(100vh-3rem)] flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                            <h1 className="mb-8 text-3xl font-semibold text-center">Sign up</h1>
                        <from>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                 />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                 />
                            
                            {
                                errorMassages !== null && <p className='text-red-600 w-auto font-semibold text-base mt-[-14px] py-2 px-2'>{errorMassages}</p>
                            }

                            <input
                                onClick={handelCreatUser}
                                type="submit"
                                value="Create Account"
                                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                            />{/* Create Account</input>  */}

                        </from>

                            <div className="text-gray-400 text-center mt-6">
                                Already have an account? 
                                <a className="no-underline border-b border-blue-600 text-blue-600 font-semibold ml-1" href="../login/">
                                    Log in
                                </a>.
                            </div>

                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default SingUp;