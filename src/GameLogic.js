import { Random } from "@woowacourse/mission-utils";

class GameLogic {
  constructor () {
    this.secretNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const answerRandomNumber = [];

    while (answerRandomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answerRandomNumber.includes(number)) {
        answerRandomNumber.push(number);
      }
    }

    return answerRandomNumber;
  }

  countingStrike(guess) {
    const guessNumber = guess.toString().split('').map(Number);
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (guessNumber[i] === this.answerRandomNumber[i]) {
        strike ++;
      }
    }

    return strike;
  }

  countingBall(guess) {
    const guessNumber = guess.toString().split('').map(Number);
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (guessNumber[i] === this.answerRandomNumber[i]) {
        ball ++;
      }
    }

    return ball;
  }

}

module.exports = GameLogic;