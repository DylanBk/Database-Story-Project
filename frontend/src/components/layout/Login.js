import React, { useState } from "react";

const secret_key = process.env.REACT_APP_SECRET_KEY;

export default function LoginForm() {
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

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log("login successful");
        } else {
            const err = await response.json();
            console.error(err.error);
        };
    };

    return (
        <div className="h-96 w-2/3 xl:w-2/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 sm:py-8 mx-auto bg-midBlue smooth-transition border border-green-500 bg-blue-200 invisible">
            <form
                id="login-form"
                className="flex flex-col gap-4 xl:gap-6 2xl:gap-10 items-center">
                <div>
                    <label>Email:</label>
                    <input
                        className="w-3/4 xl:w-2/3 p-2 rounded-md smooth-transition"
                        name="email"
                        type="email"
                        placeholder="email@domain.com"
                        onChange={handleChange}
                        required>
                    </input>
                </div>
                <label>Password:</label>
                <input
                    id='login-pw'
                    className="w-3/4 p-2 xl:w-2/3 rounded-md smooth-transition"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required>
                </input>
                <button
                    className="bg-green-50"
                    type='submit'
                    onSubmit={handleSubmit}>
                    Sign In
                </button>
            </form>
        </div>
    )
};