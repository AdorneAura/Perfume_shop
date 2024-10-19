import React from 'react'
const products = [
  { id: 1, name: 'Aura Imagination', price: 1000 },
  { id: 2, name: 'Savage Noir', price: 2000 },
  { id: 3, name: "Man's Collection", price: 3000 },
  { id: 4, name: 'Crown Aventi', price: 3000 },
  { id: 5, name: 'Boomshell', price: 1000 },
  { id: 6, name: 'Blue Deep Horizon', price: 2000 },
  { id: 7, name: 'Aura Million', price: 3000 },
  { id: 8, name: 'Blueberry', price: 3000 },
  { id: 9, name: 'Lush Flora', price: 3000 },
  { id: 10, name: "Siren's Desire", price: 3000 }
  //... Add more products here
]

const Products = () => {
  return (
    <div>
      <h1 className='text-center p-5 text-3xl font-bold'>PRODUCTS</h1>
      <ul>{}</ul>
    </div>
  )
}

export default Products
