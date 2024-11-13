import { useState } from "react";

const FAQItem = (props) => {
  const { question, answer,page} = props;
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleShow = (e) => {
    e.stopPropagation();
    setShowAnswer(prev => !prev)
  }

  return (
    <article className={`relative flex flex-col justify-between w-full ${page=="home"?"border-b-2 border-white":"border-b border-gray-600"}`}>
      <div className={`flex items-center justify-between h-auto ${page=="home"?"px-1 sm:px-2 py-3 sm:py-4":"py-2 md:py-3"}  cursor-pointer`} onClick={toggleShow}>
        <h3 className={`w-fit  sm:text-lg ${page=="home"&&"font-semibold md:text-xl"} first-letter:capitalize  text-start`}>{question}</h3>
        <button onClick={toggleShow} className="flex items-center justify-center p-1 hover:text-blue-500 ">
          <span className={`fa-solid fa-angle-down ${showAnswer ? "rotate-180 text-blue-500" : "rotate-0"} duration-300 transition-all font-bold`} />
        </button>
      </div>
      {showAnswer && <div className="px-2 pb-3 transition-all duration-500 ">
        <p className="text-xs sm:text-sm md:text-base first-letter:capitalize">{answer}</p>
      </div>}
    </article>
  )
}

export default FAQItem