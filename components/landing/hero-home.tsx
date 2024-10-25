import { useEffect, useState } from "react";
import PreviewLink from "../misc/preview-link";

const HeroHome = () => {
  const [iframeHidden, setIframeHidden] = useState(true);  

    // hides iframe to prevent focus jank (jumping to iframe on click) 
    useEffect(() => {
      let lastScrollPosition = window.scrollY;
      const scrollHandler = () => {
        if (Math.abs(lastScrollPosition - window.scrollY) > 500) {
          lastScrollPosition = window.scrollY;
          setIframeHidden(true);
        }
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, []);  

  return(
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4" data-aos="zoom-y-out">Retain talent with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">internal mobility</span> coaching</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Help your people exceed their potential, so they can unlock yours
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-4" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://exec.coach">Free Trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://exec.coach">Let's Chat</a>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>

  )
}

export default HeroHome;
