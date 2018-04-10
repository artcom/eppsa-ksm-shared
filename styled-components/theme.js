const textSize = 2.5

export default {
  colors: {
    primary: "#f5a159",
    secondary: "#e5e5e5",
    primaryFont: "#000000",
    secondaryFont: "#7b7b7b",
    areaColor: "#f5a159",
    rightAnswer: "#00d700",
    wrongAnswer: "#f3352f"
  },
  layout: {
    offsetX: "5vh",
    borderRadius: "25px",
    buttonBorder: "5px",
  },
  font: {
    fontFamily: "Cabin",
    headline: { size: `${textSize * 1.5}vh`, weight: "bold", color: "#000000" },
    button: { size: `${textSize * 1.25}vh`, weight: "normal", color: "#000000" },
    text: { size: `${textSize}vh`, weight: "normal", color: "#777777" }
  }
}
