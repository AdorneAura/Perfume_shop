import React from 'react'

const CartPriceDetail = ({title, value}) => {
  return (
    <li className='self-end font-bold text-md mr-3 flex justify-between items-center w-[300px]'>
      <span>{title}</span>
      <span>{value}Rs</span>{' '}
    </li>
  )
}

export default CartPriceDetail
