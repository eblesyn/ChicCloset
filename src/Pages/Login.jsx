import React from 'react';
import google from '../assets/google.png';
import github from '../assets/github.png';
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../redux/ChicSlice';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(addUser({
          id: user.uid,  // Fixed to use user.uid
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        }));
        toast.success('Logged in successfully!');
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Login failed!');
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success('Logged out successfully!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Logout failed!');
      });
  };

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div
          onClick={handleGoogleLogin}
          className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'
        >
          <img src={google} alt="Google" className='w-8' />
          <span className='text-sm text-gray-900'>Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'
        >
          Sign Out
        </button>
      </div>
      <div className='w-full flex items-center justify-center gap-10'>
        <div
          // Add a function to handle GitHub login when implemented
          className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'
        >
          <img src={github} alt="Github" className='w-8' />
          <span className='text-sm text-gray-900'>Sign in with Github</span>
        </div>
        <button 
          onClick={handleSignOut}  // Ensure the sign-out functionality is available here too
          className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'
        >
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
