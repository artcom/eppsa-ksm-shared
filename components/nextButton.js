import React from "react"
import styled from "styled-components"

import Button from "./button"
import ButtonIcon from "../assets/EPPSA_Assets_Button_Icon.svg"

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
  return <Button { ...props }><Text>{ props.text }</Text><NextIcon /></Button>
}
