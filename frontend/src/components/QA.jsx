import { useState } from "react";

function QA({  question, answer }) {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="p-5 my-4 w-[45%] mx-auto border rounded-md drop-shadow-2xl bg-white shadow-md">
      <button
        className="flex items-center justify-start w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[60px] ml-5 mr-9">{isOpen ? "-" : "+"}</span>
        <span className="text-[20px] font-[500] text-[#1B1139]">{question}</span>
      </button>
      {isOpen && <p className="mb-3 ml-[77px] text-[16px] text-[#363049] font-[400]">{answer}</p>}
    </div>
  );
};

export default QA;
