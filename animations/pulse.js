import { css, keyframes } from "styled-components"


export default function pulse(initialColor, blinkColor, blinking, colorType) {
  const { duration, repeats } = blinking
  const blink = keyframes`
    0% { ${colorType}: ${blinkColor}; }
    50%   { ${colorType}: ${initialColor}; }
    100% { ${colorType}: ${blinkColor}; }
  `
  return css`${blink} ${duration}ms ease 0ms ${repeats}`
}
