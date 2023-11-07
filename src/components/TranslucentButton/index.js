import React from 'react'

const inactiveCSS = 'items-center justify-center flex sm:mx-[30px] mx-[4vw] sm:h-[70px] sm:w-[70px] h-[15vw] w-[15vw] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'
const activeCSS = 'items-center justify-center flex sm:mx-[30px] mx-[4vw] sm:h-[70px] sm:w-[70px] h-[15vw] w-[15vw] bg-[#D1D5DB] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'

function TranslucentButton({ title, active }) {
  return (
    <div className={active? activeCSS : inactiveCSS}>{title}</div>
  )
}

export default TranslucentButton