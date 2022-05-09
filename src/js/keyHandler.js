import { keys, specialKeys } from './initData';
import { textarea } from './textarea';

function handleShift(mode) {
    let modeName = mode.isShift ? "shifted" : "normal";
    const btnList = document.querySelectorAll(".btn[data-key]");
    for (let i = 0; i < btnList.length; i++) {
        if (!specialKeys.includes(btnList[i].dataset.key)) {
            let keyValue = keys["eng"][modeName][i].value;
            btnList[i].innerHTML = (mode.isCaps && !mode.isShift) || (!mode.isCaps && mode.isShift) ? keyValue.toUpperCase() : keyValue.toLowerCase();
        }
    }
}


const keyHandler = {
    "default": function (mode, key, lang) {
        let modeName = mode.isShift ? "shifted" : "normal";
        let char;
        for (let i = 0; i < keys[lang][modeName].length; i++) {
            if (keys[lang][modeName][i].key === key) {
                char = keys[lang][modeName][i].value;
                break;
            }
        }
        if (char !== undefined) {
            char = (mode.isCaps && !mode.isShift) || (!mode.isCaps && mode.isShift) ? char.toUpperCase() : char.toLowerCase();
            textarea.addChar(char);
        }
    },
    "Backspace": function () {
        textarea.deleteChar();
    },
    "Tab": function () {
        textarea.addChar("\t");
    },
    "Delete": function () {

    },
    "Enter": function () {
        textarea.addChar("\n");
    },
    "CapsLock": function (mode) {
        let isCaps = mode.isCaps && !mode.isShift;
        const btnList = document.querySelectorAll(".btn[data-key]");
        btnList.forEach(btn => {
            if (!specialKeys.includes(btn.dataset.key)) {
                btn.innerHTML = isCaps ? btn.innerHTML.toUpperCase() : btn.innerHTML.toLowerCase();
            }
        });
    },
    "ShiftLeft": function (mode) {
        handleShift(mode);
    },
    "ShiftRight": function (mode) {
        handleShift(mode);
    },
    "ControlLeft": function () {

    },
    "ControlRight": function () {

    },
    "AltLeft": function () {

    },
    "AltRight": function () {

    },
};

export { keyHandler };

