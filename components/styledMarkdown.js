import ReactMarkdown from "react-markdown"
import styled from "styled-components"

export default styled(ReactMarkdown)`
  h1, h2, h3, h4, h5, h6 {
    font-size: 1.1em;
    margin-bottom: 1em;
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`
