import React from 'react';

function Product(props) {
  const { name, price, images } = props;
  const imageUrl = Array.isArray(images) && images.length > 0 ? images[0] : '';

  console.log(imageUrl)

  return (
    <div>
      <img src={imageUrl} alt="" />
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}

export default Product;