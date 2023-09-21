import React from "react";
import arrowUp from "./assets/arrow-up.png";

interface Props {
  bottom?: number;
  right?: number;
}

export const ButtonScrollTop = ({ bottom, right }: Props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`absolute bottom-[${bottom}px] right-[${right}px] w-10 cursor-pointer`}
      onClick={handleScrollToTop}
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-default shadow-gray-100">
        <img src={arrowUp} alt="" className="w-full h-full" />
      </div>
      <div className="uppercase mt-[7px] text-dark font-medium text-[10px] leading-[18px] !tracking-[8%]">
        {/* Scroll to top */}
      </div>
    </div>
  );
};
