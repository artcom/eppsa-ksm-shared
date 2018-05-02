const textSize = 5

export default function calculateTheme(
  largeCardViewWidth = 100,
  smallCardViewWidth = 100,
  cardRatio
  ) {
  const largeCardViewRatio = largeCardViewWidth / 100
  
  return {
    colors: {
      primary: "#f5a159",
      secondary: "#e5e5e5",
      primaryFont: "#000000",
      secondaryFont: "#7b7b7b",
      background: "#ffffff",
      area: "#f5a159",
      rightAnswer: "#00d700",
      wrongAnswer: "#f3352f"
    },
    layout: {
      borderRadius: "50px",
      cardBorderRadius: "12px",
      iconBorder: "5%",
      buttonBorder: "0.2em",
      cardPadding: `${8 * largeCardViewRatio}vw ${9 * largeCardViewRatio}vw`,
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
      text: { size: textSize * largeCardViewRatio, weight: "normal", color: "#777777" }
    }
  }
}
