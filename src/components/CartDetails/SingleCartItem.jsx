import React from 'react'
import SingleCartItemBtn from './SingleCartItemBtn'
import { removeCartItem } from '../../utils/cartLocalStorage'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/cart/cart'

const SingleCartItem = ({ item, handleItemCounter }) => {
  const dispatch = useDispatch()

  const removeItem = id => {
    removeCartItem(id)
    dispatch(removeFromCart({ id, quantity: item.quantity }))
  }

  return (
    <li
      key={item.documentId}
      className='flex justify-center border items-center gap-4 p-3'
    >
      <button
        type='button'
        onClick={() => removeItem(item.documentId)}
        className='text-lg font-bold'
      >
        X
      </button>
      <img src={item.imgUrl} alt={item.title} className='w-20' />
      <h3 className='w-[100px]'>{item.title}</h3>
      <p className='w-[100px]'>Price: {item.price}</p>
      <div className='w-[100px]'>
        <div className='flex gap-2'>
          <SingleCartItemBtn
            id={item.documentId}
            text={'-'}
            handleItemCounter={handleItemCounter}
            disabled={item.quantity === 1}
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
