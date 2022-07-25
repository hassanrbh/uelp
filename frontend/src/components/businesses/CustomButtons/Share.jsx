import React, { useState} from "react";
import { ShareIcon } from "@heroicons/react/outline";
import Modal from "../../reusableComponents/Modal";
import ShareContent from "../Share/ShareContent";

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
        <Modal
          setSwitcher={setSwitcher}
          component={<ShareContent />}
          component_name={<span className="font-bold text-xl">Share Business</span>}
        />
      ) : null}
    </div>
  );
};

export default Share;
