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
        {Object.keys(item.variation).map(variationKey => (
          <li
            key={`${item.documentId}-${variationKey}`}
            className='flex flex-col justify-center items-center gap-4 p-3'
          >
            <div className='flex flex-wrap justify-center items-center border p-3 gap-1'>
              <button
                type='button'
                onClick={() => removeItem(item.documentId, variationKey)}
                className='text-lg font-bold'
              >
                X
              </button>
              <img src={item.imgUrl} alt={item.title} className='w-20 rounded-[50%]' />
              <h3 className='w-[100px]'>{item.title}</h3>
              <p className='w-[100px] flex flex-wrap'>
                <span>Variant:</span> {variationKey}
              </p>
              <p className='w-[100px]'>
                Price: {item.inventory[variationKey].newPrice}
              </p>
              <div className='w-[100px] justify-self-end'>
                <div className='flex gap-2'>
                  <SingleCartItemBtn
                    id={item.documentId + '-/-' + variationKey}
                    text={'-'}
                    handleItemCounter={() =>
                      handleItemCounter(item, variationKey, '-')
                    }
                    disabled={item.variation[variationKey].quantity <= 1}
                  />
                  <p>{item.variation[variationKey].quantity}</p>
                  <SingleCartItemBtn
                    id={item.documentId + '-/-' + variationKey}
                    text={'+'}
                    handleItemCounter={() =>
                      handleItemCounter(item, variationKey, '+')
                    }
                    disabled={item.variation[variationKey].quantity >= 10}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default SingleCartItem
