import React, {useState} from "react";
import logo from './../asset/bg-black-tmt-logo.png'
import { Link } from "react-router-dom"
import axios from "axios";

export default function Register() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
      name: "",
      mis: "",
      phone: "",
      email: "",
      year: "",
      password: "",
      confirmPassword: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    //To present form submission
    const handleSubmit = async (event) => {
      event.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }

    if (
      !formData.name ||
      !formData.mis ||
      !formData.phone ||
      !formData.email ||
      !formData.year ||
      !formData.password
    ) {
      setErrorMessage("All fields are required.");
      return;
    }
    
    setErrorMessage("");

    try {
      // Make a POST request to the backend API using Axios
      const response = await axios.post("http://localhost:3000/register", formData);

      // Handle success response
      console.log("Registration successful:", response.data);


    //resetting form
    setFormData({
      name: "",
      mis: "",
      phone: "",
      email: "",
      year: "",
      password: "",
      confirmPassword: "",
    });

  } catch (error) {
    // Handle error response
    console.error("Error during registration:", error.response?.data || error.message);
    setErrorMessage("Registration failed. Please try again.");
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
            <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-yellow-400">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="mis"
                    type="number"
                    value={formData.mis}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.year}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
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
                    name="confirmPassword"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
  