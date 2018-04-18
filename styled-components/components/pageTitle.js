import styled from "styled-components"

export default styled.div`
  margin-bottom: 0.5em;
  align-self: center;
  font-size: ${props => props.theme.font.headline.size};
  font-weight: ${props => props.theme.font.headline.weight};
  color: ${props => props.theme.font.headline.color};
  text-align: center;
`
