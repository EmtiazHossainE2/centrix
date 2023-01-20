import React from 'react'
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'

const Accordion = ({ children, question, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
    (activeIndex !== index) && setActiveIndex(index)
  };

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className={`flex justify-between items-center p-2 mt-2 rounded  cursor-pointer ${activeIndex === index ? 'bg-[#1a4064]' : 'bg-[#121228]'}`}>
        <div className='p-1'>
          <div className='text-white font-[600]'>{question}</div>
        </div>
        <div className="">
          {
            (activeIndex === index)
              ? <BsChevronDown className=' text-white font-bold' size={18} />
              : <BsChevronRight className=' text-white font-bold' size={18} />
          }
        </div>
      </div>

      {(activeIndex === index) && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 py-2 px-1 ">
          {children}
        </div>
      )}
    </>
  );
}

export default Accordion