import React from 'react'
import SingleCartItemBtn from './SingleCartItemBtn'

const SingleCartItem = ({item, handleItemCounter}) => {
  return (
    <li
      key={item.documentId}
      className='flex justify-center items-center gap-4'
    >
      <img src={item.imgUrl} alt={item.title} className='w-20' />
      <h3 className='min-w-[50px]'>{item.title}</h3>
      <p>Price: {item.price}</p>
      <span>Remaining: {item.remaining-item.quantity}</span>
      <div className='flex gap-2 justify-center items-center'>
        <SingleCartItemBtn
          id={item.documentId}
          text={'-'}
          handleItemCounter={handleItemCounter}
          disabled={item.quantity === 0}
        />
        <p>{item.quantity}</p>
        <SingleCartItemBtn
          id={item.documentId}
          text={'+'}
          handleItemCounter={handleItemCounter}
          disabled={item.remaining === 0}
        />
      </div>
    </li>
  )
}

export default SingleCartItem
