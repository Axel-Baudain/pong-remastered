const ballRedirect = (XYtargettedPos, currentDirection, allDirections) => {

  let xPos = XYtargettedPos[0];
  let yPos = XYtargettedPos[1];

  let leftTile = document.querySelector(`[data-x="${xPos}"][data-y="${yPos}"]`);
  let rightTile = document.querySelector(`[data-x="${xPos}"][data-y="${yPos}"]`);

  // console.log(rightTile.classList);
  // return currentDirection;

  // RELATED TO PLAYER ONE PAD
  if (leftTile.classList.contains("playerone")) {
    if (leftTile.classList.contains("1P-upper")) {
      return 'UUR';
    }
    if (leftTile.classList.contains("1P-upmid")) {
      return 'UR';
    }
    if (leftTile.classList.contains("1P-mid")) {
      return 'R';
    }
    if (leftTile.classList.contains("1P-downmid")) {
      return 'DR';
    }
    if (leftTile.classList.contains("1P-downer")) {
      return 'DDR';
    }
  }

  // RELATED TO PLAYER TWO PAD
  if (rightTile.classList.contains("playertwo")) {
    if (rightTile.classList.contains("2P-upper")) {
      return 'UUL';
    }
    if (rightTile.classList.contains("2P-upmid")) {
      return 'UL';
    }
    if (rightTile.classList.contains("2P-mid")) {
      console.log('okay');
      return 'L';
    }
    if (rightTile.classList.contains("2P-downmid")) {
      return 'DL';
    }
    if (rightTile.classList.contains("2P-downer")) {
      return 'DDL';
    }
  }

  // RELATED TO Y TOO HIGH
  if (yPos - 1 < 0) {
    if (currentDirection === 'UL') {
      return 'DL';
    }
    if (currentDirection === 'UUL') {
      return 'DDL';
    }
    if (currentDirection === 'UR') {
      return 'DR';
    }
    if (currentDirection === 'UUR') {
      return 'DDR';
    }
  }

  // RELATED TO Y TOO LOW
  if (yPos + 1 > 30) {
    if (currentDirection === 'DL') {
      return 'UL';
    }
    if (currentDirection === 'DDL') {
      return 'UUL';
    }
    if (currentDirection === 'DR') {
      return 'UR';
    }
    if (currentDirection === 'DDR') {
      return 'UUR';
    }
  }

  return currentDirection;
};

export default ballRedirect;
