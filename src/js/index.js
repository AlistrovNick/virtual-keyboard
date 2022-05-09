import { initPage } from './initPage';
import { init as initKeyboard, getKeyboard } from './initKeyboard';
import { keyDown, keyUp } from './keyEvents';
import { mouseDown, mouseUp } from './mouseEvents';

initPage();
const keys = initKeyboard();
document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);
const keyboard = getKeyboard();
keyboard.addEventListener('mousedown', mouseDown);
keyboard.addEventListener('mouseup', mouseUp);
window.lang = "eng";


