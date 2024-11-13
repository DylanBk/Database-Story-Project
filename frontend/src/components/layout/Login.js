import React, { useEffect, useState } from "react";

export default function LoginForm() {
    const [errorMessage, setErrorMessage] = useState("")

    if (errorMessage.length > 0) {
        document.getElementById('error-msg-wrapper').style.visibility = 'visible'
        document.getElementById('error-msg').textContent = errorMessage;
    }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const json = await response.json()
            if (response.ok) {
                console.log(json.message)
                document.cookie = "userSession; max-age=1800";
            } else {
                console.error(json.error)
                if (json.error == "user does not exist") {
                    setErrorMessage("A user with that email does not exist")
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div
            id="login-container"
            className="h-96 w-2/3 xl:w-2/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 sm:py-8 rounded-md rounded-tr-none mx-auto bg-white bg-opacity-10 transition-transform duration-500"
            onSubmit={handleSubmit}>
            <form
                id="login-form"
                className="w-3/4 xl:w-2/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 xl:gap-6 2xl:gap-10 items-center justify-center mt-10">
                <p
                    id="error-msg-wrapper"
                    className="p-1 bg-black bg-opacity-60 text-red-500 invisible">
                    <strong>Error: </strong><span id="error-msg"></span>
                </p>
                <input
                    className="w-full p-2 rounded-md transition-transform duration-500 auth-input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required>
                </input>
                <input
                    className="w-full p-2 rounded-md transition-transform duration-500 auth-input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required>
                </input>
                <button
                    className="h-fit w-1/2 self-center px-4 py-2 rounded-md hover:w-full focus:w-3/4 primary-btn transition-colors duration-200"
                    type='submit'>
                    Sign In
                </button>
            </form>
        </div>
    )
};