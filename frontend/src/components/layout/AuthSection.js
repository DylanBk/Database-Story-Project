import CryptoJS from 'cryptojs';
import React, { useState } from "react";

const secret_key = process.env.REACT_APP_SECRET_KEY;

export default function AuthSection() {
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

        const pw = document.getElementById('reg-pw').value;

        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(pw, secret_key, {
            iv: iv,
            mode: CryptoJS.mode.CFB,
            padding: CryptoJS.pad.NoPadding
        });
        const iv_and_ciphertxt = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);

        document.getElementById('reg-hidden-pw').value = iv_and_ciphertxt;
        document.getElementById('reg-pw').value = '';

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
        <div className="h-96 w-2/3 xl:w-2/5 py-4 sm:py-8 mx-auto bg-midBlue smooth-transition">
            <form
                id="register-form"
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
                <label>Full Name:</label>
                <input
                    id="reg-full-name"
                    name='full-name'
                    className="w-3/4 xl:w-2/3 p-2 rounded-md smooth-transition"
                    type='text'
                    required>
                </input>
                <label>Password:</label>
                <input
                    id='reg-pw'
                    className="w-3/4 p-2 xl:w-2/3 rounded-md smooth-transition"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required>
                </input>
                <input
                    id="reg-hidden-pw"
                    name="hidden-pw"
                    type="hidden">
                </input>
                <button
                    className=""
                    type='submit'
                    onSubmit={handleSubmit}>
                    Sign Up
                </button>
            </form>
        </div>
    )
};