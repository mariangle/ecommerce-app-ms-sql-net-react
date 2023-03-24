import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  @media (max-width: 1200px) {
    // display: block;
    padding: 2rem;
  }
`;