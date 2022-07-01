import React from "react";

const Button = ({svgElement, element, css}) => {
  return (
    <button
      type="button"
      className={css}
        >
          {svgElement}
          <span className="font-medium subpixel-antialiased">{element}</span>
    </button>
  );
};

export default Button;
