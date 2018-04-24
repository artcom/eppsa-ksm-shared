import { css, keyframes } from "styled-components"

export default function clickEffect(initialXScale = 1) {
  console.log(initialXScale)
  const click = keyframes`
    0% {
      transform: scale(${initialXScale}, 1);
      opacity: 1;
    }
    50%   {
      transform: scale(${initialXScale * 0.9}, 0.9);
      opacity: 0.5;
    }
    100% {
      transform: scale(${initialXScale}, 1);
      opacity: 1;
    }
  `
  return css`${click} 100ms ease 0ms 1`
}
