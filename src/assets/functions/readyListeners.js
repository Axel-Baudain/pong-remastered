import dispatchKeydown from './dispatchKeydown';

const readyListeners = () => {
  window.addEventListener('keydown', dispatchKeydown)
}

export default readyListeners;
