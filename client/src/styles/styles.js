import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem 1rem;
  width: 100%;
  @media (min-width: 800px) {
  max-width: 1400px
}
`;

export const Image = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #f0f0f0;
  img{
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
} 
@media (max-width: 800px) {
  display: block;
  padding: 0rem;
}
`

export const About = styled.div`
  flex: 1;
  flex-wrap: wrap;
  margin-left: 5rem;
  @media (max-width: 800px) {
  margin-left: 0rem;
}
`;