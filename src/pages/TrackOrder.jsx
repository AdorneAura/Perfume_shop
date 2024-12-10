import React, { useEffect, useState } from 'react'
import { OrderController } from '../controllers/orderController'
import { first } from 'macaddress-local-machine'
import SingleCartItem from '../components/CartDetails/SingleCartItem'

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('')
  const [orderStatus, setOrderStatus] = useState(null)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const trackOrder = async () => {
    // if (!orderId) {
    //   setError('Please enter a valid order ID.');
    //   return;
    // }

    setLoading(true)
    setError(null)
    setOrderStatus(null)

    const orders = await OrderController.getOrder()
    console.log(orders)
    setOrders(orders.data.data)
  }

  const handleItemCounter = (item, variationKey, operator) => {}

  useEffect(() => {
    trackOrder()
  }, [])

  return (
    <div className='max-w-md mx-auto p-6 text-center font-sans'>
      <h1 className='text-2xl font-bold mb-6'>Order Tracking</h1>
      <div className='space-y-4'>
        <input
          type='text'
          value={orderId}
          onChange={e => setOrderId(e.target.value)}
          placeholder='Enter Order ID'
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={trackOrder}
          className={`w-full p-2 bg-blue-500 text-white rounded-md ${
            loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Tracking...' : 'Track Order'}
        </button>
      </div>
      {error && <p className='mt-4 text-red-500'>{error}</p>}
      {orderStatus && (
        <p className='mt-4 text-green-500'>Status: {orderStatus}</p>
      )}
      <ul>
        {orders &&
          orders?.map(item => (
            // <SingleCartItem key={item.documentId} item={item} handleItemCounter={handleItemCounter} />
            <li key={item.documentId}>
              <ul>
                {item.ordered_items.map((i, index) => (
                  <li key={item.documentId + index}>
                    <p>Name: {i.title}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default OrderTracking
