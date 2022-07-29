import React, {useState} from "react";
import client from "../../../services/react-query";
import Modal from "../../reusableComponents/Modal";
import ModalContent from "./ModalContent";
import {useParams} from "react-router-dom"

const AboutBusiness = () => {
  const { business_name } = useParams();
  const owner = client.getQueryData(["unit-business",business_name]).profile?.owner;
  const description = client.getQueryData(["unit-business",business_name]).profile?.private_details?.description;

  const [switcher, setSwitcher] = useState(false);

  return (
    <div className="mt-2">
      <h1 className="font-bold mb-6 text-[1.25rem]">About the Business</h1>
      <div className="flex mb-2">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white bottom-[3px] relative"
          src={owner?.avatar}
          alt=""
        />
        <div className="ml-2 block relative bottom-[4px]">
          <p className="font-bold text-base">{owner?.owner?.slice(0,-4)}.</p>
          <p className=" font-normal text-sm text-gray-600">Business Owner</p>
        </div>
      </div>
      <div className="mb-3">
        <p>{description && description}</p>
      </div>
      <div>
        <button onClick={() => setSwitcher((prev) => !prev)}
          className="border font-medium border-[#c8c9ca] hover:bg-gray-200 ease-in-out duration-700 px-[16px] py-[7px] rounded text-black">
          Read more
        </button>
        {switcher ? <Modal setSwitcher={setSwitcher} component_name={<span className="font-bold text-2xl">From the Business</span>} component={<ModalContent setSwitcher={setSwitcher}/>} /> : null}
      </div>
    </div>
  );
};

export default AboutBusiness;
