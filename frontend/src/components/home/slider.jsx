import React, {useId} from 'react'
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper'
import LatestHotBusinesses from "./latestHotBusinesses"
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
              <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://www.freshbooks.com/blog/wp-content/uploads/2017/04/royalty-free-images.jpg.optimal.jpg')]" ></div>
              <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80')]" ></div>
              <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg')]" ></div>
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
        <div className="flex justify-between pl-1">
          <p className="font-bold">{business.profile.private_details.name}</p>
          <p className="font-bold text-red-700">{business.profile.price_info.average}</p>
        </div>
        <div className="flex justify-between">
          <Link to={`/contacts/${business.profile.private_details.phone_number}`}>
            <span className="text-blue-400 text-sm font-bold">{business.profile.private_details.phone_number}</span>
          </Link>
          <span className="font-medium text-sm">{business.profile.additional_info.hours_of_opening}Wh</span>
        </div>
        <div className="flex justify-between">
          <Tippy content={<AddressInfo business_details={business.profile.business_details}/>} interactive={true} animation="scale">
            <p className="font-semibold text-sm cursor-pointer">{business.profile.coords_details.full_address}</p>
          </Tippy>
          <p className="font-semibold text-sm text-blue-400">{business.profile.categories.category}</p>
        </div>
      </div>
    </div>
  )

}

export default Slider