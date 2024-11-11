import React, { useState } from "react";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        email: '',
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
        <div className="h-96 w-2/3 xl:w-2/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 sm:py-8 rounded-md mx-auto bg-white bg-opacity-10 smooth-transition">
            <form
                id="register-form"
                className="h-96 w-3/4 xl:w-2/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 xl:gap-6 2xl:gap-10 mt-10">
                <div className="flex flex-row items-center">
                    <label>Email:</label>
                    <input
                        className="w-full p-2 rounded-md smooth-transition"
                        name="email"
                        type="email"
                        placeholder="email@domain.com"
                        onChange={handleChange}
                        required>
                    </input>
                </div>
                <div className="flex flex-row items-center">
                    <label className="text-nowrap">Full Name:</label>
                    <input
                        id="reg-full-name"
                        name='full-name'
                        className="w-full p-2 rounded-md smooth-transition"
                        type='text'
                        required>
                    </input>
                </div>
                <div className="flex flex-row items-center">
                    <label>Password:</label>
                    <input
                        id='reg-pw'
                        className="w-full p-2 rounded-md smooth-transition"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        required>
                    </input>
                </div>
                <button
                    className="h-fit w-fit self-center px-4 py-2 rounded-md bg-medBlue hover:bg-darkBlue text-white"
                    type='submit'
                    onSubmit={handleSubmit}>
                    Sign Up
                </button>
            </form>
        </div>
    )
};