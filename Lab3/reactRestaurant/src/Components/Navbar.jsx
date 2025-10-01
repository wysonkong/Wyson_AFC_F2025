import { useState } from 'react';
import {Link} from "react-router-dom";

const Navigation = ({ currentPage, setCurrentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const getButtonClass = () =>
        `font-semibold text-white flex items-center space-x-2 px-3 py-2 rounded transition 'bg-green-700 hover:bg-green-800' : 'bg-transparent hover:bg-green-600'
        }`;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setMobileMenuOpen(false); // close mobile menu on navigation
    };

    return (
        <header>
            <nav className="bg-gradient-to-r from-green-700 to-yellow-700 sticky top-0 z-50">
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center space-x-2">
                        <Link to="/">🍜Nomad Meals</Link>
                    </div>

                    <div className="hidden lg:flex lg:justify-center lg:gap-x-4">
                        <Link to="/Menu">Menu</Link>
                        <Link to="/Hiring">Work With Us</Link>
                    </div>

                    <button
                        className="lg:hidden p-2 rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-opacity-70 z-40">
                    <div className="fixed right-0 top-0 w-64 h-full bg-emerald-600 p-6 overflow-y-auto z-50 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-white text-xl font-bold">Menu</h2>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-400 hover:text-white focus:outline-none"
                                aria-label="Close menu"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="space-y-4">
                            <button className="font-semibold text-white flex items-center space-x-2 px-3 py-2 rounded transition bg-green-700 hover:bg-green-800 : bg-transparent hover:bg-green-600">
                                <Link to="/">Home</Link>
                            </button>
                            <button className="font-semibold text-white flex items-center space-x-2 px-3 py-2 rounded transition bg-green-700 hover:bg-green-800 : bg-transparent hover:bg-green-600">
                                <Link to="/Menu">Menu</Link>
                            </button>
                            <button className="font-semibold text-white flex items-center space-x-2 px-3 py-2 rounded transition bg-green-700 hover:bg-green-800 : bg-transparent hover:bg-green-600">
                                <Link to="/Hiring">Work with us</Link>
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navigation;
