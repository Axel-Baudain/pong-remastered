const checkNextxPos = (XYcoordinates) => {
  const xPos = XYcoordinates[0];

  if (xPos < 0 || xPos > 69) {
    return true
  }

  return true;
};
export default checkNextxPos;
