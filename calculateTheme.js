const textSize = 5

export default function calculateTheme(
  largeCardViewWidth = 100,
  smallCardViewWidth = 100,
  cardRatio = 2 / 3
) {
  const largeCardViewRatio = largeCardViewWidth / 100

  const cardPaddingVertical = 8 * largeCardViewRatio
  const cardPaddingHorizontal = 9 * largeCardViewRatio

  return {
    layout: {
      borderRadius: "50px",
      cardBorderRadius: "12px",
      iconBorder: "5%",
      buttonBorder: "0.2em",
      cardPaddingVertical: `${cardPaddingVertical}vw`,
      cardPaddingHorizontal: `${cardPaddingHorizontal}vw`,
      cardPadding: `${cardPaddingVertical}vw ${cardPaddingHorizontal}vw`,
      smallSpacing: 2 * largeCardViewRatio,
      mediumSpacing: 3 * largeCardViewRatio,
      largeSpacing: 5 * largeCardViewRatio,
      largeCardViewWidth,
      smallCardViewWidth,
      cardRatio
    },
    font: {
      fontFamily: "Cabin",
      headline: { size: textSize * 1.4 * largeCardViewRatio, weight: "bold", color: "#000000" },
      button: { size: textSize * 1.1 * largeCardViewRatio, weight: "normal", color: "#000000" },
      text: { size: textSize * largeCardViewRatio, weight: "normal", color: "#777777" },
      timeBall: { size: textSize * largeCardViewRatio, weight: "normal", color: "#ffffff" }
    }
  }
}
