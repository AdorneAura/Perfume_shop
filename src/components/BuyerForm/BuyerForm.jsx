import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterKeyValuePairs } from '../../utils/commonFun'
import { OrderController } from '../../controllers/orderController'
import { useNavigate } from 'react-router-dom'
import { clearLocStore, getLocalCart } from '../../utils/cartLocalStorage'
import { mergeArrays, updateRemainingQuantities } from '../../utils/findProduct'
import { addUpdatedList } from '../../store/products/products'
import emailjs from '@emailjs/browser'
import PurchaseLoader from './PurchaseLoader'

const BuyerForm = ({ products }) => {
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

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useRef()

  const handleForm = async e => {
    e.preventDefault()
    setLoading(true)
    const cartItems = getLocalCart()
    const filteredProducts = filterKeyValuePairs(cart, [
      'documentId',
      'title',
    ])

    const ordered_items = mergeArrays(cartItems, filteredProducts)
    const data = {
      data: {
        full_name: userInfo.full_name,
        email: userInfo.email,
        address: `${userInfo.house_no} ${userInfo.street} ${userInfo.city} ${userInfo.country}`,
        phone_no: userInfo.phone_no,
        ordered_items
      }
    }

    const result = await OrderController.createOrder(data)
    if (result.status === 201) {
      emailjs
        .sendForm('service_ps4kang', 'template_hk7guyr', form.current, {
          publicKey: 'uIy-8GW2FoOUjfP2m'
        })
        .then(
          () => {
            const updatedProductList = updateRemainingQuantities(
              getLocalCart(),
              products
            )
            dispatch(addUpdatedList(updatedProductList))
            clearLocStore()
            setLoading(false)
            navigate('/success')
          },
          error => {
            console.log('FAILED...', error.text)
          }
        )
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
    <>
      {cart.length > 0 ? (
        <form
          ref={form}
          onSubmit={handleForm}
          className='flex flex-col gap-5 justify-center my-[60px] bg-black p-[40px]'
        >
          <input
            className='w-[300px] border p-2'
            type='text'
            placeholder='Full Name'
            name='full_name'
            onChange={handleInput}
            required
          />
          <input
            className='w-[300px] border p-2'
            type='text'
            placeholder='Phone No.'
            name='phone_no'
            onChange={handleInput}
            required
          />
          <input
            className='w-[300px] border p-2'
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleInput}
            required
          />
          <input
            className='w-[300px] border p-2'
            type='text'
            placeholder='House or Flat No.'
            name='house_no'
            onChange={handleInput}
            required
          />
          <input
            className='w-[300px] border p-2'
            type='text'
            placeholder='Street'
            name='street'
            onChange={handleInput}
            required
          />
          <input
            className='w-[300px] border p-2'
            type='text'
            placeholder='City'
            name='city'
            onChange={handleInput}
            required
          />
          <input
            className='w-[300px] border p-2'
            type='text'
            placeholder='Country'
            name='country'
            onChange={handleInput}
            required
          />
          {/* <ul className='px-1'>
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
          </ul> */}
          <button
            type='submit'
            className='bg-black text-white hover:bg-white hover:text-black border border-2 font-bold text-sm h-[40px] rounded'
          >
            {'Confirm Purchase'}
          </button>
        </form>
      ) : (
        <span className='text-2xl m-[200px]'>No Items in Cart</span>
      )}
      {loading && <PurchaseLoader />}
    </>
  )
}

export default BuyerForm
