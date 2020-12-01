const ballPaths = {

  gameStarted: false,
  ball: null,
  allPaths: {},

  init: () => {
    if (!ballPaths.gameStarted) {
      ballPaths.gameStarted = true;
      ballPaths.ball = document.querySelector(".ball");
      ballPaths.launchBall();
    } else {
      ballPaths.launchBall();
    }
  },

  launchBall: () => {
    let moveLeft = setInterval(() => {
      let xPos = parseInt(ballPaths.ball.dataset.x, 10);
      let yPos = parseInt(ballPaths.ball.dataset.y, 10);

      ballPaths.ball.classList.toggle('ball');

      ballPaths.ball = document.querySelector(`[data-x="${xPos + 1}"][data-y="${yPos}"]`);
      ballPaths.ball.classList.toggle('ball');
    }, 1000);
  }

}

export default ballPaths;
