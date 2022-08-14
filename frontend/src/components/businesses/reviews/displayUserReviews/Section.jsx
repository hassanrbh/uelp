import React, { useRef } from 'react';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';

const Section = ({
  isOpen,
  Items,
  activeMenuItem,
  SetActiveMenuItem,
  setIsOpen
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen((prev) => false));

  return (
    <>
      {isOpen ? (
        <>
          <div
            className="mt-1 bg-[#fff] p-[15px] rounded-md max-w-fit absolute z-[100] adding_shadow"
            ref={ref}
          >
            {Items.map((item, __idx__) => (
              <div
                key={__idx__}
                className={`font-[400px] hover:bg-gray-100 hover:rounded cursor-pointer p-[8px]
              text-sm ${
                activeMenuItem === item
                  ? 'bg-[aliceblue] rounded text-black font-medium hover:bg-blue-100'
                  : null
              }
              `}
                onClick={() => {
                  SetActiveMenuItem(item);
                  setIsOpen((prev) => !prev);
                }}
              >
                {activeMenuItem === item ? activeMenuItem : item}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Section;
