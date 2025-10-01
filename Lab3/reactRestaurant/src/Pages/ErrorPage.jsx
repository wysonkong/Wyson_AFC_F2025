import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import background from "../assets/malaysian-food.jpg";

const returnHome = () => {
    const navigate = useNavigate();
    navigate(HomePage);
}

const ErrorPage = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`}} className="bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white opacity-75">
                <h1 className="text-4xl font-bold mb-4">Error 404</h1>
                <p className="text-xl">We are working on the page.</p>
                <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                    <Link to="/">Return Home</Link>
                </button>
            </div>
        </div>
    )
}

export default ErrorPage;