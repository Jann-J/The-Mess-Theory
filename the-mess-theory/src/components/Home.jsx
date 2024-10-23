import React, {useEffect, useState} from "react";
import { useNavigate, } from "react-router-dom";

export default function Home(){
    //for now
    const dayType = 'regular' //later take this from admin
    
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mealSlot, setMealSlot] = useState(null); // Determine current meal slot
    const [cart, setCart] = useState([]); // For storing selected options
    const [selectedItems, setSelectedItems] = useState([]);

    const URI = 'http://localhost:4000/api/auth/home';

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
          setMealSlot('snacks'); // No snacks or dinner on Sunday/holiday
        }
      }
    };

    useEffect(() => {
      const timer = setInterval(() => {
          setCurrentTime(new Date());
      }, 60000); // Updates current time every minute
  
      // Call the function to determine meal slot whenever the time changes
      determineMealSlot();
  
      return () => clearInterval(timer); // Clean up the interval on unmount
    }, [currentTime]); // Recalculate on currentTime change
  

    const handleCheckIn = (mealType) => {
      console.log(`Checked in for ${mealType}`);
      // Handle check-in logic here in a better way
    };
        
    const addToCart = (item) => {
      setCart([...cart, item]);
    };
        
    const confirmCart = () => {
      // Handle cart confirmation logic in a better way
      alert('Cart confirmed');
    };

    // Function to toggle item selection
    const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      // If item is already selected, remove it
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
      setCart(cart.filter(cartItem => cartItem !== item));
    } else {
      // Otherwise, add it to the selection
      setSelectedItems([...selectedItems, item]);
      addToCart(item);
    }
  };

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
                                <h3 className="text-black bg-white">Breakfast (7:30-9:00)</h3>
                                <button onClick={() => handleCheckIn('breakfast')}>Check In</button>
                                
                                <div className="meal-menu">
                                    <p>Choose breakfast options:</p>
                                    <button onClick={() => addToCart('Option 1')}>Option 1</button>
                                    <button onClick={() => addToCart('Option 2')}>Option 2</button>
                                    <button onClick={confirmCart}>Confirm Cart</button>
                                </div>
                            </div>
                        )}


                        {mealSlot === 'snacks' && (
                            <div className="flex flex-col ">
                                <h3 className="my-2 text-white font-bold">Snacks Time ! !</h3>
                                
                                {/**DYNAMIC ALLOCATION FROM BACKEND ARRAY */}
                                <div className="my-4 border-2 border-zinc-500 rounded-2xl sm:max-w-xs">
                                
                                {/*Example of button*/}
                                <button
                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-zinc-600 rounded-t-2xl"
                                onClick={() => toggleItem('Option 1')}
                                >
                                    Option 1
                                    {selectedItems.includes('Option 1') && <span className="ml-2 text-green-500 font-bold">✓</span>} {/* Show tick if selected */}
                                </button>

                                <button
                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-zinc-600"
                                onClick={() => toggleItem('Option 2')}
                                >
                                    Option 2
                                    {selectedItems.includes('Option 2') && <span className="ml-4 text-green-500 font-bold">✓</span>} {/* Show tick if selected */}
                                </button>

                                <button
                                className="flex items-center justify-between w-full px-4 py-2 rounded-b-2xl hover:bg-zinc-600"
                                onClick={() => toggleItem('Option 3')}
                                >
                                    Option 3
                                    {selectedItems.includes('Option 3') && <span className="ml-4 text-green-500 font-bold">✓</span>} {/* Show tick if selected */}
                                </button>

                                </div>

                                {/*Confirm Button */}
                                <button 
                                onClick={confirmCart}
                                className="max-w-fit my-2 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                                >
                                    Confirm Cart
                                </button>

                            </div>
                        )}


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