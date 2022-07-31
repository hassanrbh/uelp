import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation, useQuery } from "react-query";
import UserService from "../../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import IpTracker from "../../api/ip_info.js";
import IPData from "ipdata";

const Search = () => {
  const [fetchedBusinesses, setIsFetchedBusinesses] = useState([]);
  const [modalOpener, setModalOpener] = useState(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const navigate = useNavigate();
  const ref = useRef();

  useOnClickOutside(ref, () => setModalOpener((prev) => !prev));

  function handleChange(e) {
    setInput(e.currentTarget.value);
    mutate(e.currentTarget.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    return navigate("/search", {
      state: {
        fetchedBusinesses,
        location: input2,
      },
    });
  }

  function handleChangeInput2(e) {
    setInput2(e.currentTarget.value);
  }

  const { mutate, isLoading, isSuccess } = useMutation(
    UserService.getFilteredBusinessesby,
    {
      onSuccess: function (data) {
        setIsFetchedBusinesses(data);
        setModalOpener(true);
      },
    }
  );

  const { data } = useQuery(
    ["address_for_"],
    () => IpTracker.getPositionStack("larache magribe jadid 410"),
    {
      onSuccess: function (data) {
        setInput2(data.data[0].label);
      },
    }
  );

  return (
    <div className="">
      <Formik
        initialValues={{ search_input: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form
              className="flex items-center sm:hidden smm:hidden 2xl:flex xl:flex lg:flex "
              autoComplete="off"
              onSubmit={handleSearch}
            >
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="flex">
                  <Field
                    type="text"
                    id="voice-search"
                    name="search_input"
                    onChange={handleChange}
                    className="rounded shadow-lg relative left-[-13px] pt-[13px] pb-[13px] pl-[16px] outline-none  text-sm !bg-white text-[#2d2e2f] block w-[424px] p-2.5  pr-[20px] font-light border-l-red-600 border-l-[14px] border-r-0"
                    placeholder="tacos, cheap dinner, Max's"
                    value={input}
                  />
                  <Field
                    type="text"
                    id="voice-search"
                    name="search_input"
                    onChange={handleChangeInput2}
                    className="rounded shadow-lg pt-[13px] pb-[13px] pl-[16px]  outline-none  text-sm !bg-white text-[#2d2e2f] block w-[424px] p-2.5  pr-[20px] font-light border-l-0"
                    placeholder="address neighborhood, city, state or zip"
                    value={input2}
                  />
                </div>
                <button
                  type="button"
                  className="flex absolute inset-y-0 right-0 items-center pr-3"
                >
                  <ErrorMessage
                    name="search_input"
                    component="div"
                    className="text-xs font-bold text-red-400 m-[10px]"
                  />
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {!isSubmitting ? (
                <button
                  type="submit"
                  className="inline-flex items-center pt-[11px] pb-[12px] relative left-[-1px] px-[17px] text-sm text-white border bg-red-600 !rounded-b-[1px] !rounded-t-[6px] !rounded-l-[1px] !rounded-r-[6px]"
                  disabled={isSubmitting}
                >
                  <svg
                    className="w-[24px] h-[24px] "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold lg:hidden"
                  disabled
                >
                  <svg
                    className="animate-spin"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.293-3.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H12c-.34 0-.872.11-1.29.412-.368.264-.71.714-.71 1.588 0 .874.342 1.324.71 1.588.418.302.95.412 1.29.412.368 0 .945-.128 1.37-.473a1 1 0 0 1 1.26 1.554c-.87.705-1.93.919-2.63.919a4.35 4.35 0 0 1-2.46-.788C8.659 15.576 8 14.526 8 13c0-1.526.658-2.576 1.54-3.212A4.35 4.35 0 0 1 12 9h.586l-.293-.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hello
                </button>
              )}
            </Form>
          </>
        )}
      </Formik>
      {modalOpener ? (
        <ul
          ref={ref}
          className={`border w-[21.41%] p-[7px] bg-white ${
            input.length === 0 ||
            fetchedBusinesses?.all_businesses?.length === 0
              ? "hidden"
              : null
          } rounded absolute z-50`}
          onBlur={() => setModalOpener(false)}
        >
          {isLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-spin	"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
          ) : null}
          {isSuccess && fetchedBusinesses?.all_businesses?.length >= 1
            ? fetchedBusinesses.all_businesses.map((business, _) => (
                <Link
                  to={`/biz/${business.profile.private_details.name}`}
                  key={_}
                  onClick={() => setInput("")}
                  className="flex m-1 hover:bg-gray-100 rounded mt-[10px] mb-[10px]"
                >
                  <Tippy
                    content={
                      <img
                        src={business.profile.images.thumbnail}
                        alt={business.profile.private_details.name}
                        className="rounded"
                      />
                    }
                    interactive={true}
                    animation="scale"
                    arrow={false}
                    placement="bottom"
                  >
                    <img
                      src={business.profile.images.thumbnail}
                      alt={business.profile.private_details.name}
                      width={57}
                      height={60}
                      className="rounded"
                    />
                  </Tippy>
                  <li className="m-1 relative left-2 font-medium cursor-pointer">
                    {business.profile.private_details.name}
                  </li>
                </Link>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
