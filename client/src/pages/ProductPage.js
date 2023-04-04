import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, About } from '../styles/styles.js';
import styled from 'styled-components';
import { addToCart } from '../store/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/reducers/productSlice';
import { getProductSizesByProductId } from '../utils/api/productSizeApi';

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((product) => product.productID === Number(id));
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [defaultPrice, setDefaultPrice] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      if (product) {
        const productSizes = await getProductSizesByProductId(product.productID);
        setAvailableSizes(productSizes);

        const minPrice = Math.min(...productSizes.map((size) => size.price));
        setDefaultPrice(minPrice);
      }
    };
    fetchData();
  }, [product]);

  function handleAddToCart() {
    dispatch(addToCart({ product: product, size: selectedSize.size }));
  }

  return (
    <>
      {product && (
        <StyledProductPage>
          <ProductImages>
            <img src={product.imageURL} alt="" />
          </ProductImages>
          <ProductInfo>
            <h3>
              <span>
                {product.brand} {product.name}
              </span>
            </h3>
            <Price>
              {selectedSize ? selectedSize.price : defaultPrice} kr.
            </Price>
            <p>Avaliable Sizes:</p>
            <SizesGrid>
              {availableSizes.map((productSize, index) => {
                return (
                  <Size className="size" key={index}>
                    <input
                      type="radio"
                      id={`size-${index}`}
                      name="size"
                      value={productSize}
                      onChange={() => setSelectedSize(productSize)}
                    />
                    <label htmlFor={`size-${index}`}>{productSize.size}</label>
                  </Size>
                );
              })}
            </SizesGrid>
            <Button onClick={handleAddToCart}>Add to Basket</Button>
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

export default ProductPage;