import { keyHandler } from "./keyHandler";

function mouseDown(event) {
    if (!event.target.classList.contains('btn')) {
        return;
    }
    let code = event.target.dataset.key;
    let mode = {
        "isShift": event.shiftKey,
        "isCaps": event.getModifierState("CapsLock"),
    };
    let lang = window.lang;
    event.target.classList.add('active');
    if (keyHandler[code]) {
        keyHandler[code](mode);
    } else {
        keyHandler["default"](mode, code, lang);
    }
}

function mouseUp(event) {
    let code = event.target.dataset.key;
    let mode = {
        "isShift": event.shiftKey,
        "isCaps": event.getModifierState("CapsLock"),
    };
    event.target.classList.remove('active');
    if (keyHandler[code]) {
        keyHandler[code](mode);
    }
}

export { mouseDown, mouseUp };