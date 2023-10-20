// 라이브러리 불러오기
import { Console } from "@woowacourse/mission-utils";
import GameLogic from './GameLogic'

class App extends GameLogic {
  constructor() {
    this.initialization();
  }

  async play() {
  }
}

const App = new App;

export default App;
