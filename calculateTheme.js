const textSize = 5

export default function calculateTheme(
  cardViewWidth = 100,
  cardViewHeight = 100,
  cardViewRatio = 1
  ) {
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
      buttonBorder: "1.2vw",
      cardPadding: `${8 * cardViewRatio}vw ${9 * cardViewRatio}vw`,
      smallSpacing: 2 * cardViewRatio,
      mediumSpacing: 3 * cardViewRatio,
      largeSpacing: 5 * cardViewRatio,
      cardViewWidth,
      cardViewHeight,
      cardViewRatio
    },
    font: {
      fontFamily: "Cabin",
      headline: { size: textSize * 1.4 * cardViewRatio, weight: "bold", color: "#000000" },
      button: { size: textSize * 1.1 * cardViewRatio, weight: "normal", color: "#000000" },
      text: { size: textSize * cardViewRatio, weight: "normal", color: "#777777" }
    }
  }
}
