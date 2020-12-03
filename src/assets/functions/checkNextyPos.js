const checkNextyPos = (XYcoordinates) => {
  const yPos = XYcoordinates[1];

  if (yPos < 0 || yPos > 69) {
    return false
  }

  return true;
};
export default checkNextyPos;
