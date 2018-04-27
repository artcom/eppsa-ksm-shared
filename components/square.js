import React from "react"
import styled from "styled-components"

const Square = styled.div`
  position: relative;
  width: ${props => props.scale * 100}%;
  
  :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export default (props) => <Square { ...props }><Content>{ props.children }</Content></Square>
