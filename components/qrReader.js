import React from "react"
import styled from "styled-components"
import ReactQrReader from "react-qr-reader"

import QrReaderSeeker from "../assets/EPPSA_Assets_QR-Code_Scanner.svg"

const QrReaderContainer = styled.div`
  box-sizing: border-box;
  width: ${props => props.theme.layout.cardWidth * 0.7}vw;
  height: ${props => props.theme.layout.cardWidth * 0.7}vw;
  padding: ${props => props.theme.layout.mediumSpacing}vw;
  align-self: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.layout.cardBorderRadius};
`

const StyledQrReaderSeeker = styled(QrReaderSeeker)`
  position: absolute;
  z-index: 2;
  transform: translate(
    ${props => props.theme.layout.cardWidth * 0.15 / 2 - props.theme.layout.mediumSpacing}vw,
    ${props => props.theme.layout.cardWidth * 0.15 / 2 - props.theme.layout.mediumSpacing}vw
  );
  width: ${props => props.theme.layout.cardWidth * 0.55}vw;
  height: ${props => props.theme.layout.cardWidth * 0.55}vw;
  fill: ${props => props.color};
`

const StyledQrReader = styled(ReactQrReader)`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.layout.cardBorderRadius};
  overflow: hidden;
`

export default function QrReader(props) {
  const { background, seekerColor } = props

  return (
    <QrReaderContainer background={ background }>
      <StyledQrReaderSeeker color={ seekerColor } />
      <StyledQrReader
        onScan={ props.onScan }
        onError={ props.onError }
        showViewFinder={ false } />
    </QrReaderContainer>
  )
}
