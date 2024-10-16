import React from "react";

export default function AuthSection() {
    return (
        <div className="h-96 w-2/3 xl:w-2/5 py-4 sm:py-8 mx-auto bg-midBlue smooth-transition">
            <form
                className="flex flex-col gap-4 xl:gap-6 2xl:gap-10 items-center">
                <div>
                    <label>Email:</label>
                    <input
                        className="w-3/4 xl:w-2/3 p-2 rounded-md smooth-transition"
                        name="email"
                        type="email"
                        placeholder="email@domain.com">
                    </input>
                </div>
                <input
                    className="w-3/4 p-2 xl:w-2/3 rounded-md smooth-transition"
                    name="password"
                    type="password">
                </input>
                <input></input>
            </form>
        </div>
    )
};