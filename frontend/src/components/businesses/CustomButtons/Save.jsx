import React, { useState } from "react";
import { SaveIcon } from "@heroicons/react/outline";
import Modal from "../../reusableComponents/Modal";
import SaveContent from "../Save/SaveContent";

const Save = () => {
  const [switcher, setSwitcher] = useState(false);

  return (
    <div className="block">
      <button
        onClick={() => setSwitcher((prev) => !prev)}
        className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
      >
        <SaveIcon className="h-6 w-6 mr-[6px]" />
        <p className="font-medium">Save</p>
      </button>
      {switcher ? (
        <Modal
          setSwitcher={setSwitcher}
          component={<SaveContent />}
          component_name={
            <span className="font-bold text-lg">Save to Collection</span>
          }
        />
      ) : null}
    </div>
  );
};

export default Save;
