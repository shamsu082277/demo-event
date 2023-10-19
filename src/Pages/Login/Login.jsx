import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import useAuth from './../../Hooks/useAuth';
import toast from 'react-hot-toast';



const Login = () => {

  const {signIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit =(event)=>{
    event.preventDefault();

    // get field values from register
    const email = event.target.email.value;
    const password = event.target.password.value;


    // Create new user
    signIn(email,password)
    .then(res =>{
      toast.success('Log in successfully');
      navigate(location?.state ? location?.state : "/");
    })
    .catch(error => {
      toast.error(error.message)
  })

  }


  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-pink-500 to-pink-500 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-5xl mb-5 font-sans">Login Here</h1>
          <p className="text-white mt-1">We love to see you here again</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <span className="text-sm text-gray-900">Welcome back</span>
              <h1 className="text-2xl font-bold">Login to your account</h1>
            </div>
            <div className="mt-5">
              <label className="block text-md mb-2" htmlFor="email">Email</label>
              <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" />

            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="password">Password</label>
              <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
            </div>
            <div className="flex justify-between">
              <div>
                <input className="cursor-pointer" type="radio" name="rememberme" />
                <span className="text-sm">Remember Me</span>
              </div>
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <div>
              <button className="mt-4 mb-3 w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-md transition duration-100" type='submit'>Login now</button>
            </div>
          </form>
          <GoogleLogin></GoogleLogin>
          <p className='text-sm '>Don't have an account?<span className="text-sm ml-2 text-pink-500 cursor-pointer"><Link to={"/register"}>Register in here</Link> </span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;