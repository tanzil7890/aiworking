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
                <div class="text-center">
                    <a href="index.html#"
                        class="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                        <Image 
    src="/images/icon-title.svg" 
    alt="icon" 
    width={500} // Some arbitrary value or the SVG's native width
    height={300} // Some arbitrary value or the SVG's native height
    unoptimized={true} 
    className="w-auto h-auto" // This will make the image responsive
/>
                        <span class="hero-subtitle-text">
                            Join Waitlist of our new MVP product for E-commerce companies!📣
                        </span>
                    </a>
                    <h1 class="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
                        Elevate Your Content with Our AI-Powered Writing Tool
                    </h1>
                    <p class="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
                        Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product
                        Sites. Comes
                        with everything you need - pages, features, sections, components and more that you can easily
                        customize.
                    </p>
                    <a href="index.html#"
                        class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
                        Start Your Free Trial
                    </a>
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
            <Features />
                
            </main>

            {/* Optional: include your footer component here, e.g., <Footer /> */}
        </div>
    );
}
