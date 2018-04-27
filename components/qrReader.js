import React from "react"
import styled from "styled-components"
import ReactQrReader from "react-qr-reader"

import Square from "./square"
import QrReaderSeeker from "../assets/EPPSA_Assets_QR-Code_Scanner.svg"

const StyledSquare = styled(Square)`
  align-self: center;
`

const StyledQrReaderSeeker = styled(QrReaderSeeker)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  z-index: 2;
  fill: ${props => props.color};
`

const StyledQrReader = styled(ReactQrReader)`
  border-radius: 5%;
  overflow: hidden;
`

export default (props) => {
  const { background, seekerColor, scale = 1 } = props

  return (
    <StyledSquare scale={ scale }>
      <StyledQrReaderSeeker color={ seekerColor }/>
      <StyledQrReader
        onScan={ props.onScan }
        onError={ props.onError }
        showViewFinder={ false } />
    </StyledSquare>
  )
}
