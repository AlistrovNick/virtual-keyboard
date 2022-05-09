import {keys, specialKeys} from './initData';

function init() {
    let keyboard = document.querySelector('.keyboard');

    for (let i = 0; i < keys["eng"]["normal"].length; i++) {
        let buttonElement = document.createElement('button');
        buttonElement.classList.add('btn');
        if (specialKeys.includes(keys["eng"]["normal"][i].key)) {
            buttonElement.classList.add('btn-dark');
            buttonElement.classList.add(`btn-${keys["eng"]["normal"][i].key.toLowerCase()}`);
        }
        buttonElement.innerHTML = keys["eng"]["normal"][i].value;
        buttonElement.dataset.key = keys["eng"]["normal"][i].key;
        keyboard.append(buttonElement);
    }
    return keys;
}

function getKeyboard() {
    return document.querySelector('.keyboard');
}

export { init, getKeyboard };


