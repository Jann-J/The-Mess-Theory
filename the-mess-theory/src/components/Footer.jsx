import React from "react";
// Initialization for ES Users
const Footer = () => {
    return(
        <footer class="bg-zinc-800 text-white py-5">
            <div class="sm:flex sm:justify-evenly">
                <div class="flex flex-col items-center mb-4 sm:mb-0">
                    <span class="bg-yellow-300 text-zinc-800 rounded-full p-1">Contact Us</span>
                    <ul>
                        <li>{/*Instagram*/}I</li>
                        <li>{/*X*/}X</li>
                        <li>{/*LinkdIn*/}M</li>
                        <li>{/*xyz*/}X</li>
                    </ul>
                </div>
                <div class="flex flex-col items-center">
                <span class="bg-yellow-300 text-zinc-800 rounded-full p-1">Socials</span>
                    <ul>
                        <li>
                     {/*   <span class="[&>svg]:h-5 [&>svg]:w-5">
  look into this
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 320 512">
  <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>*/}
                        </li>
                        <li></li>
                        <li>{/*LinkdIn*/}M</li>
                        <li>{/*xyz*/}X</li>
                    </ul>
                </div>
            </div>
            <h1 class="text-yellow-300 text-2xl font-bold mb-1 text-center p-2 font-sans">The Mess Theory</h1>
            <p class="text-center text-sm">
                 © {new Date().getFullYear()} The Mess Theory. All rights reserved.
            </p>
        </footer>
    )
}
export default Footer;