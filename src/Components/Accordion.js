import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordion = ({ quest, ans }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="pb-3 border-b-2 mb-2">
        <div
          className="flex-center gap-4 text-2xl font-semibold cursor-pointer primary"
          onClick={() => setIsActive(!isActive)}
        >
          <div>{isActive ? <FiChevronUp /> : <FiChevronDown />}</div>
          <div>{quest}</div>
        </div>
        {isActive && (
          <div className="text-xl text-gray-600 ml-10 my-4">{ans}</div>
        )}
      </div>
    </>
  );
};

export default Accordion;
