import React, { lazy, Suspense } from 'react'
import styled from 'styled-components';
import { Container } from '../styles/styles.js';
import ProductCard from './Product.js';

function ProductList() {
  return (
    <Grid>
      <ProductCard />
    </Grid>
  )
}
const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

export default ProductList