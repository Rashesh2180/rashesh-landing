import React from 'react'

const Button = ({text,textcolor,bgcolor}) => {
  return (
    <button className={`uppercase font-raleway xl:px-5 lg:px-4 sm:px-3 px-3 py-3 xl:text-sm sm:text-xs text-[10px] ${textcolor} font-bold ${bgcolor} rounded-[10px]`}>
        {text}
      
    </button>
  )
}

export default Button
