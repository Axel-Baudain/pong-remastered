const ballRedirect = (xPos, yPos, currentDirection) => {

  let leftTile = document.querySelector(`[data-x="${xPos - 1}"][data-y="${yPos}"]`);
  let rightTile = document.querySelector(`[data-x="${xPos + 1}"][data-y="${yPos}"]`);
  let upTile = document.querySelector(`[data-x="${xPos}"][data-y="${yPos - 1}"]`);
  let downTile = document.querySelector(`[data-x="${xPos}"][data-y="${yPos + 1}"]`);

  // RELATED TO PLAYER ONE PAD
  if (leftTile.classList.contains("playerone")) {
    if (leftTile.classList.contains("1P-upper")) {
      return ['U', 'UR'];
    }
    if (leftTile.classList.contains("1P-upmid")) {
      return ['UR'];
    }
    if (leftTile.classList.contains("1P-mid")) {
      return ['R'];
    }
    if (leftTile.classList.contains("1P-downmid")) {
      return ['DR'];
    }
    if (leftTile.classList.contains("1P-downer")) {
      return ['D', 'DR'];
    }
  }

  // RELATED TO PLAYER TWO PAD
  if (rightTile.classList.contains("playertwo")) {
    if (rightTile.classList.contains("2P-upper")) {
      return ['U', 'UL'];
    }
    if (rightTile.classList.contains("2P-upmid")) {
      return ['UL'];
    }
    if (rightTile.classList.contains("2P-mid")) {
      return ['L'];
    }
    if (rightTile.classList.contains("2P-downmid")) {
      return ['DL'];
    }
    if (rightTile.classList.contains("2P-downer")) {
      return ['D', 'DL'];
    }
  }

  // RELATED TO UP EDGES
  if (upTile.classList.contains("edge")) {
    if (currentDirection[0] === 'U' && currentDirection[1] === 'UR') {
      return ['D', 'DR']
    }
    if (currentDirection[0] === 'UR') {
      return ['DR']
    }
    if (currentDirection[0] === 'U' && currentDirection[1] === 'UL') {
      return ['D', 'DL'];
    }
    if (currentDirection[0] === 'UL') {
      return ['DL']
    }
  }

  // RELATED TO DOWN EDGES
  if (downTile.classList.contains("edge")) {
    if (currentDirection[0] === 'D' && currentDirection[1] === 'DR') {
      return ['U', 'UR'];
    }
    if (currentDirection[0] === 'DR') {
      return ['UR'];
    }
    if (currentDirection[0] === 'D' && currentDirection[1] === 'DL') {
      return ['U', 'UL'];
    }
    if (currentDirection[0] === 'DL') {
      return ['UL'];
    }
  }

  return currentDirection;
};

export default ballRedirect;
