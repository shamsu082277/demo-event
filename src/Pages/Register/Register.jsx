import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const Register = () => {

  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  
  const handleSubmit = (event) => {
    event.preventDefault();

    // get field values from register
    const name = event.target.name.value;
    const imageUrl = event.target.imgUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // validation
    if (password.length < 6) {
      toast.error(`Password must be at least 6 characters.`);
    } else if (!/[A-Z]/.test(password)) {
      toast.error(`Password must contain at least one capital letter.`);
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      toast.error(`Password must contain at least one special character.`);
      return;
    }

    // Create new user
    createUser(email, password)
      .then(res => {
        handleUpdateProfile(name, imageUrl)
          .then(() => {
            toast.success('User created successfully');
            navigate(location?.state ? location?.state : "/");
          })
      })
      .catch(error => {
        toast.error(error.message)
      })
  }


  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-pink-500 to-pink-500 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-5xl mb-5 font-sans">Register Here</h1>
          <p className="text-white mt-1">We love to see you here</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div>
          <form onSubmit={handleSubmit} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome To Event Org</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 11a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none" type="text" name="name" id="idName" placeholder="Full name" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              <input className="pl-2 outline-none border-none" type="text" name="imgUrl" id="idImg" placeholder="Enter your image URL" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input className="pl-2 outline-none border-none" type="text" name="email" id="idEmail" placeholder="Email Address" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none" type="password" name="password" id="idPassword" placeholder="Password" />
            </div>
            <button type="submit" className="block w-full bg-pink-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>

          </form>
          <GoogleLogin></GoogleLogin>
          <p className='text-sm'>Already have an account?<span className="text-sm ml-2 text-pink-500 cursor-pointer"><Link to={"/login"}>Log in here</Link> </span></p>

        </div>
      </div>
    </div>
  );
};

export default Register;

