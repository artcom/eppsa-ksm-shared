import React from "react"
import styled from "styled-components"

import Square from "./square"

const StyledSquare = styled(Square)`
  align-self: center;
`

const Circle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.layout.iconBorder};
  background-color: ${props => props.color};
  border-radius: 50%;
`

const StyledImg = styled.img`
  background-color: white;
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export default props => {
  const scale = props.scale || 1

  return (
    <StyledSquare scale={ scale }>
      <Circle color={ props.color }>
        <StyledImg
          height="100%"
          src={ props.iconSrc }
          srcSet={ props.iconSrcSet } />
      </Circle>
    </StyledSquare>
  )
}
