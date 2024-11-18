import React from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Dashboard() {
    return (
        <div>
            <Header />
            <div
                className="min-h-screen w-full relative flex">
                <div
                    id="sidebar"
                    className="h-1/2 w-44 absolute flex flex-col rounded-r-2xl bg-lightBlue">
                        <div className="sidebar-section">
                            <button className="sidebar-option border-b border-white !text-center !text-xl">Overview</button>
                            <p className="sidebar-option">example</p>
                        </div>
                        <div className="sidebar-section">
                            <button className="sidebar-option">Staff</button>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    )
};