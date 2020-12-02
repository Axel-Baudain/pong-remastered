import checkNextPos from './checkNextPos';
import randomLaunchDirection from './randomLaunchDirection';
import fetchNextPos from './fetchNextPos';


const ballEntity = {

  gameStarted: false,
  ball: null,
  allPaths: {
    'rightupper': 'UUR',
    'rightupmid': 'UR',
    'rightmid': 'R',
    'rightdownmid': 'DR',
    'rightdowner': 'DDR',

    'leftupper': 'UUL',
    'leftupmid': 'UL',
    'leftmid': 'L',
    'leftdownmid': 'DL',
    'leftdowner': 'DDL',
  },

  currentDirection: null,

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
    ballEntity.currentDirection = randomLaunchDirection(ballEntity.allPaths);
    console.log(ballEntity.currentDirection);

    let startMoving = setInterval(() => {
      let xPos = parseInt(ballEntity.ball.dataset.x, 10);
      let yPos = parseInt(ballEntity.ball.dataset.y, 10);
      console.log(fetchNextPos(xPos, yPos, ballEntity.currentDirection));

      ballEntity.ball.classList.toggle('ball');

      // fetchnextpos Function
      // if checkpos is valid, currentDirection
      // else changeDirection, fetchnextpos, checkpos, currentDirection


      // ballEntity.ball = document.querySelector(`[data-x="${xPos - 1}"][data-y="${yPos}"]`);
      ballEntity.ball.classList.toggle('ball');
    }, 500);
  }

}

export default ballEntity;
