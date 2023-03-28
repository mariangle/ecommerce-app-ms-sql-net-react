import React, { useState, useEffect } from 'react';
import { generateProductData } from '../productData.js';
import { useParams } from 'react-router-dom';
import { Container, Image, About } from '../styles/styles.js';
import styled from 'styled-components';

// connect to store
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function ProductPage(props ) {
  const { id } = useParams();
  const [products, setProducts] = useState(generateProductData);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);


  useEffect(() => {
    const currentProduct = products.find((product) => product.id === Number(id));
    setProduct(currentProduct); 
  }, [products, id]);

  function handleSizeChange(event) {
    setSelectedSize(event.target.value);
    setSizeError(false);
  }

  return (
    <>
      {product && (
        <StyledProductPage>
          <ProductImages>
            <img src={product.images} alt="" />
          </ProductImages>
          <ProductInfo>
            <h3>
              {product.brand}
              <span>{product.model}</span>
            </h3>
            <Price>{product.price} kr.</Price>
            <p>Available sizes: </p>
            <SizesGrid>
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
            </SizesGrid>
            {sizeError && <ErrorMessage>Please select a size.</ErrorMessage>}
            <Button onClick={() => props.addToCart(product)}>Add to Basket</Button>
            <p>{product.description}</p>
          </ProductInfo>
        </StyledProductPage>
      )}
    </>
  );
}

const StyledProductPage = styled(Container)`
  @media (max-width: 850px) {
    display: block;
  }
`;

const ProductImages = styled(Image)`
padding: 5rem 0rem;
  `;

const ProductInfo = styled(About)`
  height: 100%;
  justify-content: space-between;
  h3 {
    font-weight: 500;
  }
  h3 span {
    padding-top: 0.5rem;
    display: block;
    font-weight: 700;
  }
  @media (max-width: 850px) {
  margin-top: 2rem;
  }
  @media (min-width: 850px) {
  }
`;

const Price = styled.p`
margin: 2rem 0rem; 
font-size: 1.6rem;
`; 

const SizesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Size = styled.label`
border: 2px solid #646464;
border-radius: 5px;
padding: 0.5rem;
text-align: center;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  input {
    display: none;
  }
  input:checked + label {
    font-weight: bold;
  }
`;


const Button = styled.button`
margin: 0 0 2rem 0;
`;

const ErrorMessage = styled.p`
color: red;
`;
const mapStateToProps = state => ({
  cartItems: state.cart ? state.cart.items : []
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: product => dispatch(addToCart(product))
});  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);