import React from 'react'

const SingleCartItemBtn = ({id, text, handleItemCounter, disabled}) => {
  return (
    <button
      type='button'
      className={`bg-${disabled ? 'red-500' : 'black'} text-white text-lg font-bold w-[30px] h-[30px]`}
      id={id}
      onClick={handleItemCounter}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default SingleCartItemBtn
