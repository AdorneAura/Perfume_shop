import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalCart, setLocalCart } from '../utils/cartLocalStorage';
import { findItem } from '../store/products/products';
import SingleCartItemBtn from '../components/CartDetails/SingleCartItemBtn';
import AppLayout from '../Layout/AppLayout';
import { addToCart, toggleMiniCart } from '../store/cart/cart';
import Loader from './Loader';

const Detail = () => {
  const id = window.location.pathname.split('/')[2];
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector(store => store.products.singleProduct);

  useEffect(() => {
    if (product && Object.keys(product.inventory).length > 0) {
      const defaultVariation = Object.keys(product.inventory)[0];
      setSelectedVariation(defaultVariation);
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      dispatch(findItem({ id }));
    }
  }, [id, dispatch]);

  const handleVariationSelect = variation => {
    setSelectedVariation(variation);
    setQuantity(1);
  };

  const handleQuantityChange = delta => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  const addProductToCart = () => {
    if (!selectedVariation || !product) return;

    setLoading(true); // Start loading
    const variationKey = selectedVariation;
    const item = {
      id: product.documentId,
      variation: {
        [variationKey]: { quantity }
      }
    };

    setLocalCart(item, variationKey);

    // Simulate network delay for smooth UX
    setTimeout(() => {
      dispatch(addToCart({ documentId: item.id, variationKey, quantity, product }));
      dispatch(toggleMiniCart());
      setLoading(false); // Stop loading
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 py-8">
      {product ? (
        <>
          {/* Left Column: Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={product.imgUrl}
              alt={product.title}
              className="max-w-full lg:max-w-[400px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Product Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-6">{product.description}</p>

            {/* Pricing Section */}
            {product?.inventory[selectedVariation]?.oldPrice && (
              <div className="mb-6">
                <span className="text-gray-500 line-through text-xl mr-2">
                  {product.inventory[selectedVariation].oldPrice} Rs
                </span>
                <span className="text-green-600 text-2xl font-bold">
                  {product.inventory[selectedVariation].newPrice} Rs
                </span>
              </div>
            )}

            {/* Variation Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Select Size:</h3>
              <div className="flex gap-2">
                {Object.keys(product.inventory).map(variation => (
                  <button
                    key={variation}
                    onClick={() => handleVariationSelect(variation)}
                    className={`py-2 px-4 border rounded transition-all ${
                      selectedVariation === variation
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-black'
                    } hover:bg-black hover:text-white`}
                  >
                    {variation}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-semibold text-lg">Quantity:</h3>
              <SingleCartItemBtn
                text="-"
                handleItemCounter={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              />
              <span className="text-lg">{quantity}</span>
              <SingleCartItemBtn
                text="+"
                handleItemCounter={() => handleQuantityChange(1)}
                disabled={quantity >= 30}
              />
            </div>

            {/* Add to Cart Button */}
            <button
              className={`py-3 px-6 rounded w-full font-bold transition-all ${
                loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'
              }`}
              onClick={addProductToCart}
              disabled={loading}
            >
              {loading ? (
                <span className="flex justify-center items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Adding...
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AppLayout()(Detail);
