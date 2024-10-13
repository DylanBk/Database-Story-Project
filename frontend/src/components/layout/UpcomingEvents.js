import React from "react";
import { Link } from "react-router-dom";

export default function UpcomingEvents() {
    return (
        <div id="upcoming-events-section">
            <h2 className="mt-28 text-xl sm:text-2xl lg:text-4xl font-poppins text-center">Upcoming Events</h2>
            <div
                id="upcoming-events-container"
                className="h-96 w-full flex flex-row mt-6 bg-lightBlue">
                {}
            </div>
        </div>
    )
}