import React from "react";

const Button = ({content, bg_color, txt_color, handleClick}) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center border rounded-lg shadow-sm text-center font-medium px-2 active:bg-none ${bg_color} ${txt_color}`}
      onClick={handleClick}
    >
      {content}
    </div>
  );
};

export default Button;
