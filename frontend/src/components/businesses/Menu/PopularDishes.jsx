import React, { useEffect, useState, useId } from "react";
import client from "../../../services/react-query";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useQuery } from "react-query";
import menuService from "../../../services/menu.service";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, Navigation, Pagination } from "swiper";
import Modal from "../../reusableComponents/Modal";
import PopularDishesSkeleton from "./popularDishesSkeleton";
import MenuImages from "./MenuImages";

const PopularDishes = () => {
  const [switcher, setSwitcher] = useState(false);

  const url = client.getQueryData(["unit-business"]).profile?.additional_info
    ?.web_address;
  const name = client.getQueryData(["unit-business"]).profile?.private_details
    ?.name;
  const { data, isSuccess, isError, isLoading, error } = useQuery(
    ["menus_for", name],
    () => menuService.getAllMenus(name)
  );
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // autoplay: {
      //   delay: 100,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next_custom",
        prevEl: ".swiper-button-prev_custom",
        disabledClass: "hidden",
      },
      spaceBetween: 24,
      slidesPerView: 4,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }, [data]);

  if (isLoading) return <PopularDishesSkeleton cards={4} />;

  if (isError) return <div>{error} 🧨</div>;

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1 className="font-bold">PopularDishes</h1>
        <div className="flex">
          <a href={url} className="hover:underline font-bold mr-1">
            View full menu
          </a>
          <ChevronRightIcon
            width={15}
            height={15}
            className="font-bold cursor-pointer mt-[6px] mr-1"
          />
        </div>
      </div>
      <div>
        <div className="swiper h-[150px] w-[850px] mt-5 relative left-1">
          <div className="swiper-wrapper">
            {isSuccess
              ? data?.menus?.map((item, key) => (
                  <MenuImages
                    item={item}
                    setSwitcher={setSwitcher}
                    switcher={switcher}
                    mykey={key}
                    key={key}
                  />
                
                ))
              : null}
          </div>
          {switcher ? <Modal setSwitcher={setSwitcher} /> : null}
          <button type="button" className="swiper-button-prev_custom group">
            <span className="inline-flex text-black justify-center items-center w-7 h-7 rounded-full sm:w-[2rem] sm:h-[2rem] bg-white/20 dark:bg-[beige] group-hover:bg-white/50 dark:group-hover:bg-[beige] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  transition-all ease-in-out">
              <svg
                className="w-4 h-4 text-white sm:w-6 sm:h-6 dark:text-gray-400  transition-all ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>

          <button type="button" className="swiper-button-next_custom group">
            <span className="inline-flex text-black justify-center items-center w-7 h-7 rounded-full sm:w-[2rem] sm:h-[2rem] bg-white/30 dark:bg-[beige] group-hover:bg-white/50 dark:group-hover:bg-[beige] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all ease-in-out">
              <svg
                className="w-4 h-4 text-white sm:w-6 sm:h-6 dark:text-gray-800  transition-all ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
