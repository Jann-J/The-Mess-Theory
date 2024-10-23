import React, { useState, useEffect } from "react"
import logo from './../asset/bg-black-tmt-logo.png'
import { Link, useNavigate } from "react-router-dom"

export default function StudentLogin() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const URI = 'http://localhost:4000/api/auth/login';
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  ;
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        setIsLoggedIn(true);
        errorMessage("");
      } else {
        console.log("invalid credentials", response.message);
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

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
              Student Sign-in
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
                    value={user.email}
                    onChange={handleInput}
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
                    value={user.password}
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/*{errorMessage && <span className="text-red-600">{errorMessage}</span>}*/}

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
              Are you new?{' '}
              <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Clich here to Register
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
  