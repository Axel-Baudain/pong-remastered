import checkNextPos from './checkNextPos';


const ballEntity = {

  gameStarted: false,
  ball: null,
  allPaths: {
    'rightupper': ['U', 'U', 'R'],
    'rightupmid': ['U', 'R'],
    'rightmid': ['R'],
    'rightdownmid' : ['D', 'R'],
    'rightdowner' : ['D', 'D', 'R'],

    'leftupper': ['U', 'U', 'L'],
    'leftupmid': ['U', 'L'],
    'leftmid': ['L'],
    'leftdownmid' : ['D', 'L'],
    'leftdowner' : ['D', 'D', 'L'],
  },

  init: () => {
    if (!ballEntity.gameStarted) {
      ballEntity.gameStarted = true;
      ballEntity.ball = document.querySelector(".ball");
      ballEntity.launchBall();
    } else {
      ballEntity.launchBall();
    }
  },

  launchBall: () => {
    let startMoving = setInterval(() => {
      let xPos = parseInt(ballEntity.ball.dataset.x, 10);
      let yPos = parseInt(ballEntity.ball.dataset.y, 10);

      checkNextPos(xPos - 1, yPos)

      ballEntity.ball.classList.toggle('ball');
      ballEntity.ball = document.querySelector(`[data-x="${xPos - 1}"][data-y="${yPos}"]`);
      ballEntity.ball.classList.toggle('ball');
    }, 200);
  }

}

export default ballEntity;
