import { API_TOKEN, BASE_URL } from '../Config'

export class OrderController {
  static createOrder (data) {
    return axios
      .post(`${BASE_URL}/api/orders/`, data, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      })
      .then(res => {
        if (res?.data?.success) {
          return res?.data
        }
      })
      .catch(err => {
        return err
      })
  }

  static updateProductQuantity (data) {
    return axios
      .post(`${BASE_URL}/api/products/:id`, data, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      })
      .then(res => {
        if (res?.data?.success) {
          return res?.data
        }
      })
      .catch(err => {
        return err
      })
  }
}


/*
  -- First we shall make a call to update the quantity of the products
  -- Second we shall make two api calls to create an order with email notification to buyer and seller
*/