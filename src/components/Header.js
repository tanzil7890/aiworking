'use-client'
import React from 'react';
import Image from 'next/image';

const Header = () => {
    const page = "home";
    

    return (
        <header className="fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 backdrop-blur-md ">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 flex items-center justify-center relative">
                {/* Removed lg:flex and lg:w-1/4 from this div, and added justify-center */}
                <div className="flex items-center justify-center pt-5 pb-2">
                    <a href="/">
                        {/* <Image src="/images/logo.svg" alt="Logo" width={100} height={50} /> */}
                        <h1 className="text-xl text-black font-bold">markov.ai</h1>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
