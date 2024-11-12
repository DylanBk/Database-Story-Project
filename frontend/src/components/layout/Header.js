import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const burger_menu_black = require('../../media/icons/burger-menu-black.png');
const burger_menu_white = require('../../media/icons/burger-menu-white.png');
const spyglass = require('../../media/icons/spyglass.png');

export default function Header() {
    const [isAuthPage, setIsAuthPage] = useState(false)
    const [isWideScreen, setIsWideScreen] = useState(window.screen.width > 768);

    const handleResize = () => {
        setIsWideScreen(window.screen.width > 768);
    };

    useEffect(() => {
        if (window.location.href.includes('login') || window.location.href.includes('signup')) {
            setIsAuthPage(true)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isAuthPage || document.getElementById('login-btn')) {
        document.getElementById('login-btn').style.transition = 'none';
        document.getElementById('login-btn').style.visibility = 'hidden';
        document.getElementById('nav').style.right = '4rem';
    }

    return (
        <div
            id="header"
            className="h-28 sm:h-32 w-full relative flex flex-col bg-white shadow-lg shadow-gray-400 smooth-transition">
                <Link
                    className="absolute left-1/2 top-2 text-2xl sm:text-3xl lg:text-5xl font-poppins select-none -translate-x-1/2"
                    to='/'>
                        placeholder
                </Link>

                <form
                    className="h-10 w-3/5 md:w-2/5 2xl:w-3/5 absolute left-1/2 md:left-4 xl:left-1/4 bottom-4 flex flex-row items-center mt-4 md:m-0 -translate-x-1/2 md:translate-x-0 xl:-translate-x-1/4 smooth-transition">
                    <input
                        id="search-query"
                        className="w-full pl-4 py-2 rounded-xl bg-gray-100 outline-gray-300"
                        type="text"
                        placeholder="Search...">
                    </input>
                    <button
                        className="h-10 absolute right-0 px-1 md:px-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-white transition-colors duration-300"
                        type="submit">
                        <img
                            className="h-6"
                            src={spyglass}
                            alt="Spyglass Search Icon" />
                    </button>
                </form>
                {isWideScreen ? (
                    <div>
                        <nav
                            id="nav"
                            className="h-10 absolute bottom-4 right-28 xl:right-36 flex items-center md:gap-2 lg:gap-4 text-sm md:text-base smooth-transition">
                            <Link
                                className="primary-link"
                                to="/">About</Link>
                            <Link
                                className="primary-link"
                                to="/">Admissions</Link>
                            <Link
                                className="primary-link"
                                to="/">Courses</Link>
                            <Link
                                className="primary-link"
                                to="/">News</Link>
                            <Link
                                className="primary-link"
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
                    id="login-btn"
                    className="h-10 absolute right-4 bottom-4 px-2 py-1 sm:px-4 sm:py-2 rounded-md primary-btn"
                    to="/login">
                        Login
                    </Link>
        </div>
    )
};