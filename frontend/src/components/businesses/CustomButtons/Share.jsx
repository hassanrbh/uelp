import React, { useState } from "react";
import { ShareIcon } from "@heroicons/react/outline";
import Modal from "../../reusableComponents/Modal";
import ShareContent from "../Share/ShareContent"

// todo: Adding Opening Modal LOGIC
// todo: Adding closing modal LOGIC

const Share = () => {
  const [switcher, setSwitcher] = useState(false);

  return (
    <div className="block">
      <button
        onClick={() => setSwitcher((prev) => !prev)}
        className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black"
      >
        <ShareIcon className="h-6 w-6 mr-[6px]" />
        <p className="font-medium">Share</p>
      </button>
      {switcher ? <Modal setSwitcher={setSwitcher} component={<ShareContent />} /> : null}
    </div>
  );
};

export default Share;
