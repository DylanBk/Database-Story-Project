import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const burger_menu_black = require('../../media/icons/burger-menu-black.png');
const burger_menu_white = require('../../media/icons/burger-menu-white.png');

export default function Header() {
    const [isWideScreen, setIsWideScreen] = useState(window.screen.width > 768);

    const handleResize = () => {
        setIsWideScreen(window.screen.width > 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            id="header"
            className="h-28 sm:h-32 w-full relative flex flex-col shadow-lg shadow-gray-400 smooth-transition">
                <Link
                    className="absolute left-1/2 top-2 text-2xl sm:text-3xl lg:text-5xl font-open-sans select-none -translate-x-1/2"
                    to='/'>
                        placeholder
                </Link>

                <form
                    className="h-10 w-3/5 md:w-2/5 xl:w-3/5 absolute left-1/2 md:left-4 xl:left-1/4 bottom-4 flex flex-row items-center mt-4 md:m-0 -translate-x-1/2 md:translate-x-0 xl:-translate-x-1/4 smooth-transition">
                    <input
                        id="search-query"
                        className="w-full pl-4 py-2 rounded-l-md bg-gray-100 outline-gray-300"
                        type="text"
                        placeholder="Search...">
                    </input>
                    <button
                        className="px-1 py-2 md:px-2 border-l border-gray-300 rounded-r-xl bg-gray-100 hover:bg-darkBlue hover:text-white transition-colors duration-150"
                        type="submit">
                        Search
                    </button>
                </form>
                {isWideScreen ? (
                    <div>

                        <nav className="h-10 absolute bottom-4 right-28 xl:right-36 flex items-center md:gap-2 lg:gap-5 text-sm md:text-base smooth-transition">
                            <Link
                                className="hover:text-darkBlue"
                                to="/">About</Link>
                            <Link
                                className="hover:text-darkBlue"
                                to="/">Admissions</Link>
                            <Link
                                className="hover:text-darkBlue"
                                to="/">Courses</Link>
                            <Link
                                className="hover:text-darkBlue"
                                to="/">News</Link>
                            <Link
                                className="hover:text-darkBlue"
                                to="/admin">Dashboard</Link>
                        </nav>
                    </div>
                ) : (
                    <button
                        className="w-8 absolute left-4 top-1/2 text-center -translate-y-1/2"
                        onClick={''}>
                            <picture>
                                <source srcSet={burger_menu_black} media="prefers-color-scheme: light"></source>
                                <source srcSet={burger_menu_white} media="prefers-color-scheme: dark"></source>
                                <img src={burger_menu_black} alt="Burger Menu Icon"></img>
                            </picture>
                    </button>
                )} 
                <Link
                    to="/login"
                    className="h-10 absolute right-4 bottom-4 px-2 py-1 sm:px-4 sm:py-2 rounded-md bg-medBlue text-center text-white hover:bg-darkBlue">Login</Link>
        </div>
    )
};