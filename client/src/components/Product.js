import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../styles/styles';
import { useEffect, useState } from 'react';
import productApi from '../utils/api/productApi';
import { getProductSizesByProductId } from '../utils/api/productSizeApi';

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await productApi.getProducts();
        const productsWithSizes = await Promise.all(
          products.map(async (product) => {
            const productSizes = await getProductSizesByProductId(product.productID);
            const lowestPrice = productSizes.reduce((minPrice, productSize) => {
              return productSize.price < minPrice ? productSize.price : minPrice;
            }, Infinity);
            return { ...product, lowestPrice, productSizes };
          })
        );
        setProducts(productsWithSizes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  function renderProductCard(product, index) {
    if (!product.productSizes) {
      return null;
    }
    const productSize = product.productSizes.find((ps) => ps.quantity > 0);
    if (!productSize) {
      return null;
    }
    const { price } = productSize;
    return (
      <StyledProductCard key={index}>
        <Link to={`/${product.productID}`}>
          <ProductImg>
            <img src={product.imageURL} alt="" />
          </ProductImg>
          <ProductInfo>
            <h3>{product.brand} {product.name}</h3>
            <p>{price} kr.</p>
          </ProductInfo>
        </Link>
      </StyledProductCard>
    );
  }

  return <>{products.map(renderProductCard)}</>;
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