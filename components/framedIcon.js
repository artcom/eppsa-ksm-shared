import React from "react"
import styled from "styled-components"


const Container = styled.div`
  margin-top: ${props => props.theme.layout.iconBorder};
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  align-self: center;
  border: ${props => props.theme.layout.iconBorder} solid ${props => props.theme.colors.areaColor};
`

const StyledImg = styled.img`
  margin-left: auto;
	margin-right: auto;
	display: block;
`

export default props =>
  <Container>
    <StyledImg height="100%" src={ props.iconSrc } srcSet={ props.iconSrcSet } />
  </Container>
