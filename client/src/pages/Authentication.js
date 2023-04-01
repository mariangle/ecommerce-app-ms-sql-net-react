import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/styles'

import Register from "../components/Register"
import Login from "../components/Login"


function Authentication() {
  return (
    <StyledAuthenticaton>
      <Login></Login>
      <Register></Register>
    </StyledAuthenticaton>
  )
}

const StyledAuthenticaton = styled(Container)`
  @media (max-width: 850px) {
    display: block;
    padding: 0rem;
  }

`

export default Authentication