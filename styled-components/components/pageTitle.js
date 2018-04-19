import React from "react"
import styled from "styled-components"

const Container = styled.div`
  align-self: center;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: ${props => props.theme.font.headline.size};
  font-weight: ${props => props.theme.font.headline.weight};
  color: ${props => props.theme.font.headline.color};
  text-align: center;
`

export default props =>
  <Container>
    <Title>{ props.text }</Title>
  </Container>
