import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../layout/Header";
import UpcomingEvents from "../layout/UpcomingEvents";
import Footer from "../layout/Footer";

const hero_banner = require('../../media/images/hero-banner.webp');

export default function Home() {
    return (
        <div>
            <Header />
            <div
                id="hero-banner-container"
                className="h-96 w-full">
                <div
                    id="hero-banner-bg"
                    className="h-96 w-full absolute bg-black">
                </div>
                <img
                    id="hero-banner-img"
                    className="h-96 w-full absolute object-cover opacity-60"
                    src={hero_banner}
                    alt="A hero banner showing the college building from the outside"/>
                <div
                    id="hero-banner-btn-container"
                    className="absolute left-1/2 flex flex-row gap-5 mt-52 -translate-x-1/2">
                    <Link
                        className="px-4 py-2 rounded-full bg-black bg-opacity-30 text-white transition-colors duration-300 secondary-btn"
                        to="/">
                        <p className="opacity-100">Explore Courses</p>
                    </Link>
                    <Link
                        className="px-4 py-2 rounded-full hover:bg-black hover:bg-opacity-30 hover:text-white transition-colors duration-300 tertiary-btn"
                        to="/">
                        Apply Now
                    </Link>
                </div>
            </div>
            <UpcomingEvents />
            <Footer />
        </div>
    )
};