const textSize = 5

export default {
  colors: {
    primary: "#f5a159",
    secondary: "#e5e5e5",
    primaryFont: "#000000",
    secondaryFont: "#7b7b7b",
    background: "#ffffff",
    areaColor: "#f5a159",
    rightAnswer: "#00d700",
    wrongAnswer: "#f3352f"
  },
  layout: {
    offsetX: "10vw",
    offsetY: "5vw",
    borderRadius: "50px",
    cardBorderRadius: "12px",
    buttonBorder: "5px",
    smallSpacing: "2vw",
    mediumSpacing: "3vw",
    largeSpacing: "6vw",
    iconBorder: "10px"
  },
  font: {
    fontFamily: "Cabin",
    headline: { size: `${textSize * 1.5}vw`, weight: "bold", color: "#000000" },
    button: { size: `${textSize * 1.25}vw`, weight: "normal", color: "#000000" },
    text: { size: `${textSize}vw`, weight: "normal", color: "#777777" }
  }
}
