import { API_TOKEN, BASE_URL } from '../Config'
import axios from 'axios'

export class OrderController {
  static async createOrder (data) {
    return await axios
      .post(`${BASE_URL}/api/orders/`, data, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      })
      .then(res => res)
      .catch(err => err)
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

  --For Order Creation Below is the object
  {
  "data": {
    "full_name": "Hammas",
    "address": "Home",
    "email": "test@mail.com",
    "phone_no": "03210034596",
    "ordered_items": [
      1,
      2,
      3
    ]
  }
}

-- For Quantity Update below is the object

const bulkUpdateOrders = async () => {
  const response = await fetch("http://localhost:1337/api/order/bulk-update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        { documentId: "doc123", status: "Shipped" },
        { documentId: "doc456", status: "Delivered" },
        // Add as many orders as needed
      ],
    }),
  });
  const result = await response.json();
  console.log(result);
};

*/
