import React, {useState} from "react";
import logo from './../asset/bg-black-tmt-logo.png'
import { Link } from "react-router-dom"

export default function Register() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match. Please try again.");
        } else {
            // Proceed with form submission logic
            setErrorMessage(""); // Clear error message
            console.log("Form submitted successfully");
            //submission logic here
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
              Sign up
            </h2>
          </div>
        
            
            
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-5">
            
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-yellow-400">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder=" Enter your name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="MIS" className="block text-sm font-medium leading-6 text-yellow-400">
                  MIS id
                </label>
                <div className="mt-2">
                  <input
                    id="MIS"
                    name="MIS"
                    type="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="MIS" className="block text-sm font-medium leading-6 text-yellow-400">
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="^\+91[0-9]{10}$"
                    placeholder=" +91XXXXXXXXXX"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-yellow-400">
                  Email address (@coeptech.ac.in)
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    pattern=".+@coeptech\.ac\.in"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="year" className="block text-sm font-medium leading-6 text-yellow-400">
                  Year
                </label>
                <div className="mt-2">
                  <select
                    id="year"
                    name="year"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Year</option>
                    <option value="FY">FY</option>
                    <option value="SY">SY</option>
                    <option value="TY">TY</option>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                  </select>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-yellow-400">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="mt-2 text-sm text-red-600">
                  {errorMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              ALreay registered?{' '}
              <Link to="/student-login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Clich here to Login
              </Link>
            </p>

            <p className="mt-10 text-center text-sm text-gray-500">
              Are you Admin?{' '}
              <Link to="/admin-login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Clich here for Admin login
              </Link>
            </p>
            
          </div>
        </div>
      </>
    )
  }
  