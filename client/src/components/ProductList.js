import React, { lazy, Suspense } from 'react'
import styled from 'styled-components';
import { Container } from '../styles/styles.js';
import { useSelector } from 'react-redux';

function ProductList() {
  const Product = lazy(() => import('./Product.js'));
  const products = useSelector(state => state.product.products);

  return (
    <Grid>
      <Suspense fallback={<div>Loading...</div>}>
        {products.map((product) => (
          <Product key={product.id} id={product.id} />      
        ))}  
      </Suspense>  
    </Grid>
  )
}
const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

export default ProductList