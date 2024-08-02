import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-4 rounded-[12px] border border-solid border-white cursor-pointer">
      <div
        className="flex items-center justify-between gap-2"
        onClick={toggleAccordion}
      >
        <h2 className="text-[14px] leading-6 lg:text-[18px] lg:leading-7 text-headingColor">
          {item.question}
        </h2>
        <div
          className={`${
            isOpen ? "bg-primaryColor text-white" : ""
          } w-6 h-6 lg:w-7 lg:h-7 border border-solid border-black rounded flex items-center justify-center flex-shrink-0`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-[12px] leading-5 lg:text-[14px] lg:leading-6 font-400 text-textColor">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
