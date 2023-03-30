import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../styles/styles';
import { useSelector, useDispatch } from 'react-redux';

function ProductCard({id}) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.products.find(p => p.id === id));

  return (
    <Link to={`/${id}`}>
      <StyledProductCard>
        <ProductImg>
          <img src={product.images} alt="" />
        </ProductImg>
        <ProductInfo>
          <h3>{product.brand} {product.model} 
          <span>{product.color} - {product.material}</span></h3>
          <p>{product.price} kr.</p>
        </ProductInfo>
      </StyledProductCard>
    </Link>
  );
}

const StyledProductCard = styled.div`
  width: 100%;
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
  font-size: 1rem;
  font-weight: lighter;
  span{
    display: block;
    color: var(--color-text)
    }
  }
`

export default ProductCard;