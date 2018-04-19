import styled, { css } from "styled-components"
import clickEffect from "../animations/clickEffect"


export default styled.div `
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  min-width: 50vw;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: ${props => props.theme.layout.borderRadius};
  border-style: solid;
  border-width: ${props => props.theme.layout.buttonBorder};
  border-color: ${props => props.theme.colors.areaColor};
  text-align: center;
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: ${props => props.theme.font.button.size};
  font-weight: ${props => props.theme.font.button.weight};
  color: ${props => props.theme.font.button.color};
  animation: ${props => props.clicked ? css`${clickEffect()};` : ";"}
`
