import P1up from './P1up';
import P1down from './P1down';
import P2up from './P2up';
import P2down from './P2down';
import ballPaths from './ballEntity';

const dispatchKeydown = (evt) => {

  switch(evt.code) {
    default:
      break;
    case 'KeyL':
      ballPaths.init();
      break;
    // ============== PLAYER ONE CASES ==============
    case 'KeyW':
      // UP
      P1up();
      break;

    case 'KeyS':
      // DOWN
      P1down();
      break;


    // ============== PLAYER TWO CASES ==============
    case 'Numpad8':
      // UP
      P2up();
      break;

    case 'Numpad5':
      // DOWN
      P2down();
      break;
  }
}

export default dispatchKeydown;
