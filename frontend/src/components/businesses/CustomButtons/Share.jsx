import React, { useState} from "react";
import { ShareIcon } from "@heroicons/react/outline";
import Modal from "../../reusableComponents/Modal";
import ShareContent from "../Share/ShareContent";
import { Transition } from '@headlessui/react'

const Share = () => {
  const [switcher, setSwitcher] = useState(false);

  return (
    <div className="block">
      <button
        onClick={() => setSwitcher((prev) => !prev)}
        className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
      >
        <ShareIcon className="h-6 w-6 mr-[6px]" />
        <p className="font-medium">Share</p>
      </button>
      {switcher ? (
        <Transition
        show={switcher}
        enter="transition-opacity duration-50"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
          <Modal
            setSwitcher={setSwitcher}
            component={<ShareContent />}
            component_name={<span className="font-bold text-xl">Share Business</span>}
          />
        </Transition>
      ) : null}
    </div>
  );
};

export default Share;
