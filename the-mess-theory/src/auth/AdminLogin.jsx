
import React, { useState, useContext} from "react"
import logo from './../asset/bg-black-tmt-logo.png'
import { Link , useNavigate} from "react-router-dom"
import { UserContext } from '../UserContext'

export default function AdminLogin() {

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUserRole } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const isAdmin = true;// Replace with actual login validation logic

    if (isAdmin) {
      setUserRole('admin');
      navigate('/admin-home');
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

    return (
      <>
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-28 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-yellow-400">
              Sign in to your account
              <br />
              Admin Sign-in
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-yellow-400">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-yellow-400">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              {errorMessage && <span className="text-red-600">{errorMessage}</span>}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Are you a student?{' '}
              <Link to="/student-login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Clich here for student login
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  