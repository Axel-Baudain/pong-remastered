const checkNextPos = (xPos, yPos) => {
  let targettedPos = document.querySelector(`[data-x="${xPos}"][data-y="${yPos}"]`);

  console.log(targettedPos.classList.contains('playertwo'));
};

export default checkNextPos;
