import styled from "styled-components"

export default styled.div`
  font-size: ${props => props.theme.font.text.size}vw;
  font-weight: ${props => props.theme.font.text.weight};
  color: ${props => props.theme.colors.wrongAnswer};
  text-align: center;
`
