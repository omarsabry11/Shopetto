import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FeaturedCard({ icon, title, text }) {
  return (
    <div className="text-center  p-6 rounded-lg custom-box-shadow">
      <FontAwesomeIcon icon={icon} className="text-[3rem] text-[#1B1A41]" />
      <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
        {title}
      </h3>
      <p className="text-[#7E7E7E]">{text}</p>
    </div>
  );
}
