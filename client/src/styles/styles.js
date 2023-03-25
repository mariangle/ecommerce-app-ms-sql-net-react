import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
    padding: 2rem;
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 1rem;
  background: #f0f0f0;
img{
  max-width: 100%;
  max-height: 100%;
}
`

export const About = styled.div`
  flex: 1;
  flex-wrap: wrap;
  padding-right: 5rem;
  @media (max-width: 1300px) {
    padding: 0;
  }
`;