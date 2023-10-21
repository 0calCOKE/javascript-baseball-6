import { MissionUtils } from "@woowacourse/mission-utils";

class GameLogic {
  generateRandomNumber() {
    const answerRandomNumber = [];

    while (answerRandomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answerRandomNumber.includes(number)) {
        answerRandomNumber.push(number);
      }
    }

    return answerRandomNumber;
  }

  countingStrike(answerNumber, playerInputNumber) {
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (answerNumber[i] === Number(playerInputNumber[i])) {
        strike++;
      }
    }

    return strike;
  }

  countingBall(answerNumber, playerInputNumber) {
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (
        answerNumber[i] !== Number(playerInputNumber[i]) &&
        answerNumber.includes(Number(playerInputNumber[i]))
      ) {
        ball++;
      }
    }

    return ball;
  }

  showGuessResult(ball, strike) {
    if (ball !== 0 && strike !== 0) {
      return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    if (ball !== 0 && strike === 0) {
      return MissionUtils.Console.print(`${ball}볼`);
    }
    if (ball === 0 && strike === 0) {
      return MissionUtils.Console.print("낫싱");
    }
  }

  isValidInputData(playerInputNumber) {
    const numberInputToSet = new Set(playerInputNumber.split("").map(Number));
    if (playerInputNumber.length !== 3) {
      return MissionUtils.Console.print("숫자는 3개를 입력해 주세요!");
    }
    if ([...numberInputToSet].length !== 3) {
      return MissionUtils.Console.print("이런! 중첩되는 숫자가 존재합니다.");
    }
    if (playerInputNumber.includes(" ")) {
      return MissionUtils.Console.print("공백은 제거해주세요!");
    }
    if (Number.isNaN(playerInputNumber)) {
      return MissionUtils.Console.print("숫자만 입력주세요!");
    }
    return 'GoodToGo';
  }
}
module.exports = GameLogic;
