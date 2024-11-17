import QA from "./QA";
import { faqData } from "../constants";


function FAQ() {

  return (
    <div className="w-[92%] flex flex-wrap">
      {faqData.map((item, index) => (
        <QA key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ