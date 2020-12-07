import checkNextxPos from './checkNextxPos';
import checkNextyPos from './checkNextyPos';
import randomLaunchDirection from './randomLaunchDirection';
import fetchNextPos from './fetchNextPos';
import ballRedirect from './ballRedirect';


const ballEntity = {

  gameStarted: false,
  ball: null,
  allPaths: {
    // 'rightupper': ['U', 'UR'],
    // 'rightupmid': ['UR'],
    'rightmid': ['R'],
    // 'rightdownmid': ['DR'],
    // 'rightdowner': ['D', 'DR'],

    // 'leftupper': ['U', 'UL'],
    // 'leftupmid': ['UL'],
    // 'leftmid': ['L'],
    // 'leftdownmid': ['DL'],
    // 'leftdowner': ['D', 'DL'],
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
    let iterate = 0;

    let startMoving = setInterval(() => {
      if (iterate >= ballEntity.currentDirection.length) {
        iterate = 0;
      }

      let xPos = parseInt(ballEntity.ball.dataset.x, 10);
      let yPos = parseInt(ballEntity.ball.dataset.y, 10);

      // CONSECUTIVE NEW POSITION
      // If next position is not valid
      if (checkNextxPos(fetchNextPos(xPos, yPos, ballEntity.currentDirection[iterate])) && checkNextyPos(fetchNextPos(xPos, yPos, ballEntity.currentDirection[iterate]))) {
        const newBallCoordinates = fetchNextPos(xPos, yPos, ballEntity.currentDirection[iterate]);
        xPos = newBallCoordinates[0];
        yPos = newBallCoordinates[1];
      }
      
      ballEntity.currentDirection = ballRedirect(fetchNextPos(xPos, yPos, ballEntity.currentDirection[iterate]), ballEntity.currentDirection, ballEntity.allPaths);

      ballEntity.ball.classList.toggle('ball');
      ballEntity.ball = document.querySelector(`[data-x="${xPos}"][data-y="${yPos}"]`);
      ballEntity.ball.classList.toggle('ball');
      iterate++;
    }, 50);
  }

}

export default ballEntity;
