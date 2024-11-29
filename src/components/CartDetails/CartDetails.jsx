import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocalCart } from '../../utils/cartLocalStorage';
import {
  increaseQuantity,
  decreaseQuantity,
} from '../../store/cart/cart';
import SingleCartItem from './SingleCartItem';
import { sumCartPrice } from '../../utils/commonFun';
import CartPriceDetail from './CartPriceDetail';
import GrandTotal from './GrandTotal';

const CartDetails = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const handleItemCounter = (item, variationKey, operator) => {
    let quantity = operator === '-' ? -1 : +1;
    const updatedItem = {
      id: item.documentId,
      variation: { [variationKey]: { quantity } },
    };
    setLocalCart(updatedItem, variationKey);
    dispatch(
      operator === '+'
        ? increaseQuantity({ item, variationKey })
        : decreaseQuantity({ item, variationKey })
    );
  };

  let priceDetail = [
    { id: 1, title: 'Subtotal', price: sumCartPrice(cartItems) },
    { id: 2, title: 'Delivery Service', price: 200 },
  ];

  return (
    <div className="w-full mt-12 p-[20px]">
      {cartItems.length > 0 && (
        <div className="flex flex-wrap justify-end gap-4 border-b-2 border-gray-100 pb-[30px]">
          <div className="lg:col-span-2 w-full p-2">
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <SingleCartItem
                  key={`${item.documentId}-${index}`}
                  item={item}
                  handleItemCounter={handleItemCounter}
                />
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg mr-2 p-4 shadow-md flex flex-col justify-center items-start">
            <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
            <div className="space-y-4">
              {priceDetail.map((pD) => (
                <CartPriceDetail
                  key={pD.id}
                  title={pD.title}
                  value={pD.price}
                />
              ))}
              <GrandTotal
                title={'Grand Total:'}
                value={sumCartPrice(cartItems) + priceDetail[1].price}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
