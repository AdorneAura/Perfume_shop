import React from 'react'

const GrandTotal = ({title, value}) => {
  return (
    <li className='self-end font-bold text-2xl mr-3 flex justify-between items-center w-[300px]'>
      <span>{title}</span>
      <span>Rs {value}</span>{' '}
    </li>
  )
}

export default GrandTotal
