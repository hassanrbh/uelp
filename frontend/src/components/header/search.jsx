import React, { useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useMutation, useQuery } from 'react-query';
import UserService from '../../services/auth.service';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';
import IpTracker from '../../api/ip_info.js';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Search = () => {
  const [fetchedBusinesses, setIsFetchedBusinesses] = useState([]);
  const [modalOpener, setModalOpener] = useState(false);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const navigate = useNavigate();
  const ref = useRef();

  useOnClickOutside(ref, () => setModalOpener((prev) => !prev));

  function handleChange(e) {
    setInput(e.currentTarget.value);
    mutate(e.currentTarget.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    return navigate('/search', {
      state: {
        fetchedBusinesses,
        location: input2
      }
    });
  }

  const [parent] = useAutoAnimate({
    duration: 250,
    easing: 'ease-in-out'
  });

  function handleChangeInput2(e) {
    setInput2(e.currentTarget.value);
  }

  const { mutate, isLoading, isSuccess } = useMutation(
    UserService.getFilteredBusinessesby,
    {
      onSuccess: function (data) {
        setIsFetchedBusinesses(data);
        setModalOpener(true);
      }
    }
  );

  const { data } = useQuery(
    ['address_for_'],
    () => IpTracker.getPositionStack('larache magribe jadid 410'),
    {
      onSuccess: function (data) {
        setInput2(data.data[0].label);
      }
    }
  );

  return (
    <div className="">
      <Formik
        initialValues={{ search_input: '' }}
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
                <div className="flex shadow-lg ">
                  <Field
                    type="text"
                    id="voice-search"
                    name="search_input"
                    onChange={handleChange}
                    className="rounded relative h-[48px] left-[-13px] pt-[13px] pb-[13px] pl-[16px] outline-none  text-sm !bg-white text-[#2d2e2f] block w-[466px] p-2.5  pr-[20px] font-light border-l-red-600 border-l-[14px] border-r-0 font-[800]"
                    placeholder="tacos, cheap dinner, Max's"
                    value={input}
                  />
                  <div className="bg-[#ebebeb] w-[2px] top-[9px] h-[25px] relative"></div>
                  <Field
                    type="text"
                    id="voice-search_hello"
                    name="search_input"
                    onChange={handleChangeInput2}
                    className="rounded pt-[13px] h-[48px] pb-[13px] pl-[16px]  outline-none  text-sm !bg-white text-[#2d2e2f] block w-[466px] p-2.5  pr-[20px] font-light border-l-0 font-[800]"
                    placeholder="address neighborhood, city, state or zip"
                    value={input2}
                  />
                </div>
              </div>
              {!isLoading || isSubmitting ? (
                <button
                  type="submit"
                  className="inline-flex shadow-lg h-[50px] items-center pt-[11px] pb-[12px] relative left-[-1px] px-[17px] text-sm text-white border bg-red-600 !rounded-b-[1px] !rounded-t-[6px] !rounded-l-[1px] !rounded-r-[6px]"
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
                  type="submit"
                  className="inline-flex h-[50px] items-center pt-[11px] pb-[12px] relative left-[-1px] px-[17px] text-sm text-white border bg-red-600 !rounded-b-[1px] !rounded-t-[6px] !rounded-l-[1px] !rounded-r-[6px]"
                  disabled={isSubmitting}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="animate-spin w-[24px] h-[24px] "
                    width="24px"
                    height="24px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              )}
            </Form>
          </>
        )}
      </Formik>
      {modalOpener ? (
        <ul
          ref={ref}
          className={`border w-[23.8%] p-[7px] bg-white ${
            input.length === 0 ||
            fetchedBusinesses?.all_businesses?.length === 0
              ? 'hidden'
              : null
          } rounded absolute z-50`}
        >
          {isLoading ? null : null}
          {isSuccess && fetchedBusinesses?.all_businesses?.length >= 1
            ? fetchedBusinesses.all_businesses.map((business, _) => (
                <Link
                  to={`/biz/${business.profile.private_details.name}`}
                  key={_}
                  onClick={() => setInput('')}
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
