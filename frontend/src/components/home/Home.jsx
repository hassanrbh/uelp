import React from "react";
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });

  return (
    <div className="swiper h-[800px]">
      <div className="swiper-wrapper mr-[10px]">
        <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2021/11/24151024/Rawson_Facade2_2000x1500.jpg')]"></div>
        <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80')]"></div>
        <div className="swiper-slide flex justify-center items-center font-extrabold rounded-[8px] bg-no-repeat bg-center	 bg-cover bg-[url('https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg')]"></div>
      </div>

      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Home;
