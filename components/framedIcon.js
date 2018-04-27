import React from "react"
import styled from "styled-components"


const Container = styled.div`
  margin-top: ${props => props.theme.layout.iconBorder};
  width: ${props => props.theme.layout.cardViewWidth * 0.65}vw;
  height: ${props => props.theme.layout.cardViewWidth * 0.65}vw;
  border-radius: 50%;
  align-self: center;
    border: ${props => props.theme.layout.iconBorder}vw solid ${props => props.color};
`

const StyledImg = styled.img`
  margin-left: auto;
	margin-right: auto;
	display: block;
`

export default props =>
  <Container color={ props.color }>
    <StyledImg height="100%" src={ props.iconSrc } srcSet={ props.iconSrcSet } />
  </Container>
