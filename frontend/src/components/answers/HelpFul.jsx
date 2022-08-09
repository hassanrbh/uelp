import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { useParams, Link } from 'react-router-dom';
import { FlagIcon } from '@heroicons/react/outline';
import AnswerContent from './AnswerContent';
import Modal from '../reusableComponents/Modal';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const HelpFul = ({ answer }) => {
  const [switcher, setSwitcher] = useState(false);

  return (
    <div className="mt-2 flex justify-between">
      <div></div>
      <Tippy
        animation="scale"
        content={<span className="font-bold">Report answer</span>}
        interactive={true}
      >
        <button
          onClick={() => setSwitcher((prev) => !prev)}
          className=" border relative top-[3px] border-[#c8c9ca] p-[7px] 
          rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-[36px]"
        >
          <FlagIcon className="h-[16px] w-[16px] relative top-[2px]  text-gray-500" />
        </button>
      </Tippy>
      {switcher ? (
        <Modal
          setSwitcher={setSwitcher}
          component={<AnswerContent answer={answer} />}
          component_name={
            <span className="font-bold text-2xl">Report Answer</span>
          }
        />
      ) : null}
    </div>
  );
};

export default HelpFul;
