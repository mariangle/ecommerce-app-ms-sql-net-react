import React, { useState, useEffect } from 'react';
import { generateProductData } from '../productData.js';
import { useParams } from 'react-router-dom';
import { Container, Image, About} from '../styles/styles.js';

import styled from 'styled-components';

function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState(generateProductData);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = products.find((product) => product.id === Number(id));
    setProduct(currentProduct);
  }, [products, id]);

  return (
    <>
      {product && (
        <StyledProductDetail>
          <ProductImages>
            <img src={product.images} alt="" />
          </ProductImages>
          <ProductInfo>
            <h3>{product.brand}
            <span>{product.model}</span></h3>
            <p>{product.price} kr </p>
            <Sizes>
              <p>Available sizes: </p>
              {product.availableSizes.map((size, index) => {
                return <Size key={index}>{size}</Size>
              })}
            </Sizes>
            <Button>Add to Basket</Button>
            <p>{product.description}</p>
          </ProductInfo>
        </StyledProductDetail>
      )}
    </>
  );
}

const StyledProductDetail = styled(Container)`
  flex: 1;
  display: flex;
  align-items: stretch;
  @media (max-width: 800px) {
    display: block;
    padding: 2rem;
  }
`

const ProductImages = styled(Image)`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
`
const ProductInfo = styled(About)`
h3{
  font-weight: 500;
}
h3 span{
  display: block;
  font-weight: 700;
}
p{
  margin: 1rem 0rem;
}
`

const Sizes = styled.div`
  margin-top: 1rem;
  p{
    margin: 1rem 0rem;
  }
`;

const Size = styled.span`
  margin-right: 0.5rem;
  border: 2px solid black;
  padding: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
`;


export default ProductDetail