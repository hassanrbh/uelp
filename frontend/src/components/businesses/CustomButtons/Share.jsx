import React, {useState} from 'react'
import { ShareIcon } from "@heroicons/react/outline"
import { useMutation, useQuery } from 'react-query';

// todo: Adding Opening Modal LOGIC 
// todo: Adding closing modal LOGIC
// todo: set up in the api the api point that will access to save the biz

const Share = () => {

  const [openModal, setOpenModal] = useState(false);

  const openingModal = (e) => {
    e.preventDefault();
    console.log("HELLO WORLD!");
  }

  return (
    <button onClick={(e) => openingModal(e)} className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black">
      <ShareIcon className="h-6 w-6 mr-[6px]"/>
      <p className="font-medium">Share</p>
    </button>
  )
}

export default Share