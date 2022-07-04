import React from 'react'
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper'
import LatestHotBusinesses from "./latestHotBusinesses"
SwiperCore.use([ Autoplay ]);

const Slider = ({business}) => {
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // autoplay: {
    //   delay: 100,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.swiper-button-next_custom',
      prevEl: '.swiper-button-prev_custom',
      disabledClass: "invisible",
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    grabCursor: true,
  });

  return (
    <div className="flex flex-col">
      <div className="swiper h-[250px] w-[300px]">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://www.freshbooks.com/blog/wp-content/uploads/2017/04/royalty-free-images.jpg.optimal.jpg')]" data-swiper-parallax="-50%" ></div>
            <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80')]" data-swiper-parallax="-50%" ></div>
            <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg')]" data-swiper-parallax="-50%" ></div>
          </div>

          <div className="swiper-pagination"></div>
          
          <button type="button" className="swiper-button-prev_custom group">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  transition-all ease-in-out">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800  transition-all ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
          </button>

          <button type="button" className="swiper-button-next_custom group">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all ease-in-out">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800  transition-all ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
          </button>

          <div className="swiper-scrollbar"></div>
      </div>
      <div>
        {business.name}
      </div>
    </div>
  )

}

export default Slider