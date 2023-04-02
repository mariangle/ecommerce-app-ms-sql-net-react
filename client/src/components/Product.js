import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../styles/styles';
import { useEffect, useState } from 'react';
import productApi from '../utils/api/productApi';


function ProductCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await productApi.getProducts();
      setData(products);
    };
    fetchData();
  }, []);

  return (
    <>
        {data.map((product, index) => (
          <StyledProductCard key={index}>
            <Link to={`/${product.productID}`} >
              <ProductImg>
                  <img src={product.imageURL} alt="" />
              </ProductImg>
              <ProductInfo>
                <h3>{product.brand} {product.name} </h3>
                <p>priceplaceholder kr.</p>
              </ProductInfo>
            </Link>
          </StyledProductCard>
        ))}
    </>

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