import React from 'react'

const DetailIcon = ({icon}) => {
  return (
    <li className='font-bold flex justify-center items-center gap-3'>
      <img src={icon.icon} alt={icon.icon} className='w-[30px]' />
      <span>{icon.title}</span>
    </li>
  )
}

export default DetailIcon
