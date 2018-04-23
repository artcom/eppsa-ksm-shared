import styled from "styled-components"

export default styled.div`
  margin-top: ${props => props.theme.layout.iconBorder};
  width: 70%;
  padding-bottom: 70%;
  border-radius: 50%;
  align-self: center;
  border: ${props => props.theme.layout.iconBorder} solid ${props => props.theme.colors.areaColor};
  background-image: url(${props => props.icon});
  background-position-x: center;
  background-size: auto 100%;
`
