const fetchNextPos = ( xPos, yPos, providedDirection ) => {
  switch(providedDirection) {
    default:
      break;

    // UP
    case 'U':
      return (yPos - 1);

    // DOWN
    case 'D':
      return (yPos + 1);

    // RIGHT
    case 'R':
      return (xPos + 1);

    // LEFT
    case 'L':
      return (xPos - 1);
  }
}

export default fetchNextPos;