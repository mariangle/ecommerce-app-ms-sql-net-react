import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../styles/styles';
import { useSelector } from 'react-redux';
import { setProduct } from '../slices/productSlice';

function Product({id, brand, model, color, material, price, images}) {


  const product = useSelector(state => state.product.products.find(p => p.id === id));
  const productSat = setProduct(product);
  const mainImg = Array.isArray(images) && images.length > 0 ? images[0] : '';

  return (
    <Link to={`/${id}`}>
      <ProductCard>
        <ProductImg>
          <img src={mainImg} alt="" />
        </ProductImg>
        <ProductInfo>
          <h3>{brand} {model} <span>{color} - {material}</span></h3>
          <Price>{price} kr.</Price>
        </ProductInfo>
      </ProductCard>
    </Link>
  );
}

const ProductCard = styled.div`
  width: 100%;
  //  position: relative;
`

const ProductImg = styled(Image)`
  height: 300px;
`
const ProductInfo = styled.div`
  h3{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.5rem 0rem 1rem 0rem;
  }
  h3{
    font-size: 1rem;
    font-weight: lighter;
  }
  h3 span{
    display: block;
    color: var(--color-text)
  }
`

const Price = styled.p`
`



export default Product;