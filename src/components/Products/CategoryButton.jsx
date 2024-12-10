import React from 'react'

const CategoryButton = ({ active, title, handleClick }) => {
  return (
    <button
      className={`${
        active ? 'bg-black text-white' : 'border border-black border-2 text-black'
      } font-bold hover:bg-black hover:text-white transition-all py-1 w-[100px] rounded`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CategoryButton
