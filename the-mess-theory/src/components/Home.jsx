import React, {useEffect, useState} from "react";
import { useNavigate, } from "react-router-dom";

export default function Home(){
  const dayType = 'regular'; // This can be fetched from the backend in future
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mealSlot, setMealSlot] = useState(null); // Determine current meal slot
  const [cart, setCart] = useState([]); // For storing selected options
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [user, setUser] = useState(null); // User info from backend
  const snacks = [
    { name: 'Masala Tea', price: 8 },
    { name: 'Milk', price: 13 },
    { name: 'Toast', price: 12 },
    { name: 'Biscuit', price: 10 },
    { name: 'Poha', price: 12 },
    { name: 'Upama', price: 13 },
    { name: 'Idli Sambar', price: 20 },
  ];

  // Simulate a backend API call to get user data
  const fetchUserData = async () => {
    // Replace this with an actual API call in future
    const userData = { name: 'Janhavi', mealHistory: [] };
    setUser(userData);
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data on component load
  }, []);

  const determineMealSlot = () => {
    const hour = currentTime.getHours();
    if (dayType === "regular") {
      if (hour >= 7 && hour <= 9) {
        setMealSlot('breakfast');
      } else if (hour >= 10 && hour <= 13) {
        setMealSlot('lunch');
      } else if (hour >= 16 && hour <= 18) {
        setMealSlot('snacks');
      } else if (hour >= 19 && hour <= 21) {
        setMealSlot('dinner');
      } else {
        setMealSlot(null);
      }
    } else if (dayType === "sunday" || dayType === "holiday") {
      if (hour >= 7 && hour <= 9) {
        setMealSlot('breakfast');
      } else if (hour >= 12 && hour <= 14) {
        setMealSlot('lunch');
      } else {
        setMealSlot('snacks');
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Updates current time every minute

    determineMealSlot(); // Call the function to determine meal slot whenever the time changes

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [currentTime]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const confirmCart = () => {
    // Handle cart confirmation logic
    alert(`You have confirmed: ${cart.map(item => item.name).join(", ")}. Total: Rps. ${cart.reduce((sum, item) => sum + item.price, 0)}`);
    // Here, you'd update the backend with cart details
    setCart([]); // Clear the cart after confirmation
  };

  const handleSelect = (snack) => {
    if (selectedSnacks.includes(snack)) {
      setSelectedSnacks(selectedSnacks.filter((s) => s !== snack));
    } else {
      setSelectedSnacks([...selectedSnacks, snack]);
    }
  };

  const totalCost = selectedSnacks.reduce((total, snack) => total + snack.price, 0);


    return(
        <>
        <div className="p-4">
            {/*CLASS FOR MEAL SHOWING */}
            <div className="text-xl font-bold py-2 ">
                Hey {/**Name from backend */}!
            </div>
            {mealSlot && (
                <div>
                    <div className="">

                        {mealSlot === 'breakfast' && (
                            <div>
                               {/**Same as breakfast */}
                            </div>
                        )}


                        {mealSlot === 'snacks' && (
                            <div className="flex flex-col ">
                                <h3 className="my-2 text-white font-bold">Snacks Time ! !</h3>
                                <table className="text-center p-2">
                                  <tr className="p-4">
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Select</th>
                                  </tr>
                                  <tr className="p-4">
                                    <td>Masala Tea</td>
                                    <td>Rps. 8</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Milk</td>
                                    <td>Rps. 13</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Toast</td>
                                    <td>Rps. 12</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Biscuit</td>
                                    <td>Rps. 10</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Poha</td>
                                    <td>Rps. 12</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Upama</td>
                                    <td>Rps. 13</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Idli Sambar</td>
                                    <td>Rps. 20</td>
                                    <td></td>
                                  </tr>
                                </table>
                                

                                

                                {/*Confirm Button */}
                                <button 
                                onClick={confirmCart}
                                className="max-w-fit my-2 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                                >
                                    Confirm Cart
                                </button>

                            </div>
                        )}

                        {mealSlot === 'lunch' &&
                          <div className="">
                            {/**just a confrim meal and reconfirm button */}
                          </div>
                        }

                        {mealSlot === 'dinner' &&
                          <div className="">
                            {/**just a confrim meal and reconfirm button */}
                          </div>
                        }

                    </div>
                </div>
            )}
            {/*MENU FOR LUNCH AND DINNER */}

            {/*HISTORY OPTION*/}
            <p className="mt-10 text-sm text-zinc-300">
              Want to check your Meal History?{' '}
              <span
              className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400"
              onClick={() => navigate('/history')} // Correct usage
>
                History
              </span>
            </p>
        </div>
        </>
    );


}