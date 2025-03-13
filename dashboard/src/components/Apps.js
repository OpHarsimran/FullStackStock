import React from "react";

const Apps = () => {
  return( 
    <section id="section2" className="max-w-screen-xl mx-auto px-4 pb-8 relative sm:pb-16">
    <h2
      className="text-3xl sm:text-[40px] w-max mx-auto text-center bg-[#fcfaf8] relative z-10 text-[#1788ae] border-b-2 border-[#1788ae] sm:border-b-2"
    >
      Latest Works
    </h2>
    <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1.5px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute bg-[#F2F2F2] left-1/2 -translate-x-1/2 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
      <a href="https://wanderlust-idj7.onrender.com" target="_blank" className="flex w-full relative justify-center sm:justify-start">
      <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
          <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fe424d] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 text-white">Airbnb<i className="px-1 text-white fa-solid fa-right-to-bracket"></i></span>
          <img
          className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src="./images/Group 1.png"
          alt=""
          />

        </div>
    </a>
      <div className="w-full">
        <h3 className="text-[#fe424d] font-bold text-2xl md:text-4xl">Airbnb</h3>
        <span className="text-[#fe424d] text-base md:text-lg">(Hotel Listing)</span>
        <p className="text-justify text-sm md:text-base mt-2">
          Airbnb is a global online platform that connects people looking to rent out their properties (hosts) with people seeking accommodations (guests).
        </p>

        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #react.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #express.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #node.js
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #bootstrap
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #mongoDB
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #mongoose
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #css
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #javascript
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #authentication
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #authorization
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
      <div className="order-2 sm:order-1  w-full">
        <h3 className="text-[#536294] font-bold text-2xl md:text-4xl">The Planets</h3>
        <span className="text-[#536294] text-base md:text-lg">(3D Rotation)</span>
        <p className="text-justify text-sm md:text-base mt-2">
          Developed an interactive 3D planetary system using Three.js and GSAP, featuring seamless orbital animations and texture-mapped celestial bodies.Implemented smooth scroll-based navigation with throttled event handling to control planet rotations and content transitions in a responsive interface.
        </p>

        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #3D
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #Three.js
          </li>          
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #css
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #javascript
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #figma
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #tailwind
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #Vite
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #gsap
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #html
          </li>
        </ul>
      </div>
      <div className="h-[1.5px] absolute left-1/2 right-1/4 hidden sm:block bg-[#1788ae]"></div>
      <div className="w-4 h-4 rounded-full border-[3px] border-[#FFE678] absolute bg-[#F2F2F2] left-1/2 -translate-x-1/2 z-10 hover:scale-110 ease-in-out duration-200 hidden sm:block"></div>
      <a href="https://thefourplanets.netlify.app/" target="_blank" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
        <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-white bg-[#536294] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">The Planets<i className="px-1 fa-solid fa-right-to-bracket"></i></span>
        <img
        className="max-w-[400px] relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
        src="./images/Planets.png"
        alt=""
      />
        </div>
      </a>
    </div>
    <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>


    <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1.5px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute bg-[#F2F2F2] left-1/2 -translate-x-1/2 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
      <a href="https://spotifyharsimran.netlify.app/" target="_blank" className="flex w-full relative justify-center sm:justify-start">
      <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
          <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#1d506b] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 text-white">Spotify<i className="px-1 text-white fa-solid fa-right-to-bracket"></i></span>
          <img
          className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src="./images/spotifyImg.png"
          alt=""
          />
        </div>
    </a>
      <div className="w-full">
        <h3 className="text-[#1d506b] font-bold text-2xl md:text-4xl">Spotify</h3>
        <span className="text-[#1d506b] text-base md:text-lg">(Listen Music)</span>
        <p className="text-justify text-sm md:text-base mt-2">
          Being a full-stack developer, cloned a index page of spotify and showcasing the command on front-end development.
        </p>

        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #html
          </li>
          

          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #swiper.js
          </li>
          
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #bootstrap
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #css
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #javascript
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #figma
          </li>
        </ul>
      </div>      
    </div> 
    <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
      <div className="order-2 sm:order-1  w-full">
        <h3 className="text-[#1976d2] font-bold text-2xl md:text-4xl">WeatherWise</h3>
        <span className="text-[#1976d2] text-base md:text-lg">(OpenWeather Api)</span>
        <p className="text-justify text-sm md:text-base mt-2">
          WeatherWise is a modern, user-friendly weather app that provides real-time weather updates powered by the OpenWeather API. Whether you're planning your day, heading out on a trip, or just curious about the current conditions, this app delivers accurate and detailed weather information at your fingertips.


        </p>

        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #html
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #material UI
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #api
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #material icons
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #asyncronous js
          </li>
          
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #css
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #javascript
          </li>
          <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #figma
          </li>
        </ul>
      </div>
      <div className="h-[1.5px] absolute left-1/2 right-1/4 hidden sm:block bg-[#1788ae]"></div>
      <div className="w-4 h-4 rounded-full border-[3px] border-[#FFE678] absolute bg-[#F2F2F2] left-1/2 -translate-x-1/2 z-10 hover:scale-110 ease-in-out duration-200 hidden sm:block"></div>
      <a href="https://weather-app-harsimran.netlify.app/" target="_blank" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
        <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-[#F2F2F2] bg-[#1976d2] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">WeatherWise<i className="px-1 fa-solid fa-right-to-bracket"></i></span>
        <img
        className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
        src="images/weatherIcon.png"
        alt=""
      />
        </div>
      </a>
    </div>
    
    <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
  </section>
  );
};

export default Apps;
