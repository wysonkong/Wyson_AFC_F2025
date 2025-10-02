import { useState } from 'react'
import Navigation from "./Components/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import './App.css'
import {Route} from "react-router";
import {BrowserRouter as Router, Routes,} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/Menu" element={<MenuPage/>} />
                <Route path="/Hiring" element={<HiringPage/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App
