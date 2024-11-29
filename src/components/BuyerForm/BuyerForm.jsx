import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterKeyValuePairs } from '../../utils/commonFun'
import { OrderController } from '../../controllers/orderController'
import { useNavigate } from 'react-router-dom'
import { clearLocStore, getLocalCart } from '../../utils/cartLocalStorage'
import { mergeArrays, updateRemainingQuantities } from '../../utils/findProduct'
import { addUpdatedList } from '../../store/products/products'
// import emailjs from '@emailjs/browser';
import PurchaseLoader from './PurchaseLoader'
import { clearCart } from '../../store/cart/cart'
import formInputs from './formInputs'
import { formatAddress } from '../../utils/formatAddress'
import InputField from './InputField'

// const sendEmail = (form, onSuccess, onError) => {
//   emailjs
//     .sendForm('service_ps4kang', 'template_hk7guyr', form.current, {
//       publicKey: 'uIy-8GW2FoOUjfP2m',
//     })
//     .then(onSuccess, onError);
// };

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

  const handleFormSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    const cartItems = getLocalCart()
    const filteredProducts = filterKeyValuePairs(cart, ['documentId', 'title'])
    const ordered_items = mergeArrays(cartItems, filteredProducts)

    const data = {
      data: {
        full_name: userInfo.full_name,
        email: userInfo.email,
        address: formatAddress(userInfo),
        phone_no: userInfo.phone_no,
        ordered_items
      }
    }

    const result = await OrderController.createOrder(data)

    if (result.status === 201) {
      OrderController.sendEmail(
        form,
        () => {
          const updatedProductList = updateRemainingQuantities(
            cartItems,
            products
          )
          dispatch(addUpdatedList(updatedProductList))
          clearLocStore()
          setLoading(false)
          dispatch(clearCart())
          navigate('/success')
        },
        error => {
          console.error('Email sending failed:', error.text)
        }
      )
    }
  }

  const handleInputChange = e => {
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const toggleBillingAddress = () =>
    setUserInfo(prev => ({
      ...prev,
      save_billing_address: !prev.save_billing_address
    }))

  return (
    <>
      {cart.length > 0 ? (
        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className='flex flex-col gap-5 justify-center items-center px-[20px] w-full'
        >
          <h2 className='text-2xl font-bold underline self-start'>Your Information</h2>
          {formInputs.map(field => (
            <InputField
              key={field.name}
              {...field}
              onChange={handleInputChange}
            />
          ))}
          <button
            type='submit'
            className='bg-black text-white hover:bg-white hover:text-black border border-2 font-bold text-sm h-[40px] rounded w-[150px]'
          >
            Confirm Purchase
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
