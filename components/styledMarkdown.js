import ReactMarkdown from "react-markdown"
import styled from "styled-components"

export default styled(ReactMarkdown)`
  h1, h2, h3, h4, h5, h6 {
    font-size: 1.1em;
    color: ${props => props.theme.colors.primaryFont};
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    :last-child {
      margin-bottom: 0;
    }
  }

  font-size: ${props => props.theme.font.text.size}vw;
  font-weight: ${props => props.theme.font.text.weight};
  color: ${props => props.theme.font.text.color};

  overflow-y: auto;
  margin-bottom: 1em;
  `
