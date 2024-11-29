import React from 'react'
import SingleCartItemBtn from './SingleCartItemBtn'
import { removeCartItem } from '../../utils/cartLocalStorage'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/cart/cart'

const SingleCartItem = ({ item, handleItemCounter }) => {
  const dispatch = useDispatch()

  const removeItem = (documentId, variationKey) => {
    removeCartItem(documentId, variationKey)
    dispatch(removeFromCart({ documentId, variationKey }))
  }

  return (
    <li key={`${item.documentId}-${item.variationKey}`}>
      <ul>
        {Object.keys(item.variation).map((variationKey, index) => (
          <li
            key={variationKey + index}
            className='border p-4 rounded-lg flex flex-col lg:flex-row justify-between items-center gap-4 shadow-sm bg-white'
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              className='w-20 h-20 rounded-lg object-cover'
            />
            <div className='flex flex-col flex-grow text-center lg:text-left'>
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <p className='text-sm text-gray-600'>Variant: {variationKey}</p>
              <p className='text-sm font-medium'>
                Price: {item.inventory[variationKey].newPrice}
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <SingleCartItemBtn
                id={item.documentId + '-/-' + item.variationKey}
                text={'-'}
                handleItemCounter={() =>
                  handleItemCounter(item, variationKey, '-')
                }
                disabled={item.variation[variationKey].quantity <= 1}
              />
              <span className='font-medium'>
                {item.variation[variationKey].quantity}
              </span>
              <SingleCartItemBtn
                id={item.documentId + '-/-' + variationKey}
                text={'+'}
                handleItemCounter={() =>
                  handleItemCounter(item, variationKey, '+')
                }
                disabled={item.variation[variationKey].quantity >= 10}
              />
            </div>
            <button
              className='text-red-600 font-bold hover:text-red-800'
              onClick={() => removeItem(item.documentId, variationKey)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default SingleCartItem
