import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const [isFooterAbsolute, setIsFooterAbsolute] = useState(false)

    useEffect(() => {
        if (window.location.href.includes('login')) {
            setIsFooterAbsolute(true)
        }
    }, []);

    if (isFooterAbsolute) {
        document.getElementById('footer').style.position = 'absolute';
        document.getElementById('footer').style.bottom = 0;
    }

    return (
        <div
            id="footer"
            className="h-auto w-full flex flex-row gap-10 p-5 pb-14 bg-gray-300 smooth-transition">
                <div
                    id="footer-generic-links"
                    className="w-full flex flex-row justify-around">
                    <ul className="flex flex-col">
                        <h4 className="text-lg">Pages</h4>
                        <Link
                        className="secondary-link"
                            to='/'>
                            Home
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            About placeholder
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Want to study at placeholder?
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Our Courses
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            News
                        </Link>
                    </ul>
                    <ul className="flex flex-col">
                        <h4 className="text-lg">Configure</h4>
                        <Link
                        className="secondary-link"
                            to='/'>
                            Account
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Settings
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Admin Dashboard
                        </Link>
                    </ul>
                    <ul className="flex flex-col">
                        <h4 className="text-lg">Resources</h4>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Student Stories
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Events
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            How to choose the right course
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            What do I need for my course?
                        </Link>
                        <Link
                            className="secondary-link"
                            to='/'>
                            Support and FaQ
                        </Link>
                    </ul>
                </div>
        </div>
    )
};