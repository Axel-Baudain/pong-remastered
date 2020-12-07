import randomLaunchDirection from './randomLaunchDirection';
import fetchNextPos from './fetchNextPos';
import ballRedirect from './ballRedirect';
import clearboard from './clearboard';


const ballEntity = {

  gameStarted: false,
  ball: null,
  allPaths: {
    'rightupper': ['U', 'UR'],
    'rightupmid': ['UR'],
    'rightmid': ['R'],
    'rightdownmid': ['DR'],
    'rightdowner': ['D', 'DR'],

    'leftupper': ['U', 'UL'],
    'leftupmid': ['UL'],
    'leftmid': ['L'],
    'leftdownmid': ['DL'],
    'leftdowner': ['D', 'DL'],
  },
  P1Score: null,
  P2Score: null,
  delay: 200,

  currentDirection: null,

  init: () => {
    if (!ballEntity.gameStarted) {
      ballEntity.gameStarted = true;
      ballEntity.ball = document.querySelector(".ball");
      ballEntity.launchBall();
      ballEntity.P1Score = document.querySelector(".P1-score");
      ballEntity.P2Score = document.querySelector(".P2-score");
    }
  },

  launchBall: () => {
    ballEntity.currentDirection = randomLaunchDirection(ballEntity.allPaths);
    let iterate = 0;

    let startMoving = setInterval(() => {
      if (iterate >= ballEntity.currentDirection.length) {
        iterate = 0;
      }

      let xPos = parseInt(ballEntity.ball.dataset.x, 10);
      let yPos = parseInt(ballEntity.ball.dataset.y, 10);

      const newBallCoordinates = fetchNextPos(xPos, yPos, ballEntity.currentDirection[iterate]);
      xPos = newBallCoordinates[0];
      yPos = newBallCoordinates[1];

      if (xPos < 1 || xPos > 68) {
        ballEntity.delay = 100000000;
        return;
      }

      ballEntity.currentDirection = ballRedirect(fetchNextPos(xPos, yPos, ballEntity.currentDirection[iterate]), ballEntity.currentDirection, ballEntity.allPaths);

      ballEntity.ball.classList.toggle('ball');
      ballEntity.ball = document.querySelector(`[data-x="${xPos}"][data-y="${yPos}"]`);
      ballEntity.ball.classList.toggle('ball');
      iterate++;
    }, ballEntity.delay);
  },
}

export default ballEntity;
