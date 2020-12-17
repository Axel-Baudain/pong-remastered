const fetchNextPos = (xPos, yPos, providedDirection) => {
  switch (providedDirection) {
    default:
      break;

    // UP
    case 'U':
      return [xPos, yPos - 1];

    // UP RIGHT
    case 'UR':
      return [xPos + 1, yPos - 1];

    // RIGHT
    case 'R':
      return [xPos + 1, yPos];

    // DOWN RIGHT
    case 'DR':
      return [xPos + 1, yPos + 1];

    // DOWN
    case 'D':
      return [xPos, yPos + 1];

    // DOWN LEFT
    case 'DL':
      return [xPos - 1, yPos + 1];

    // LEFT
    case 'L':
      return [xPos - 1, yPos];

    // UP LEFT
    case 'UL':
      return [xPos - 1, yPos - 1];
  }
}

export default fetchNextPos;