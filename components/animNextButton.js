import React from "react"
import styled, { css } from "styled-components"

import Button from "./button"
import ButtonIcon from "../assets/EPPSA_Assets_Button_Icon.svg"

const Container = styled.div`
  display: flex;
  margin-top: ${props => props.theme.layout.largeSpacing}vw;
  justify-content: center;
  pointer-events: ${({ clicked }) => clicked ? "none" : "all"};
  ${props => props.slideIn
    ? css`flex: ${props => props.visible ? "0 1 4em" : "0 0 0em"};
      transition: flex 1000ms ease;`
    : ""}
`

const StyledButton = styled(Button)`
  ${props => props.visible ? css`
    transform: scale(1, 1);
    transition: transform 250ms cubic-bezier(0.2, 0.7, 0.55, 1.6) 250ms;
    ` : css`
      transform: scale(0, 0);
      transition: transform 250ms ease;
    `}
`

const Text = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const NextIcon = styled(ButtonIcon)`
  margin-left: 1em;
  margin-top: 0.2em;
  height: 0.9em;
  fill: black;
`

export default function NextButton(props) {
  return (
    <Container visible={ props.visible } slideIn={ props.slideIn }>
      <StyledButton { ...props }><Text>{ props.text }</Text><NextIcon /></StyledButton>
    </Container>
  )
}

NextButton.defaultProps = { slideIn: false }
