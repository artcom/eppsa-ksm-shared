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
    colors: {
      primary: "#d4310f",
      secondary: "#e5e5e5",
      primaryFont: "#000000",
      secondaryFont: "#7b7b7b",
      background: "#ffffff",
      area: "#d4310f",
      rightAnswer: "#00d700",
      wrongAnswer: "#f3352f"
    },
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
      dashboard: {
        name: { size: 1.3, weight: "normal", color: "#000000" },
        score: { size: 0.9, weight: "bold", color: "#FFFFFF" },
        label: { size: 2, weight: "bold", color: "#000000" }
      }
    }
  }
}
