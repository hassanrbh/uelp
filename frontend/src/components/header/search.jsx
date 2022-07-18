import React, { useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "react-query";
import UserService from "../../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";

const Search = () => {
  const [fetchedBusinesses, setIsFetchedBusinesses] = useState([]);
  const [modalOpener, setModalOpener] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  function handleChange(e) {
    setInput(e.currentTarget.value)
    mutate(e.currentTarget.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    return navigate("/search", {
      state: fetchedBusinesses
    })
  }

  const { mutate, isLoading, isSuccess } = useMutation(
    UserService.getFilteredBusinessesby,
    {
      onSuccess: function (data) {
        setIsFetchedBusinesses(data);
        setModalOpener(true)
      },
    }
  );

  return (
    <div className="">
      <Formik
        initialValues={{ search_input: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="flex items-center sm:hidden smm:hidden 2xl:flex xl:flex lg:flex " autoComplete="off" onSubmit={handleSearch}>
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <Field
                  type="text"
                  id="voice-search"
                  name="search_input"
                  onChange={handleChange}
                  className="border border-gray-300 text-sm bg-[aliceblue] text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-[600px] font-bold "
                  placeholder="Tacos, Cheap Dinner .."
                  value={input}
                />
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
                  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold lg:hidden"
                  disabled={isSubmitting}
                >
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
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
                  Search
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
                </button>
              )}
            </Form>
          </>
        )}
      </Formik>
      {modalOpener ? (
        <ul className="border bg-slate-100 rounded-lg pt-1 mt-1 absolute z-50 w-[400px]" onBlur={() => setModalOpener(false)} >
          {isLoading ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-spin	" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          ) : null}
          {isSuccess && fetchedBusinesses?.all_businesses?.length >= 1
            ? fetchedBusinesses.all_businesses.map((business,_) => (
              <Link to={`/biz/${business.profile.private_details.name}`} key={_} className="flex m-1 hover:bg-white rounded">
                <Tippy content={<img src={business.profile.images.thumbnail} alt={business.profile.private_details.name} className="rounded"/>} interactive={true} animation="scale" arrow={false} placement="bottom">
                  <img src={business.profile.images.thumbnail} alt={business.profile.private_details.name} width={50} height={50} className="rounded"/>
                </Tippy>
                <li className="m-1 font-bold cursor-pointer" >{business.profile.private_details.name}</li>
              </Link>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
