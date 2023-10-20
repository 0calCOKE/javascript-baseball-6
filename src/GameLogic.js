import { Random } from "@woowacourse/mission-utils";

class GameLogic {
  generateRandomNumber() {
    const answerRandomNumber = [];

    while (answerRandomNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!answerRandomNumber.includes(randomNumber)) {
        answerRandomNumber.push(randomNumber);
      }
    }

    return answerRandomNumber;
  }
}

module.exports = GameLogic;