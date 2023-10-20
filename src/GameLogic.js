const { Random } = require("@woowacourse/mission-utils");

class GameLogic {
  generateRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }
}


module.exports = GameLogic;