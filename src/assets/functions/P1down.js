const P1down = () => {
  let oldYPosition = [];
  let playerone = document.querySelectorAll('.playerone');

  const classPositions = [
    '1P-upper',
    '1P-upmid',
    '1P-mid',
    '1P-downmid',
    '1P-downer'
  ];

  playerone.forEach((cell) => {
    oldYPosition.push(cell.dataset.y);
  })

  let newPosition = oldYPosition.map((oldposition) => parseInt(oldposition) + 1);
  let iterate = 0;

  if (!newPosition.includes(31)) {
    playerone.forEach((cell) => {
    cell.classList.remove('playerone');
    cell.classList.remove('1P-upper');
    cell.classList.remove('1P-upmid');
    cell.classList.remove('1P-mid');
    cell.classList.remove('1P-downmid');
    cell.classList.remove('1P-downer');
    });

    newPosition.forEach((newPosition) => {
      let targettedCell = document.querySelector(`[data-x="1"][data-y="${newPosition}"]`);
      targettedCell.classList.add('playerone');
      targettedCell.classList.add(classPositions[iterate]);
      iterate++;
    })
  } else {
    return;
  }
};

export default P1down;