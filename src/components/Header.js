import React from 'react';
import Image from 'next/image';

const Header = () => {
    const page = "home";

    return (
        <header className="fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 backdrop-blur-md">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
                <div className="w-full lg:w-1/4 flex items-center justify-between">
                    <a href="/">
                        <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
                    </a>
                    
                </div>

                <div id="navMenu" className="w-full lg:w-3/4  lg:h-auto lg:flex items-center justify-between">
                    <nav>
                        <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
                            <li className="nav__menu lg:py-7">
                                <a href="/#home" className={`custom-link ${page === 'home' ? 'active' : ''}`}>Home</a>
                            </li>
                            <li className="nav__menu lg:py-7">
                                <a href="/#features" className="custom-link">Features</a>
                            </li>
                            <li className="nav__menu lg:py-7">
                                <a href="/#pricing" className="custom-link">Pricing</a>
                            </li>
                            <li className="nav__menu lg:py-7">
                                <a href="/#support" className="custom-link">Support</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-6 mt-7 lg:mt-0">
                        <a href="/signin" className="text-white text-sm hover:text-opacity-75">Sign in</a>
                        <a href="/signup" className="text-white text-sm hover:text-opacity-75">Sign up</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
