const P1down = () => {
  console.log('Move down P1');
  let oldYPosition = [];
  let playerone = document.querySelectorAll('.playerone');
  console.log(playerone);

  const classPositions = [
    '1P-upper',
    '1P-upmid',
    '1P-mid',
    '1P-downmid',
    '1Pdown'
  ];

  playerone.forEach((cell) => {
    oldYPosition.push(cell.dataset.y);
  })

  let newPosition = oldYPosition.map((oldposition) => parseInt(oldposition) + 1);
  let iterate = 0;

  console.log(newPosition.includes(31));
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
      let targettedCell = document.querySelector(`[data-x="0"][data-y="${newPosition}"]`);
      targettedCell.classList.add('playerone');
      targettedCell.classList.add(`'${classPositions[iterate]}'`);
      iterate++;
    })
  } else {
    return;
  }
};

export default P1down;