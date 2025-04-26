import React from "react";

const DotsLoader = ({ bgColor = "white" }) => {
  const loaderClasses = `w-[5px] h-[5px] rounded-full animate-bounce`;
  return (
    <div className="flex items-center justify-center gap-2 h-10">
      <span
        style={{ backgroundColor: bgColor }}
        className={`${loaderClasses}  [animation-delay:0s]`}
      ></span>
      <span
        style={{ backgroundColor: bgColor }}
        className={`${loaderClasses} [animation-delay:0.2s]`}
      ></span>
      <span
        style={{ backgroundColor: bgColor }}
        className={`${loaderClasses} [animation-delay:0.4s]`}
      ></span>
    </div>
  );
};

export default DotsLoader;
