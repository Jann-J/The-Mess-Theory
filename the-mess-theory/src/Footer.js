import React from "react";

const Footer = () => {
    return(
        <footer className="bg-zinc-800 text-white">
            <div className="sm:flex sm:justify-evenly">
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <span className="bg-yellow-300 text-zinc-800 rounded-full p-1">Contact Us</span>
                    <ul>
                        <li>{/*Instagram*/}I</li>
                        <li>{/*X*/}X</li>
                        <li>{/*LinkdIn*/}M</li>
                        <li>{/*xyz*/}X</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                <span className="bg-yellow-300 text-zinc-800 rounded-full p-1">Socials</span>
                    <ul>
                        <li>{/*Instagram*/}I</li>
                        <li>{/*X*/}X</li>
                        <li>{/*LinkdIn*/}M</li>
                        <li>{/*xyz*/}X</li>
                    </ul>
                </div>
            </div>
            <h1 className="text-yellow-300 text-2xl font-bold mb-1 text-center p-2 font-sans">The Mess Theory</h1>
            <p className="text-center text-sm">
                 © {new Date().getFullYear()} The Mess Theory. All rights reserved.
            </p>
        </footer>
    )
}
export default Footer;