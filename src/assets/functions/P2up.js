const P2up = () => {
  let oldYPosition = [];
  let playertwo = document.querySelectorAll('.playertwo');

  const classPositions = [
    '2P-upper',
    '2P-upmid',
    '2P-mid',
    '2P-downmid',
    '2P-downer'
  ];

  playertwo.forEach((cell) => {
    oldYPosition.push(cell.dataset.y);
  })

  let newPosition = oldYPosition.map((oldposition) => parseInt(oldposition) - 1);
  let iterate = 0;

  if (!newPosition.includes(-1)) {
    playertwo.forEach((cell) => {
    cell.classList.remove('playertwo');
    cell.classList.remove('2P-upper');
    cell.classList.remove('2P-upmid');
    cell.classList.remove('2P-mid');
    cell.classList.remove('2P-downmid');
    cell.classList.remove('2P-downer');
    });

    newPosition.forEach((newPosition) => {
      let targettedCell = document.querySelector(`[data-x="70"][data-y="${newPosition}"]`);
      targettedCell.classList.add('playertwo');
      targettedCell.classList.add(classPositions[iterate]);
      iterate++;
    })
  } else {
    return;
  }
};

export default P2up;