import React, { useEffect } from 'react'
// import products from './productsList'
// import { getProducts } from '../../controllers/productController'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/products'

const Products = () => {
  const products = useSelector(store => store.products.products)
  console.log(products)
  const dispatch = useDispatch()

  const prod = () => {
    // getProducts()
    //   .then((pr) => {
    //     console.log(pr);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching products:", error);
    //   });
    dispatch(fetchProducts());
  }

  useEffect(() =>{
    if(products.length == 0) {
      console.log(products.length)
      prod()
    }
  }, [products])

  return (
    <div className='mb-[100px]'>
      <h1 className='text-center p-5 text-6xl font-bold my-[40px] text-yellow-600'>
        PRODUCTS
      </h1>
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {products.map(product => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default Products
