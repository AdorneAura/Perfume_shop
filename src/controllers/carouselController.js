import { API_TOKEN, BASE_URL } from '../Config'
import axios from 'axios'

export const getCarouselImages = async () => {
  return await axios
    .get(`${BASE_URL}/api/homepages`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    .then(res => {
      if (res?.status) {
        return res
      }
    })
    .catch(err => {
      reject(err)
    })
}
