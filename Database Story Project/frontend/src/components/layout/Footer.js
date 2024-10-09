import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div
            id="footer"
            className="h-44 w-full absolute bottom-0 flex flex-row gap-10 bg-lightBlue">
                <ul className="flex flex-col ml-14">
                    <Link
                    className="hover:underline"
                        to='/'>Home</Link>
                    <Link
                        className="hover:underline"
                        to='/'>About</Link>
                    <Link
                        className="hover:underline"
                        to='/'>Apply</Link>
                </ul>
                <ul className="flex flex-col">
                    <Link to='/'>Careers</Link>
                </ul>
        </div>
    )
};