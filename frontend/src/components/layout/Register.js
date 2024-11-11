import React, { useState } from "react";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, val} = e.target;

        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefaults();

        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log("sign up successful")
        } else {
            console.error("sign up failed")
        }
    };

    return (
        <div
            id="reg-container"
            className="h-96 w-2/3 xl:w-2/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 sm:py-8 rounded-lg rounded-tl-none mx-auto bg-white bg-opacity-10 invisible transition-transform duration-500">
            <form
                id="register-form"
                className="w-3/4 xl:w-2/3 absolute left-1/2 top-1/2 flex flex-col gap-4 xl:gap-6 2xl:gap-10 items-center justify-center -translate-x-1/2 -translate-y-1/2 invisible">
                <input
                    className="w-full p-2 rounded-md transition-transform duration-500 auth-input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required>
                </input>
                <input
                    name="full-name"
                    className="w-full p-2 rounded-md transition-transform duration-500 bg-red-400"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required>
                </input>
                <input
                    id='reg-pw'
                    className="w-full p-2 rounded-md transition-transform duration-500"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required>
                </input>
                <button
                    className="h-fit w-full self-center px-4 py-2 rounded-sm primary-btn transition-colors duration-200"
                    type='submit'
                    onSubmit={handleSubmit}>
                    Sign Up
                </button>
            </form>
        </div>
    )
};