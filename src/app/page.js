'use-client'

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Features from '../components/Features';
import Header from '../components/Header';
// Optional: import your custom components here, e.g., import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Your Page Title</title>
                <meta name="description" content="Description of your page" />
                {/* Add any other head elements here */}
            </Head>

            {/* Optional: include your header component here, e.g., <Header /> */}
            <Header />
            <main>
                <section id="home" className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45">
                    <div className="max-w-7xl mx-auto">
                        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
                            {/* ... other div elements ... */}

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
                                <Image 
                                    src="/images/blur-02.svg" 
                                    alt="blur" 
                                    width={500} 
                                    height={300} 
                                    unoptimized={true} 
                                    className="w-auto h-auto"
                                />
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
                                <Image 
                                    src="/images/blur-01.svg" 
                                    alt="blur" 
                                    width={500} 
                                    height={300} 
                                    unoptimized={true} 
                                    className="w-auto h-auto"
                                />
                            </div>
                        </div>
                    </div>



                    <div class="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
                <div
                class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
                <div class="stars"></div>
                <div class="stars2"></div>
            </div>
                <div class="text-center pt-10">
                    <a href="/"
                        class="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                        <Image 
                            src="/images/icon-title.svg" 
                            alt="icon" 
                            width={500} // Some arbitrary value or the SVG's native width
                            height={300} // Some arbitrary value or the SVG's native height
                            unoptimized={true} 
                            className="w-auto h-auto" // This will make the image responsive
                            
                        />
                        <span class=" text-slate-800">
                            <p className="">Join Waitlist of our product recommendation plugin!📣</p>
                        </span>
                    </a>
                    <h1 class="text-black mb-6 text-4xl font-extrabold sm:text-10xl xl:text-heading-1">
                    Revolutionizing E-Commerce with Cutting-Edge AI
                    </h1>
                    <p class="max-w-[800px] mx-auto mb-9 text-slate-800 font-medium md:text-lg">
                    Join us in shaping the future of online shopping experiences.<br></br> Empower your online store with our AI-driven chatbots and personalized shopping assistants.
                    </p>

                    <div class="flex justify-center items-center">
                        <form class="w-full max-w-[534px]">
                            <div class="flex items-center gap-4">
                                <div class="flex-grow">
                                    <input id="email" type="email" name="email" placeholder="Enter your Email"
                                        class="rounded-full border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none placeholder-zinc-800 text-zinc-800" />
                                </div>
                                <button
                                    type="submit"
                                    class="button-border-gradient relative rounded-full text-white text-sm flex items-center justify-center gap-1.5 py-3.5 px-7 shadow-button hover:button-gradient-hover hover:shadow-none">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                   

                    

                </div>
            </div>
            <div class="mt-17" data-wow-delay="0.1s">
            <Image 
              src="/images/hero.svg" 
              alt="hero" 
              width={500} // Replace with the actual width of your image
              height={300} // Replace with the actual height of your image
              unoptimized={true} // Since it's an SVG, additional optimization isn't necessary
              className="mx-auto"
          />
            </div>
                </section>

            {/* Features */}
            {/* <Features /> */}
                
            </main>

            {/* Optional: include your footer component here, e.g., <Footer /> */}
        </div>
    );
}
