import React from 'react'

const SingleCartItemBtn = ({id, text, handleItemCounter}) => {
  return (
    <button
      type='button'
      className='bg-black text-white text-lg font-bold w-[30px] h-[30px]'
      id={id}
      onClick={handleItemCounter}
    >
      {text}
    </button>
  )
}

export default SingleCartItemBtn
