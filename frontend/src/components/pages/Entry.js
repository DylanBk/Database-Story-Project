import React, { useEffect, useState } from "react";

import Header from '../layout/Header';
import RegisterForm from '../layout/Register';
import LoginForm from "../layout/Login";
import Footer from '../layout/Footer';

const authCheck = () => {
    const cookies = document.cookie.split(';');
    return cookies.some(cookie => cookie.startsWith('loggedIn='));
};

export default function Entry() {
    const check = authCheck()
    if (check) {
        window.location.href = '/'
    }

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true)

    if (document.getElementById('login-container')) {
        if (isLoginFormVisible) {
            console.log(isLoginFormVisible)
            document.getElementById('reg-container').style.visibility = 'hidden';
            document.getElementById('register-form').style.visibility = 'hidden';
            document.getElementById('login-container').style.visibility = 'visible';
            document.getElementById('login-form').style.visibility = 'visible';
            document.getElementById('show-login-form').style.visibility = 'visible';
            document.getElementById('hide-login-form').style.visibility = 'hidden';
        } else {
            console.log(isLoginFormVisible)
            document.getElementById('login-container').style.visibility = 'hidden';
            document.getElementById('login-form').style.visibility = 'hidden';
            document.getElementById('reg-container').style.visibility = 'visible';
            document.getElementById('register-form').style.visibility = 'visible';
            document.getElementById('hide-login-form').style.visibility = 'visible';
            document.getElementById('show-login-form').style.visibility = 'hidden';
        }
    } else {
        console.log('no form loaded')
    }

    return (
        <div>
            <div
                id="bg-gradient"
                className="h-full w-full absolute bg-gradient-to-br from-medBlue to-mint"></div>
            <Header />


            <div
                id="auth-form-wrapper"
                className="h-96 relative mt-28 sm:mt-32 mb-44">
                <div>
                    <button
                        id="hide-login-form"
                        className="w-1/5 absolute left-[16.666667%] xl:left-[30%] -top-10 py-2 rounded-t-lg bg-white invisible transition-transform duration-500"
                        onClick={() => {
                            setIsLoginFormVisible(true)
                        }}>
                        Sign In
                    </button>
                    <button
                        id="show-login-form"
                        className="w-1/5 absolute right-[16.666667%] xl:right-[30%] -top-10 py-2 rounded-t-lg bg-white transition-transform duration-500"
                        onClick={() => {
                            setIsLoginFormVisible(false)
                        }}>
                        Sign Up
                    </button>
                </div>
                <RegisterForm />
                <LoginForm />
            </div>

            <Footer />
        </div>
    )
};