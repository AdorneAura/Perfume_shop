import React from 'react'
import SingleCartItemBtn from './SingleCartItemBtn'

const SingleCartItem = ({ item, handleItemCounter }) => {
  return (
    <li
      key={item.documentId}
      className='flex justify-center border items-center gap-4'
    >
      <img src={item.imgUrl} alt={item.title} className='w-20' />
      <h3 className='w-[100px]'>{item.title}</h3>
      <p className='w-[100px]'>Price: {item.price}</p>
      <div className='w-[100px]'>
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
            disabled={+item.remaining - item.quantity === 0}
          />
        </div>
        <span>Remaining: {item.remaining - item.quantity}</span>
      </div>
    </li>
  )
}

export default SingleCartItem
