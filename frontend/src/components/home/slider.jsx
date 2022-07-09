import React from 'react'
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper'
import {Link} from "react-router-dom";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Tippy from "@tippyjs/react";
import AddressInfo from './AddressInfo';

SwiperCore.use([ Autoplay ]);

const Slider = ({business, idx}) => {
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
      disabledClass: "hidden",
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    grabCursor: true,
  });
  return (
    <div className="flex flex-col group" key={idx}>
      <Link to={`/biz/${business.profile.private_details.name}`}>
        <div className="swiper h-[250px] w-[300px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[17px] bg-no-repeat bg-center	bg-cover" style={{backgroundImage: `url(${business.profile.images.thumbnail})`}}></div>
              <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[17px] bg-no-repeat bg-center	bg-cover bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80')]" ></div>
              <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[17px] bg-no-repeat bg-center	bg-cover bg-[url('https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg')]" ></div>
            </div>

            <div className="swiper-pagination"></div>
            
            <button type="button" className="swiper-button-prev_custom group">
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/20 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  transition-all ease-in-out">
                  <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-400  transition-all ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
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
      </Link>
      <div className="mt-2">
        <div className="flex justify-between">
          <p className="font-medium text-[16px]">{business.profile.private_details.name}</p>
          <div className="flex">
            <p className="font-bold text-rose-400 hover:text-green-400 cursor-pointer text-sm mr-[2px]">{business.profile.price_info.average}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/contacts/${business.profile.private_details.phone_number}`}>
            <span className="text-gray-600 text-sm font-medium">{business.profile.private_details.phone_number}</span>
          </Link>
          <div className="flex cursor-pointer">
            <span className="font-bold text-xs mr-[2px]">{business.profile.additional_info.hours_of_opening}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-[5px] ">
          <Tippy content={<AddressInfo business_details={business.profile.business_details}/>} interactive={true} animation="scale">
            <p className="font-medium text-sm text-gray-600 cursor-pointer">{business.profile.coords_details.full_address}</p>
          </Tippy>
          <p className="font-semibold text-sm">{business.profile.categories.category}</p>
        </div>
      </div>
    </div>
  )
}

export default Slider



