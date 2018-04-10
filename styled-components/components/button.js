import styled, { css } from "styled-components"
import clickEffect from "../animations/clickEffect"


export default styled.div `
  margin-top: 0.5em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  width: 100%;
  max-height: 3.5em;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: ${props => props.theme.layout.borderRadius};
  border-style: solid;
  border-width: ${props => props.theme.layout.buttonBorder};
  border-color: ${props => props.theme.colors.areaColor};
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: ${props => props.theme.font.button.size};
  font-weight: ${props => props.theme.font.button.weight};
  color: ${props => props.theme.font.button.color};
  animation: ${props => props.clicked ? css`, ${clickEffect()};` : ";"}
`
