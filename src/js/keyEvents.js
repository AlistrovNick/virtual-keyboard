import { keyHandler } from './keyHandler';

function keyDown(event) {
    let code = event.code;
    let mode = {
        "isShift": event.shiftKey,
        "isCaps": event.getModifierState("CapsLock"),
    };
    let lang = window.lang;
    const pressedKey = document.querySelector(`.btn[data-key=${code}]`);
    if (pressedKey) {
        pressedKey.classList.add('active');
        if (keyHandler[code]) {
            keyHandler[code](mode);
        } else {
            keyHandler["default"](mode, code, lang);
        }
    }
}   

function keyUp(event) {
    let code = event.code;
    let mode = {
        "isShift": event.shiftKey,
        "isCaps": event.getModifierState("CapsLock"),
    };
    const pressedKey = document.querySelector(`.btn[data-key=${code}]`);
    if (pressedKey) {
        pressedKey.classList.remove('active');
        if (keyHandler[code]) {
            keyHandler[code](mode);
        }
    }
}

export { keyDown, keyUp };