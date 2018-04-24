import React from "react"
import styled from "styled-components"
import ReactQrReader from "react-qr-reader"

import QrReaderSeeker from "../assets/EPPSA_Assets_QR-Code_Scanner.svg"

const QrReaderContainer = styled.div`
  width: 40vw;
  height: 40vw;
  padding: ${props => props.theme.layout.largeSpacing};
  align-self: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.layout.cardBorderRadius};
`

const StyledQrReaderSeeker = styled(QrReaderSeeker)`
  position: absolute;
  z-index: 2;
  width: 40vw;
  height: 40vw;
  fill: ${props => props.theme.colors.primary};
`

const StyledQrReader = styled(ReactQrReader)`
  position: absolute;
  transform: translate(
    -${props => props.theme.layout.mediumSpacing},
    -${props => props.theme.layout.mediumSpacing}
  );
  width: calc(40vw + ${props => props.theme.layout.mediumSpacing} * 2);
  height: calc(40vw + ${props => props.theme.layout.mediumSpacing} * 2);
  border-radius: ${props => props.theme.layout.cardBorderRadius};
  overflow: hidden;
`

export default props =>
  <QrReaderContainer>
    <StyledQrReaderSeeker />
    <StyledQrReader
      onScan={ props.onScan }
      onError={ props.onError }
      showViewFinder={ false } />
  </QrReaderContainer>
