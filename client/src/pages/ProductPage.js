import React, { useState, useEffect } from 'react';
import { generateProductData } from '../productData.js';
import { useParams } from 'react-router-dom';
import { Container, Image, About } from '../styles/styles.js';
import styled from 'styled-components';

function ProductDetail(props ) {
  const { id } = useParams();
  const [products, setProducts] = useState(generateProductData);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  useEffect(() => {
    const currentProduct = products.find((product) => product.id === Number(id));
    setProduct(currentProduct);
  }, [products, id]);

  function handleSizeChange(event) {
    setSelectedSize(event.target.value);
  }

  function handleAddToCart() {
    if (selectedSize) {
      const productToAdd = { ...product, selectedSize };
      props.addToCart(productToAdd);
      console.log(productToAdd.selectedSize);
    } else {
      console.log('Please select a size');
    }
  }

  return (
    <>
      {product && (
        <StyledProductDetail>
          <ProductImages>
            <img src={product.images} alt="" />
          </ProductImages>
          <ProductInfo>
            <h3>
              {product.brand}
              <span>{product.model}</span>
            </h3>
            <p>{product.price} kr</p>
            <Sizes>
              <p>Available sizes: </p>
              {product.availableSizes.map((size, index) => {
                return (
                  <Size className="size" key={index}>
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={handleSizeChange}
                      />
                    <label>{size}</label>
                  </Size>
                );
              })}
            </Sizes>
            <Button onClick={handleAddToCart}>Add to Basket</Button>
            <p>{product.description}</p>
          </ProductInfo>
        </StyledProductDetail>
      )}
    </>
  );
}

const StyledProductDetail = styled(Container)`
`;

const ProductImages = styled(Image)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
`;

const ProductInfo = styled(About)`
  h3 {
    font-weight: 500;
  }
  h3 span {
    display: block;
    font-weight: 700;
  }
  p {
    margin: 1rem 0rem;
  }
`;

const Sizes = styled.div`
  margin-top: 1rem;
  p {
    margin: 1rem 0rem;
  }
`;

const Size = styled.label`
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  border: 2px solid black;
  padding: 0.5rem;
  input {
    display: none;
  }
  input:checked + label {
    font-weight: bold;
  }
`;


const Button = styled.button`
  width: 100%;
`;

export default ProductDetail;
