import { injectGlobal } from "styled-components"


const fontFamily = "Cabin"

export function injectGlobalStyle(fontServer) {
  injectGlobal`
    body {
      margin: 0;
      padding: 0;
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 400;
      font-style: normal;
      src: url("${fontServer}/Cabin/Cabin-Regular.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 400;
      font-style: italic;
      src: url("${fontServer}/Cabin/Cabin-Italic.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 500;
      font-style: normal;
      src: url("${fontServer}/Cabin/Cabin-Medium.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 500;
      font-style: italic;
      src: url("${fontServer}/Cabin/Cabin-MediumItalic.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 600;
      font-style: normal;
      src: url("${fontServer}/Cabin/Cabin-SemiBold.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 600;
      font-style: italic;
      src: url("${fontServer}/Cabin/Cabin-SemiBoldItalic.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 700;
      font-style: normal;
      src: url("${fontServer}/Cabin/Cabin-Bold.ttf");
    }

    @font-face {
      font-family: ${fontFamily};
      font-weight: 700;
      font-style: italic;
      src: url("${fontServer}/Cabin/Cabin-BoldItalic.ttf");
    }
  `
}
