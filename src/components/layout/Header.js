import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div
            id="header"
            className="h-20">
                <h1>placeholder</h1>
                <nav>
                    <Link to="/">About</Link>
                    <Link to="/">Admissions</Link>
                    <Link to="/">Courses</Link>
                    <Link to="/">News</Link>
                    <Link to="/admin">Dashboard</Link>
                </nav>
                <Link to="/login">Login</Link>
        </div>
    )
};