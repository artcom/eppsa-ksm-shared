import { css, keyframes } from "styled-components"

export default function clickEffect() {
  const click = keyframes`
    0% {
      transform: scale(1, 1);
      opacity: 1;
    }
    50%   {
      transform: scale(0.9, 0.9);
      opacity: 0.5;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  `
  return css`${click} 100ms ease 0ms 1`
}
