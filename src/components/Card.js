import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Card = (props) => {
    let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute -top-[7rem] z-[2] mx-auto">
        <img className="aspect-square rounded-full w-[140px] h-[140px] z-[3]" src={review.image}></img>
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute -top-[6px] left-[10px] z-[-1]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
      </div>

      <div className="text-center ">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-400 text-center mx-auto mt-5">
        <FaQuoteLeft/>
      </div>

      <div className="text-center mt-4 text-slate-500">
        {review.text}
      </div>

      <div className="text-violet-400 text-center mx-auto mt-5">
        <FaQuoteRight/>
      </div>


    
    </div>
  )
}

export default Card
