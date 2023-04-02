import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem 1rem;
  width: 100%;
  max-width: 1400px;
`;

export const Image = styled.div`
  display: flex;
  flex: 2 1 30rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #f0f0f0;
  img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    } 
  @media (max-width: 850px) {
    display: block;
    padding: 0rem;
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 2 30rem;
  margin-left: 2rem;
  @media (max-width: 850px) {
  margin-left: 0rem;
  }
`;



