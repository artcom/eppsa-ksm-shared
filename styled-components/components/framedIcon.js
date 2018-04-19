import styled from "styled-components"

export default styled.div`
  margin-top: ${props => props.theme.layout.iconBorder};
  width: 60%;
  padding-bottom: 60%;
  border-radius: 50%;
  align-self: center;
  border: ${props => props.theme.layout.iconBorder} solid ${props => props.theme.colors.areaColor};
  background-image: url(${props => props.icon});
  background-size: cover;
`
