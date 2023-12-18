import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Features.js
const Features = () => {
    return (
        <section id="features" className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17">
            <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
                <div class="wow fadeInUp text-center">
                    <span
                        class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                        <Image
                            src="/images/icon-title.svg"
                            alt="icon"
                            width={40} // Replace with the intrinsic width of the SVG, if known
                            height={40} // Replace with the intrinsic height of the SVG, if known
                            unoptimized={true} // SVGs are generally optimized, so additional optimization isn't necessary
                            className="w-auto h-auto"
                        />
                        <span class="hero-subtitle-text"> Some of Main Features </span>
                    </span>
                    <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
                        Key Features of Our Tool
                    </h2>
                    <p class="max-w-[714px] mx-auto mb-5 font-medium">
                        Our AI writing tool is designed to empower you with exceptional
                        writing capabilities, making the writing process more efficient,
                        accurate, and enjoyable.
                    </p>
                </div>
                <div class="relative">
                    <div
                        class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block">
                    </div>
                    <div
                        class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block">
                    </div>

                    <div class="flex flex-wrap justify-center">

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div
                                class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                                <span
                                    class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                                <span
                                    class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                                    <Image 
                                        src="/images/icon-01.svg" 
                                        alt="icon" 
                                        width={40} // Replace with your desired width
                                        height={40} // Replace with your desired height
                                        unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
                                        className="w-auto h-auto"
                                    />
                                </span>
                                <h4 class="font-semibold text-lg text-white mb-4">
                                    Intelligent Writing Assistance
                                </h4>
                                <p class="font-medium">
                                    Our AI writing tool analyzes your content, suggests
                                    improvements,
                                </p>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div
                                class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                                <span
                                    class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                                <span
                                    class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                                    <Image 
                                        src="/images/icon-02.svg" 
                                        alt="icon" 
                                        width={40} // Replace with your desired width
                                        height={40} // Replace with your desired height
                                        unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
                                        className="w-auto h-auto"
                                    />
                                </span>
                                <h4 class="font-semibold text-lg text-white mb-4">
                                    Grammar and Spell Check
                                </h4>
                                <p class="font-medium">
                                    Say goodbye to embarrassing typos and grammar mistakes
                                </p>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div
                                class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                                <span
                                    class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                                <span
                                    class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                                    <Image 
                                        src="/images/icon-03.svg" 
                                        alt="icon" 
                                        width={40} // Replace with your desired width
                                        height={40} // Replace with your desired height
                                        unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
                                        className="w-auto h-auto"
                                    />
                                </span>
                                <h4 class="font-semibold text-lg text-white mb-4">
                                    Plagiarism Detection
                                </h4>
                                <p class="font-medium">
                                    Originality is key, and our AI writing tool helps you
                                    maintain it
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="features-row-border w-full h-[1px]"></div>

                    <div class="flex flex-wrap justify-center">

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div
                                class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                                <span
                                    class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                                <span
                                    class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                                    <Image 
                                        src="/images/icon-04.svg" 
                                        alt="icon" 
                                        width={40} // Replace with your desired width
                                        height={40} // Replace with your desired height
                                        unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
                                        className="w-auto h-auto"
                                    />
                                </span>
                                <h4 class="font-semibold text-lg text-white mb-4">
                                    Voice to Text Conversion
                                </h4>
                                <p class="font-medium">
                                    Transform your spoken words into written text easily &
                                    effortlessly
                                </p>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div
                                class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                                <span
                                    class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                                <span
                                    class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                                    <Image 
                                        src="/images/icon-05.svg" 
                                        alt="icon" 
                                        width={40} // Replace with your desired width
                                        height={40} // Replace with your desired height
                                        unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
                                        className="w-auto h-auto"
                                    />
                                </span>
                                <h4 class="font-semibold text-lg text-white mb-4">
                                    Style and Tone Adaptation
                                </h4>
                                <p class="font-medium">
                                    Whether you need a professional, or positive tone it has
                                    everyone
                                </p>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div
                                class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                                <span
                                    class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                                <span
                                    class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                                    <Image 
                                        src="/images/icon-06.svg" 
                                        alt="icon" 
                                        width={40} // Replace with your desired width
                                        height={40} // Replace with your desired height
                                        unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
                                        className="w-auto h-auto"
                                    />
                                </span>
                                <h4 class="font-semibold text-lg text-white mb-4">
                                    Content Generation
                                </h4>
                                <p class="font-medium">
                                    Need inspiration or assistance with generating content?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
