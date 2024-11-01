import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { filterKeyValuePairs } from '../../utils/commonFun'
import { OrderController } from '../../controllers/orderController'
import { useNavigate } from'react-router-dom'

const BuyerForm = () => {
  const cart = useSelector(store => store.cart.cart)

  const [userInfo, setUserInfo] = useState({
    full_name: '',
    email: '',
    house_no: '',
    street: '',
    city: '',
    country: '',
    phone_no: '',
    save_billing_address: false
  })

  const navigate = useNavigate()

  const handleForm = async e => {
    e.preventDefault()
    const filteredProducts = filterKeyValuePairs(cart, ['documentId', 'title', 'quantity'])
    const data = {
      data: {
        full_name: userInfo.full_name,
        email: userInfo.email,
        address: `${userInfo.house_no} ${userInfo.street} ${userInfo.city} ${userInfo.country}`,
        phone_no: userInfo.phone_no,
        ordered_items: filteredProducts
      }
    }
    const result = await OrderController.createOrder(data)
    if(result.status === 201) {
      navigate('/success')
    }
  }

  const handleInput = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const saveBillingAddress = () =>
    setUserInfo({
      ...userInfo,
      save_billing_address: !userInfo.save_billing_address
    })

  return (
    <form
      onSubmit={handleForm}
      className='flex flex-col gap-5 justify-center my-[60px] bg-black p-[40px]'
    >
      <input
        className='w-[300px] border p-2'
        type='text'
        placeholder='Full Name'
        name='full_name'
        onChange={handleInput}
      />
      <input
        className='w-[300px] border p-2'
        type='text'
        placeholder='Phone No.'
        name='phone_no'
        onChange={handleInput}
      />
      <input
        className='w-[300px] border p-2'
        type='email'
        placeholder='Email'
        name='email'
        onChange={handleInput}
      />
      <input
        className='w-[300px] border p-2'
        type='text'
        placeholder='House or Flat No.'
        name='house_no'
        onChange={handleInput}
      />
      <input
        className='w-[300px] border p-2'
        type='text'
        placeholder='Street'
        name='street'
        onChange={handleInput}
      />
      <input
        className='w-[300px] border p-2'
        type='text'
        placeholder='City'
        name='city'
        onChange={handleInput}
      />
      <input
        className='w-[300px] border p-2'
        type='text'
        placeholder='Country'
        name='country'
        onChange={handleInput}
      />
      <ul className='px-1'>
        <li>
          <span className='text-white'>Wanna save address?</span>
        </li>
        <li>
          <input
            className='p-2'
            type='checkbox'
            onChange={saveBillingAddress}
          />
        </li>
      </ul>
      <button
        type='submit'
        className='bg-black text-white hover:bg-white hover:text-black border border-2 font-bold text-sm h-[40px] rounded'
      >
        {'Confirm Purchase'}
      </button>
    </form>
  )
}

export default BuyerForm
