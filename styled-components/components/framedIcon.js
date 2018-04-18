import styled from "styled-components"

export default styled.div`
  height: 15em;
  width: 15em;
  border-radius: 50%;
  align-self: center;
  border: ${props => props.theme.layout.iconBorder} solid ${props => props.theme.colors.areaColor};
  background-image: url(${props => props.icon});
  background-size: cover;
`
