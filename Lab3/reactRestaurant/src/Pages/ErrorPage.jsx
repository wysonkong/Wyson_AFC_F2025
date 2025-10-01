import React from "react";
import { useNavigate } from 'react-router-dom';
import HomePage from "./HomePage.jsx";

const returnHome = () => {
    const navigate = useNavigate();
    navigate(HomePage);
}

const ErrorPage = () => {
    return (
        <div className="bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white opacity-75">
                <h1 className="text-4xl font-bold mb-4">Error 404</h1>
                <p className="text-xl">We are working on the page.</p>
                <button
                    onClick={returnHome}
                    className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                    Return Home
                </button>
            </div>
        </div>
    )
}

export default ErrorPage;