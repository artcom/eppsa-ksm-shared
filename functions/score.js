import { sum } from "lodash"
import autoBind from "react-autobind"


export default class ScoreCalculation {
  constructor(timeToAnswer, scoreCalculation) {
    autoBind(this)
    this.fibo = [3, 5, 8]
    this.bonus = 0
    this.timeToAnswer = timeToAnswer
    this.scoreCalculation = scoreCalculation
  }
  getScore() {
    const { reward, gameFactor } = this.scoreCalculation
    this.bonus = this.timeBonus()
    this.score = reward * gameFactor
    return { bonus: this.bonus, score: this.score }
  }

  timeBonus() {
    const { tier1TimeBonus, tier2TimeBonus, tier3TimeBonus } = this.scoreCalculation
    const tiers = this.fibo.map(this.tier)
    if (this.timeToAnswer < tiers[0]) {
      return tier1TimeBonus
    } else if (this.timeToAnswer < tiers[1]) {
      return tier2TimeBonus
    } else if (this.timeToAnswer < tiers[2]) {
      return tier3TimeBonus
    } else {
      return 0
    }
  }

  tier(n) {
    const { sessionLength } = this.scoreCalculation
    return sum(this.fibo) / sessionLength * n * 10
  }
}
