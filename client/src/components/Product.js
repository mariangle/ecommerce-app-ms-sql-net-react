import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Product(props) {
  const { name, price, images, brand, material, color, id} = props;
  const imageUrl = Array.isArray(images) && images.length > 0 ? images[0] : '';

  return (
    <Link to={`/product/${id}`}>
      <ProductCard>
        <ProductTumb>
          <img src={imageUrl} alt="" />
        </ProductTumb>
        <Details>
          <h3>{name}</h3>
          <p>{brand} - {color} - {material}</p>
          <Price>{price} kr</Price>
        </Details>
      </ProductCard>
    </Link>
  );
}

const ProductCard = styled.div`
  width: 100%;
  //  position: relative;
`

const ProductTumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 1rem;
  background: #f0f0f0;
img{
  max-width: 100%;
  max-height: 100%;
}
`
const Details = styled.div`
  margin-top: 1rem;
  h3, p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  h3{
    font-weight: lighter;
  }
  p:nth-child(2){
    color: var(--color-text)
  }
`

const Price = styled.p`
  margin-top: 1rem;
`



export default Product;