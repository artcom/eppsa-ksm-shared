import React from "react"
import styled from "styled-components"


const Title = styled.div`
  font-size: ${props => props.theme.font.headline.size};
  font-weight: ${props => props.theme.font.headline.weight};
  color: ${props => props.theme.font.headline.color};
  text-align: center;
`

export default props =>
  <Title>{ props.text }</Title>
