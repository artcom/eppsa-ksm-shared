import React, { useState, useRef } from "react"
import styled from "styled-components"

const Button = styled.div `
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 1.2em;
  padding-right: 1.2em;
  min-width: 50%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: ${props => props.theme.layout.borderRadius};
  border-style: solid;
  border-width: ${props => props.theme.layout.buttonBorder};
  border-color: ${props => props.theme.colors.area};
  text-align: center;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.font.button.size}vw;
  font-weight: ${props => props.theme.font.button.weight};
  color: ${props => props.theme.font.button.color};

  ${({ clicked }) => clicked ?
    `transform: scale(0.9, 0.9);
    opacity: 0.5;` : ""}

  flex-shrink: 0;
`

export default (props) => {
  const { onClick, children } = props

  const [clicked, setClicked] = useState(false)
  const buttonRef = useRef()

  return (
    <Button
      { ...props }
      ref={ buttonRef }
      clicked={ clicked }
      onTouchStart={ () => {
        setClicked(true)
      } }
      onTouchEnd={ event => {
        setClicked(false)
        if (event.target === buttonRef.current) {
          onClick()
        }
      } }>
      { children }
    </Button>
  )
}
