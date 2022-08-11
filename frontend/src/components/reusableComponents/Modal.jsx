import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { XIcon } from '@heroicons/react/outline';

const Modal = ({ setSwitcher, component, component_name }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setSwitcher((prev) => !prev));

  return (
    <div
      className="relative z-[1000]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#000c] bg-opacity-75 transition-opacity "></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 z-[1000]">
          <div
            className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
            ref={ref}
          >
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse m-3 justify-between">
              <XIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setSwitcher((prev) => !prev)}
              />
              {component_name && component_name}
            </div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
