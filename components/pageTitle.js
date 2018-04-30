import React from "react"
import styled from "styled-components"


export default styled.div`
  font-size: ${props => props.theme.font.headline.size}vw;
  font-weight: ${props => props.theme.font.headline.weight};
  color: ${props => props.theme.font.headline.color};
  text-align: center;
  margin-bottom: ${props => props.theme.layout.largeSpacing}vw;
`
