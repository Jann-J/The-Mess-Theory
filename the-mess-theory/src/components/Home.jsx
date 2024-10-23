import React, {useEffect, useState} from "react";
import { useNavigate, } from "react-router-dom";

export default function Home() {
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
        setMealSlot('snacks');
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

  

  const handleSelect = (snack) => {
    if (selectedSnacks.some((s) => s.name === snack.name)) {
      // Deselect the snack
      setSelectedSnacks(selectedSnacks.filter((s) => s.name !== snack.name));
    } else {
      // Select the snack
      setSelectedSnacks([...selectedSnacks, snack]);
    }
  };

  const totalCost = selectedSnacks.reduce((total, snack) => total + snack.price, 0);

  const confirmCart = () => {
    if (selectedSnacks.length === 0) {
      alert('No snacks selected!');
      return;
    }
  
    // Handle cart confirmation logic using selectedSnacks
    alert(`You have confirmed: ${selectedSnacks.map(item => item.name).join(", ")}. Total: Rps. ${totalCost}`);
    
    // Here, you'd update the backend with selected snacks details
    setSelectedSnacks([]); // Clear the selected snacks after confirmation
  };

  return (
    <>
      <div className="p-4">
        {/* CLASS FOR MEAL SHOWING */}
        <div className="text-xl font-bold py-2 text-center">
          Hey {user ? user.name : "Guest"}!
        </div>
  
        {!mealSlot && (
          <div className="text-lg py-2">
            <div className="m-4 text-zinc-200 font-serif text-center text-lg bg-slate-600 rounded-lg">
            Oops...! no meal available now
            <br />
            Here's the timetable though
            </div>
            <div className="flex flex-row justify-between sm:justify-around  min-mr-4">
            <div className="text-white mr-4">
                <span className="text-yellow-400 font-bold">On regular <br />
                 days <br /></span>
                <ul>
                  <li className="py-2 font-mono">Breakfast: <br /> 
                    7am - 9am</li>
                  <li className="py-2 font-mono">Lunch: <br />
                    10am - 2pm</li>
                  <li className="py-2 font-mono">Snacks: <br />
                  4pm - 6pm</li>
                  <li className="py-2 font-mono">Dinner: <br />
                  7pm - 9pm</li>
                </ul>
              </div>
              <div>
                <span className="text-yellow-400 font-bold">On special days <br /> (Sunday / Holidays)</span>
                <ul className="text-white">
                  <li className="py-2 font-mono">Breakfast: <br />
                     7am - 9am</li>
                  <li className="py-2 font-mono">Lunch: <br />
                    12pm - 2pm</li>
                  <li className="py-2 font-mono">Snacks: <br /> 
                    NA</li>
                  <li className="py-2 font-mono">Dinner: <br />
                  NA</li>
                </ul>
              </div>
              </div>
            </div>
        )}
  
        {mealSlot && (
          <div>
            <div className="text-sm py-2 uppercase text-white my-4">
              it's {mealSlot} TIME:
  
              {(mealSlot === "snacks" || mealSlot === "breakfast") && (
                <div className="flex flex-col my-4">
                  <table className="table-auto text-left">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {snacks.map((snack, index) => (
                        <tr key={index}>
                          <td>{snack.name}</td>
                          <td>{snack.price}</td>
                          <td>
                            <input
                              type="checkbox"
                              checked={selectedSnacks.some((s) => s.name === snack.name)}
                              onChange={() => handleSelect(snack)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
  
                  <div className="my-4">
                    <h4 className="text-white font-bold">Total: Rps. {totalCost}</h4>
                  </div>
  
                  {/* Confirm Button */}
                  <button
                    onClick={confirmCart}
                    className="max-w-fit my-2 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600"
                  >
                    Confirm Cart
                  </button>
                </div>
              )}
  
              {(mealSlot === "lunch" || mealSlot === "dinner") && (
                <div>
                  <button
                    onClick={confirmCart}
                    className="max-w-fit my-2 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600"
                  >
                    Confirm Meal
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
  
        {/* HISTORY OPTION */}
        <p className="mt-10 text-sm text-zinc-300">
          Want to check your Meal History?{" "}
          <span
            className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400"
            onClick={() => navigate("/history")}
          >
            History
          </span>
        </p>
      </div>
    </>
  );
}