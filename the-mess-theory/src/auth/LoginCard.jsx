import React from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to login pages
import logo from './../asset/bg-grey-tmt-logo.png';

const LoginCard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidde py-6 sm:py-12">
      <div className="relative flex flex-col justify-center bg-zinc-800 px-6 pt-10 pb-8 m-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        
        {/*Change the logo later*/}
        <img src={logo} alt="TMT-logo" className='h-28 p-2 object-contain'/>

        <h2 className="text-2xl  mb-4 text-yellow-400 text-center">- Login -</h2>
        <div className="flex flex-col space-y-4">

          <button
            onClick={() => navigate('/admin-login')}
            className="bg-zinc-800 text-white py-2 rounded hover:bg-yellow-400 hover:text-black transition-all"
          >
            Login as Admin
          </button>
          <button
            onClick={() => navigate('/student-login')}
            className="bg-zinc-800 text-white py-2 rounded hover:bg-yellow-400 hover:text-black transition-all"
          >
            Login as Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;