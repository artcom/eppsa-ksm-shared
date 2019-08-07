import styled from "styled-components"
import clickEffect from "../animations/clickEffect"

export default styled.div `
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
  animation: ${props => props.clicked ? clickEffect() : ""};
  pointer-events: ${({ clicked }) => clicked ? "none" : "all"};
  flex-shrink: 0;
`
