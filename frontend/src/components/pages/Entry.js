import axios from 'axios';
import React, { useEffect, useState } from "react";

import Header from '../layout/Header';
import AuthSection from '../layout/AuthSection';
import Footer from '../layout/Footer';

export default function Entry() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/signup')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(`Error: ${error}`);
            });
    }, []);

    return (
        <div>
            <Header />
            {data ? <p className='h-10 w-full bg-green-200'>{data.message}</p> : <p className='h-10 w-full bg-red-200'>Loading data...</p>}
            <AuthSection />
            <Footer />
        </div>
    )
};