import React from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Error404() {
    return (
        <div>
            <Header />
            <div className="h-52 sm:h-1/2 md:h-96 w-2/3 absolute top-40 left-1/2 m-auto bg-gray-300 text-center -translate-x-1/2">
                <h1 className="text-3xl text-red-500 font-black">Page Not Found</h1>
                <p className="mt-2">We cannot find the page for your search, check the URL and try again.</p>
            </div>
            <Footer />
        </div>
    )
}