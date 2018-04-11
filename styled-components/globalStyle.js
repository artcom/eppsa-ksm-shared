import { injectGlobal } from "styled-components"


const fontFamily = "Cabin"

export function injectGlobalStyle(staticServerUrl) {
  injectGlobal`
    body {
      margin: 0;
      padding: 0;
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 400;
      font-style: normal;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-Regular.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 400;
      font-style: italic;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-Italic.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 500;
      font-style: normal;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-Medium.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 500;
      font-style: italic;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-MediumItalic.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 600;
      font-style: normal;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-SemiBold.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 600;
      font-style: italic;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-SemiBoldItalic.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 700;
      font-style: normal;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-Bold.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 700;
      font-style: italic;
      src: url("${staticServerUrl}/fonts/Cabin/Cabin-BoldItalic.ttf");
    }
  `
}
