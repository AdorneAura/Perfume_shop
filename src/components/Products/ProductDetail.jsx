import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>Loading product details...</p>;
  }

  const {
    title,
    description,
    price,
    discountedPrice,
    remaining,
    imgUrl,
    available,
    publishedAt,
  } = product;

  return (
    <div className="product-detail flex flex-col justify-center items-center bg-[#800020] text-white gap-4 py-1 font-bold">
      <div className="product-detail__image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="product-detail__info">
      <h1>{title}</h1>
        <p>{description}</p>
        <p>
          Price:{' '}
          <span className="product-detail__price">
            ${discountedPrice ? discountedPrice : price}
          </span>
          {discountedPrice && (
            <span className="product-detail__original-price"> ${price}</span>
          )}
        </p>
        <p>Status: {available ? 'In Stock' : 'Out of Stock'}</p>
        {available && <p>Remaining: {remaining}</p>}
        <p>Published on: {new Date(publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
