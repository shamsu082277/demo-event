import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import GoogleIcon from '../../../public/Image/google.png'
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const GoogleLogin = () => {

    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin =(media) =>{
        media()
        .then(res =>{
            toast.success('Log in successfully');
            navigate(location?.state ? location?.state : "/");
          })
          .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div onClick={()=>handleGoogleLogin(googleLogin)}>
            <div className="flex space-x-2 mb-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">            
            <button className='flex items-center'> <img className='h-9' src={GoogleIcon} alt="Google" /> Or sign-in with google</button>
          </div>
        </div>
    );
};

export default GoogleLogin;