import React, { useEffect, useState } from "react";

import Header from '../layout/Header';
import RegisterForm from '../layout/Register';
import LoginForm from "../layout/Login";
import Footer from '../layout/Footer';

export default function Entry() {

    return (
        <div className="bg-gradient-to-br from-medBlue to-mint">
            <Header />
            <div
                id="auth-form-wrapper"
                className="h-96 relative mt-28 sm:mt-32">
                <RegisterForm />
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
};