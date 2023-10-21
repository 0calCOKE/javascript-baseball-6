import { MissionUtils } from "@woowacourse/mission-utils";

const GameLogic = require("./GameLogic.js");

class App extends GameLogic{
  constructor() {
    super();
    this.start();
  }

  start() {
    this.game = super.generateRandomNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() { 
    try {
      const guessNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요.');
    } catch (error) {
     throw error.MissionUtils.Console.print('이런! 에러가 발생했습니다.')
    }  
  }

  isValidInputData(playerInputNumber) {
    const ball = super.countingBall(this.game, playerInputNumber);
    const strike = super.countingStrike(this.game, playerInputNumber);

  }
}

export default App;
