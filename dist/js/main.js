/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/initData.js":
/*!****************************!*\
  !*** ./src/js/initData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "specialKeys": () => (/* binding */ specialKeys)
/* harmony export */ });
const keys = {
    "eng": {
        "normal":
            [
                { "key": "Backquote", "value": "`" }, { "key": "Digit1", "value": "1" }, { "key": "Digit2", "value": "2" }, { "key": "Digit3", "value": "3" }, { "key": "Digit4", "value": "4" }, { "key": "Digit5", "value": "5" }, { "key": "Digit6", "value": "6" }, { "key": "Digit7", "value": "7" }, { "key": "Digit8", "value": "8" }, { "key": "Digit9", "value": "9" }, { "key": "Digit0", "value": "0" }, { "key": "Minus", "value": "-" }, { "key": "Equal", "value": "=" }, { "key": "Backspace", "value": "Backspace" },
                { "key": "Tab", "value": "Tab" }, { "key": "KeyQ", "value": "q" }, { "key": "KeyW", "value": "w" }, { "key": "KeyE", "value": "e" }, { "key": "KeyR", "value": "r" }, { "key": "KeyT", "value": "t" }, { "key": "KeyY", "value": "y" }, { "key": "KeyU", "value": "u" }, { "key": "KeyI", "value": "i" }, { "key": "KeyO", "value": "o" }, { "key": "KeyP", "value": "p" }, { "key": "BracketLeft", "value": "[" }, { "key": "BracketRight", "value": "]" }, { "key": "Backslash", "value": "\\ " }, { "key": "Delete", "value": "Del" },
                { "key": "CapsLock", "value": "CapsLock" }, { "key": "KeyA", "value": "a" }, { "key": "KeyS", "value": "s" }, { "key": "KeyD", "value": "d" }, { "key": "KeyF", "value": "f" }, { "key": "KeyG", "value": "g" }, { "key": "KeyH", "value": "h" }, { "key": "KeyJ", "value": "j" }, { "key": "KeyK", "value": "k" }, { "key": "KeyL", "value": "l" }, { "key": "Semicolon", "value": ";" }, { "key": "Quote", "value": "'" }, { "key": "Enter", "value": "Enter" },
                { "key": "ShiftLeft", "value": "Shift" }, { "key": "KeyZ", "value": "z" }, { "key": "KeyX", "value": "x" }, { "key": "KeyC", "value": "c" }, { "key": "KeyV", "value": "v" }, { "key": "KeyB", "value": "b" }, { "key": "KeyN", "value": "n" }, { "key": "KeyM", "value": "m" }, { "key": "Comma", "value": "," }, { "key": "Period", "value": "." }, { "key": "Slash", "value": "/" }, { "key": "ArrowUp", "value": "&#9650;" }, { "key": "ShiftRight", "value": "Shift" },
                { "key": "ControlLeft", "value": "Ctrl" }, { "key": "AltLeft", "value": "Alt" }, { "key": "Space", "value": " " }, { "key": "AltRight", "value": "Alt" }, { "key": "ControlRight", "value": "Ctrl" }, { "key": "ArrowLeft", "value": "&#9668;" }, { "key": "ArrowDown", "value": "&#9660;" }, { "key": "ArrowRight", "value": "&#9658;" }
            ],
        "shifted":
            [
                { "key": "Backquote", "value": "~" }, { "key": "Digit1", "value": "!" }, { "key": "Digit2", "value": "@" }, { "key": "Digit3", "value": "#" }, { "key": "Digit4", "value": "$" }, { "key": "Digit5", "value": "%" }, { "key": "Digit6", "value": "^" }, { "key": "Digit7", "value": "&" }, { "key": "Digit8", "value": "*" }, { "key": "Digit9", "value": "(" }, { "key": "Digit0", "value": ")" }, { "key": "Minus", "value": "_" }, { "key": "Equal", "value": "+" }, { "key": "Backspace", "value": "Backspace" },
                { "key": "Tab", "value": "Tab" }, { "key": "KeyQ", "value": "Q" }, { "key": "KeyW", "value": "W" }, { "key": "KeyE", "value": "E" }, { "key": "KeyR", "value": "R" }, { "key": "KeyT", "value": "T" }, { "key": "KeyY", "value": "Y" }, { "key": "KeyU", "value": "U" }, { "key": "KeyI", "value": "I" }, { "key": "KeyO", "value": "O" }, { "key": "KeyP", "value": "P" }, { "key": "BracketLeft", "value": "{" }, { "key": "BracketRight", "value": "}" }, { "key": "Backslash", "value": "|" },  { "key": "Delete", "value": "Del" },
                { "key": "CapsLock", "value": "CapsLock" }, { "key": "KeyA", "value": "A" }, { "key": "KeyS", "value": "S" }, { "key": "KeyD", "value": "D" }, { "key": "KeyF", "value": "F" }, { "key": "KeyG", "value": "G" }, { "key": "KeyH", "value": "H" }, { "key": "KeyJ", "value": "J" }, { "key": "KeyK", "value": "K" }, { "key": "KeyL", "value": "L" }, { "key": "Semicolon", "value": ":" }, { "key": "Quote", "value": "\"" }, { "key": "Enter", "value": "Enter" },
                { "key": "ShiftLeft", "value": "Shift" }, { "key": "KeyZ", "value": "Z" }, { "key": "KeyX", "value": "X" }, { "key": "KeyC", "value": "C" }, { "key": "KeyV", "value": "V" }, { "key": "KeyB", "value": "B" }, { "key": "KeyN", "value": "N" }, { "key": "KeyM", "value": "M" }, { "key": "Comma", "value": "<" }, { "key": "Period", "value": ">" }, { "key": "Slash", "value": "?" },  { "key": "ShiftRight", "value": "Shift" },
                { "key": "ControlLeft", "value": "Ctrl" }, { "key": "AltLeft", "value": "Alt" }, { "key": "Space", "value": " " }, { "key": "AltRight", "value": "Alt" }, { "key": "ControlRight", "value": "Ctrl" }, { "key": "ArrowLeft", "value": "&#9668;" }, { "key": "ArrowDown", "value": "&#9660;" }, { "key": "ArrowRight", "value": "&#9658;" }
            ]
    }
};

const specialKeys = [
    "Backspace", "Tab", "CapsLock", "Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "AltLeft", "AltRight", "ControlRight", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "Space", "Delete"
];





/***/ }),

/***/ "./src/js/initKeyboard.js":
/*!********************************!*\
  !*** ./src/js/initKeyboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getKeyboard": () => (/* binding */ getKeyboard),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _initData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initData */ "./src/js/initData.js");


function init() {
    let keyboard = document.querySelector('.keyboard');

    for (let i = 0; i < _initData__WEBPACK_IMPORTED_MODULE_0__.keys.eng.normal.length; i++) {
        let buttonElement = document.createElement('button');
        buttonElement.classList.add('btn');
        if (_initData__WEBPACK_IMPORTED_MODULE_0__.specialKeys.includes(_initData__WEBPACK_IMPORTED_MODULE_0__.keys.eng.normal[i].key)) {
            buttonElement.classList.add('btn-dark');
            buttonElement.classList.add(`btn-${_initData__WEBPACK_IMPORTED_MODULE_0__.keys.eng.normal[i].key.toLowerCase()}`);
        }
        buttonElement.innerHTML = _initData__WEBPACK_IMPORTED_MODULE_0__.keys.eng.normal[i].value;
        buttonElement.dataset.key = _initData__WEBPACK_IMPORTED_MODULE_0__.keys.eng.normal[i].key;
        keyboard.append(buttonElement);
    }
    return _initData__WEBPACK_IMPORTED_MODULE_0__.keys;
}

function getKeyboard() {
    return document.querySelector('.keyboard');
}






/***/ }),

/***/ "./src/js/initPage.js":
/*!****************************!*\
  !*** ./src/js/initPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPage": () => (/* binding */ initPage)
/* harmony export */ });
function initPage() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const textarea = document.createElement('div');
    textarea.classList.add('textarea');
    const textareaContent = document.createElement('pre');
    textarea.append(textareaContent);
    wrapper.append(textarea);
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    wrapper.append(keyboard);
    document.body.append(wrapper);
}



/***/ }),

/***/ "./src/js/keyEvents.js":
/*!*****************************!*\
  !*** ./src/js/keyEvents.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyDown": () => (/* binding */ keyDown),
/* harmony export */   "keyUp": () => (/* binding */ keyUp)
/* harmony export */ });
/* harmony import */ var _keyHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyHandler */ "./src/js/keyHandler.js");


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
        if (_keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code]) {
            _keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code](mode);
        } else {
            _keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler["default"](mode, code, lang);
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
        if (_keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code]) {
            _keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code](mode);
        }
    }
}



/***/ }),

/***/ "./src/js/keyHandler.js":
/*!******************************!*\
  !*** ./src/js/keyHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyHandler": () => (/* binding */ keyHandler)
/* harmony export */ });
/* harmony import */ var _initData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initData */ "./src/js/initData.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ "./src/js/textarea.js");



function handleShift(mode) {
    let modeName = mode.isShift ? "shifted" : "normal";
    const btnList = document.querySelectorAll(".btn[data-key]");
    for (let i = 0; i < btnList.length; i++) {
        if (!_initData__WEBPACK_IMPORTED_MODULE_0__.specialKeys.includes(btnList[i].dataset.key)) {
            let keyValue = _initData__WEBPACK_IMPORTED_MODULE_0__.keys.eng[modeName][i].value;
            btnList[i].innerHTML = (mode.isCaps && !mode.isShift) || (!mode.isCaps && mode.isShift) ? keyValue.toUpperCase() : keyValue.toLowerCase();
        }
    }
}


const keyHandler = {
    "default": function (mode, key, lang) {
        let modeName = mode.isShift ? "shifted" : "normal";
        let char;
        for (let i = 0; i < _initData__WEBPACK_IMPORTED_MODULE_0__.keys[lang][modeName].length; i++) {
            if (_initData__WEBPACK_IMPORTED_MODULE_0__.keys[lang][modeName][i].key === key) {
                char = _initData__WEBPACK_IMPORTED_MODULE_0__.keys[lang][modeName][i].value;
                break;
            }
        }
        if (char !== undefined) {
            char = (mode.isCaps && !mode.isShift) || (!mode.isCaps && mode.isShift) ? char.toUpperCase() : char.toLowerCase();
            _textarea__WEBPACK_IMPORTED_MODULE_1__.textarea.addChar(char);
        }
    },
    "Backspace": function () {
        _textarea__WEBPACK_IMPORTED_MODULE_1__.textarea.deleteChar();
    },
    "Tab": function () {
        _textarea__WEBPACK_IMPORTED_MODULE_1__.textarea.addChar("\t");
    },
    "Delete": function () {

    },
    "Enter": function () {
        _textarea__WEBPACK_IMPORTED_MODULE_1__.textarea.addChar("\n");
    },
    "CapsLock": function (mode) {
        let isCaps = mode.isCaps && !mode.isShift;
        const btnList = document.querySelectorAll(".btn[data-key]");
        btnList.forEach(btn => {
            if (!_initData__WEBPACK_IMPORTED_MODULE_0__.specialKeys.includes(btn.dataset.key)) {
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





/***/ }),

/***/ "./src/js/mouseEvents.js":
/*!*******************************!*\
  !*** ./src/js/mouseEvents.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mouseDown": () => (/* binding */ mouseDown),
/* harmony export */   "mouseUp": () => (/* binding */ mouseUp)
/* harmony export */ });
/* harmony import */ var _keyHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyHandler */ "./src/js/keyHandler.js");


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
    if (_keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code]) {
        _keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code](mode);
    } else {
        _keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler["default"](mode, code, lang);
    }
}

function mouseUp(event) {
    let code = event.target.dataset.key;
    let mode = {
        "isShift": event.shiftKey,
        "isCaps": event.getModifierState("CapsLock"),
    };
    event.target.classList.remove('active');
    if (_keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code]) {
        _keyHandler__WEBPACK_IMPORTED_MODULE_0__.keyHandler[code](mode);
    }
}



/***/ }),

/***/ "./src/js/textarea.js":
/*!****************************!*\
  !*** ./src/js/textarea.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textarea": () => (/* binding */ textarea)
/* harmony export */ });
const textarea = {
    addChar: function (char) {
        const input = document.querySelector('.textarea > pre');
        input.innerHTML += char;
    },

    deleteChar: function () {
        const input = document.querySelector('.textarea > pre');
        let text = [...input.innerHTML];
        if (text.length === 0) {
            return;
        }
        text.length = text.length - 1;
        input.innerHTML = text.join("");
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ "./src/js/initPage.js");
/* harmony import */ var _initKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initKeyboard */ "./src/js/initKeyboard.js");
/* harmony import */ var _keyEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyEvents */ "./src/js/keyEvents.js");
/* harmony import */ var _mouseEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouseEvents */ "./src/js/mouseEvents.js");





(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initPage)();
const keys = (0,_initKeyboard__WEBPACK_IMPORTED_MODULE_1__.init)();
document.body.addEventListener('keydown', _keyEvents__WEBPACK_IMPORTED_MODULE_2__.keyDown);
document.body.addEventListener('keyup', _keyEvents__WEBPACK_IMPORTED_MODULE_2__.keyUp);
const keyboard = (0,_initKeyboard__WEBPACK_IMPORTED_MODULE_1__.getKeyboard)();
keyboard.addEventListener('mousedown', _mouseEvents__WEBPACK_IMPORTED_MODULE_3__.mouseDown);
keyboard.addEventListener('mouseup', _mouseEvents__WEBPACK_IMPORTED_MODULE_3__.mouseUp);
window.lang = "eng";



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUM2QjtBQUN0QjtBQUNNO0FBQ25EO0FBQ0EsbURBQVE7QUFDUixhQUFhLG1EQUFZO0FBQ3pCLDBDQUEwQywrQ0FBTztBQUNqRCx3Q0FBd0MsNkNBQUs7QUFDN0MsaUJBQWlCLDBEQUFXO0FBQzVCLHVDQUF1QyxtREFBUztBQUNoRCxxQ0FBcUMsaURBQU87QUFDNUM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxpc3Ryb3ZuaWNrLUpTRkUyMDIyUTEvLi9zcmMvanMvaW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vYWxpc3Ryb3ZuaWNrLUpTRkUyMDIyUTEvLi9zcmMvanMvaW5pdEtleWJvYXJkLmpzIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExLy4vc3JjL2pzL2luaXRQYWdlLmpzIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExLy4vc3JjL2pzL2tleUV2ZW50cy5qcyIsIndlYnBhY2s6Ly9hbGlzdHJvdm5pY2stSlNGRTIwMjJRMS8uL3NyYy9qcy9rZXlIYW5kbGVyLmpzIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExLy4vc3JjL2pzL21vdXNlRXZlbnRzLmpzIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExLy4vc3JjL2pzL3RleHRhcmVhLmpzIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbGlzdHJvdm5pY2stSlNGRTIwMjJRMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FsaXN0cm92bmljay1KU0ZFMjAyMlExL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWxpc3Ryb3ZuaWNrLUpTRkUyMDIyUTEvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga2V5cyA9IHtcclxuICAgIFwiZW5nXCI6IHtcclxuICAgICAgICBcIm5vcm1hbFwiOlxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiQmFja3F1b3RlXCIsIFwidmFsdWVcIjogXCJgXCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0MVwiLCBcInZhbHVlXCI6IFwiMVwiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDJcIiwgXCJ2YWx1ZVwiOiBcIjJcIiB9LCB7IFwia2V5XCI6IFwiRGlnaXQzXCIsIFwidmFsdWVcIjogXCIzXCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0NFwiLCBcInZhbHVlXCI6IFwiNFwiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDVcIiwgXCJ2YWx1ZVwiOiBcIjVcIiB9LCB7IFwia2V5XCI6IFwiRGlnaXQ2XCIsIFwidmFsdWVcIjogXCI2XCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0N1wiLCBcInZhbHVlXCI6IFwiN1wiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDhcIiwgXCJ2YWx1ZVwiOiBcIjhcIiB9LCB7IFwia2V5XCI6IFwiRGlnaXQ5XCIsIFwidmFsdWVcIjogXCI5XCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0MFwiLCBcInZhbHVlXCI6IFwiMFwiIH0sIHsgXCJrZXlcIjogXCJNaW51c1wiLCBcInZhbHVlXCI6IFwiLVwiIH0sIHsgXCJrZXlcIjogXCJFcXVhbFwiLCBcInZhbHVlXCI6IFwiPVwiIH0sIHsgXCJrZXlcIjogXCJCYWNrc3BhY2VcIiwgXCJ2YWx1ZVwiOiBcIkJhY2tzcGFjZVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiVGFiXCIsIFwidmFsdWVcIjogXCJUYWJcIiB9LCB7IFwia2V5XCI6IFwiS2V5UVwiLCBcInZhbHVlXCI6IFwicVwiIH0sIHsgXCJrZXlcIjogXCJLZXlXXCIsIFwidmFsdWVcIjogXCJ3XCIgfSwgeyBcImtleVwiOiBcIktleUVcIiwgXCJ2YWx1ZVwiOiBcImVcIiB9LCB7IFwia2V5XCI6IFwiS2V5UlwiLCBcInZhbHVlXCI6IFwiclwiIH0sIHsgXCJrZXlcIjogXCJLZXlUXCIsIFwidmFsdWVcIjogXCJ0XCIgfSwgeyBcImtleVwiOiBcIktleVlcIiwgXCJ2YWx1ZVwiOiBcInlcIiB9LCB7IFwia2V5XCI6IFwiS2V5VVwiLCBcInZhbHVlXCI6IFwidVwiIH0sIHsgXCJrZXlcIjogXCJLZXlJXCIsIFwidmFsdWVcIjogXCJpXCIgfSwgeyBcImtleVwiOiBcIktleU9cIiwgXCJ2YWx1ZVwiOiBcIm9cIiB9LCB7IFwia2V5XCI6IFwiS2V5UFwiLCBcInZhbHVlXCI6IFwicFwiIH0sIHsgXCJrZXlcIjogXCJCcmFja2V0TGVmdFwiLCBcInZhbHVlXCI6IFwiW1wiIH0sIHsgXCJrZXlcIjogXCJCcmFja2V0UmlnaHRcIiwgXCJ2YWx1ZVwiOiBcIl1cIiB9LCB7IFwia2V5XCI6IFwiQmFja3NsYXNoXCIsIFwidmFsdWVcIjogXCJcXFxcIFwiIH0sIHsgXCJrZXlcIjogXCJEZWxldGVcIiwgXCJ2YWx1ZVwiOiBcIkRlbFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiQ2Fwc0xvY2tcIiwgXCJ2YWx1ZVwiOiBcIkNhcHNMb2NrXCIgfSwgeyBcImtleVwiOiBcIktleUFcIiwgXCJ2YWx1ZVwiOiBcImFcIiB9LCB7IFwia2V5XCI6IFwiS2V5U1wiLCBcInZhbHVlXCI6IFwic1wiIH0sIHsgXCJrZXlcIjogXCJLZXlEXCIsIFwidmFsdWVcIjogXCJkXCIgfSwgeyBcImtleVwiOiBcIktleUZcIiwgXCJ2YWx1ZVwiOiBcImZcIiB9LCB7IFwia2V5XCI6IFwiS2V5R1wiLCBcInZhbHVlXCI6IFwiZ1wiIH0sIHsgXCJrZXlcIjogXCJLZXlIXCIsIFwidmFsdWVcIjogXCJoXCIgfSwgeyBcImtleVwiOiBcIktleUpcIiwgXCJ2YWx1ZVwiOiBcImpcIiB9LCB7IFwia2V5XCI6IFwiS2V5S1wiLCBcInZhbHVlXCI6IFwia1wiIH0sIHsgXCJrZXlcIjogXCJLZXlMXCIsIFwidmFsdWVcIjogXCJsXCIgfSwgeyBcImtleVwiOiBcIlNlbWljb2xvblwiLCBcInZhbHVlXCI6IFwiO1wiIH0sIHsgXCJrZXlcIjogXCJRdW90ZVwiLCBcInZhbHVlXCI6IFwiJ1wiIH0sIHsgXCJrZXlcIjogXCJFbnRlclwiLCBcInZhbHVlXCI6IFwiRW50ZXJcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBcImtleVwiOiBcIlNoaWZ0TGVmdFwiLCBcInZhbHVlXCI6IFwiU2hpZnRcIiB9LCB7IFwia2V5XCI6IFwiS2V5WlwiLCBcInZhbHVlXCI6IFwielwiIH0sIHsgXCJrZXlcIjogXCJLZXlYXCIsIFwidmFsdWVcIjogXCJ4XCIgfSwgeyBcImtleVwiOiBcIktleUNcIiwgXCJ2YWx1ZVwiOiBcImNcIiB9LCB7IFwia2V5XCI6IFwiS2V5VlwiLCBcInZhbHVlXCI6IFwidlwiIH0sIHsgXCJrZXlcIjogXCJLZXlCXCIsIFwidmFsdWVcIjogXCJiXCIgfSwgeyBcImtleVwiOiBcIktleU5cIiwgXCJ2YWx1ZVwiOiBcIm5cIiB9LCB7IFwia2V5XCI6IFwiS2V5TVwiLCBcInZhbHVlXCI6IFwibVwiIH0sIHsgXCJrZXlcIjogXCJDb21tYVwiLCBcInZhbHVlXCI6IFwiLFwiIH0sIHsgXCJrZXlcIjogXCJQZXJpb2RcIiwgXCJ2YWx1ZVwiOiBcIi5cIiB9LCB7IFwia2V5XCI6IFwiU2xhc2hcIiwgXCJ2YWx1ZVwiOiBcIi9cIiB9LCB7IFwia2V5XCI6IFwiQXJyb3dVcFwiLCBcInZhbHVlXCI6IFwiJiM5NjUwO1wiIH0sIHsgXCJrZXlcIjogXCJTaGlmdFJpZ2h0XCIsIFwidmFsdWVcIjogXCJTaGlmdFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiQ29udHJvbExlZnRcIiwgXCJ2YWx1ZVwiOiBcIkN0cmxcIiB9LCB7IFwia2V5XCI6IFwiQWx0TGVmdFwiLCBcInZhbHVlXCI6IFwiQWx0XCIgfSwgeyBcImtleVwiOiBcIlNwYWNlXCIsIFwidmFsdWVcIjogXCIgXCIgfSwgeyBcImtleVwiOiBcIkFsdFJpZ2h0XCIsIFwidmFsdWVcIjogXCJBbHRcIiB9LCB7IFwia2V5XCI6IFwiQ29udHJvbFJpZ2h0XCIsIFwidmFsdWVcIjogXCJDdHJsXCIgfSwgeyBcImtleVwiOiBcIkFycm93TGVmdFwiLCBcInZhbHVlXCI6IFwiJiM5NjY4O1wiIH0sIHsgXCJrZXlcIjogXCJBcnJvd0Rvd25cIiwgXCJ2YWx1ZVwiOiBcIiYjOTY2MDtcIiB9LCB7IFwia2V5XCI6IFwiQXJyb3dSaWdodFwiLCBcInZhbHVlXCI6IFwiJiM5NjU4O1wiIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBcInNoaWZ0ZWRcIjpcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgeyBcImtleVwiOiBcIkJhY2txdW90ZVwiLCBcInZhbHVlXCI6IFwiflwiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDFcIiwgXCJ2YWx1ZVwiOiBcIiFcIiB9LCB7IFwia2V5XCI6IFwiRGlnaXQyXCIsIFwidmFsdWVcIjogXCJAXCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0M1wiLCBcInZhbHVlXCI6IFwiI1wiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDRcIiwgXCJ2YWx1ZVwiOiBcIiRcIiB9LCB7IFwia2V5XCI6IFwiRGlnaXQ1XCIsIFwidmFsdWVcIjogXCIlXCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0NlwiLCBcInZhbHVlXCI6IFwiXlwiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDdcIiwgXCJ2YWx1ZVwiOiBcIiZcIiB9LCB7IFwia2V5XCI6IFwiRGlnaXQ4XCIsIFwidmFsdWVcIjogXCIqXCIgfSwgeyBcImtleVwiOiBcIkRpZ2l0OVwiLCBcInZhbHVlXCI6IFwiKFwiIH0sIHsgXCJrZXlcIjogXCJEaWdpdDBcIiwgXCJ2YWx1ZVwiOiBcIilcIiB9LCB7IFwia2V5XCI6IFwiTWludXNcIiwgXCJ2YWx1ZVwiOiBcIl9cIiB9LCB7IFwia2V5XCI6IFwiRXF1YWxcIiwgXCJ2YWx1ZVwiOiBcIitcIiB9LCB7IFwia2V5XCI6IFwiQmFja3NwYWNlXCIsIFwidmFsdWVcIjogXCJCYWNrc3BhY2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBcImtleVwiOiBcIlRhYlwiLCBcInZhbHVlXCI6IFwiVGFiXCIgfSwgeyBcImtleVwiOiBcIktleVFcIiwgXCJ2YWx1ZVwiOiBcIlFcIiB9LCB7IFwia2V5XCI6IFwiS2V5V1wiLCBcInZhbHVlXCI6IFwiV1wiIH0sIHsgXCJrZXlcIjogXCJLZXlFXCIsIFwidmFsdWVcIjogXCJFXCIgfSwgeyBcImtleVwiOiBcIktleVJcIiwgXCJ2YWx1ZVwiOiBcIlJcIiB9LCB7IFwia2V5XCI6IFwiS2V5VFwiLCBcInZhbHVlXCI6IFwiVFwiIH0sIHsgXCJrZXlcIjogXCJLZXlZXCIsIFwidmFsdWVcIjogXCJZXCIgfSwgeyBcImtleVwiOiBcIktleVVcIiwgXCJ2YWx1ZVwiOiBcIlVcIiB9LCB7IFwia2V5XCI6IFwiS2V5SVwiLCBcInZhbHVlXCI6IFwiSVwiIH0sIHsgXCJrZXlcIjogXCJLZXlPXCIsIFwidmFsdWVcIjogXCJPXCIgfSwgeyBcImtleVwiOiBcIktleVBcIiwgXCJ2YWx1ZVwiOiBcIlBcIiB9LCB7IFwia2V5XCI6IFwiQnJhY2tldExlZnRcIiwgXCJ2YWx1ZVwiOiBcIntcIiB9LCB7IFwia2V5XCI6IFwiQnJhY2tldFJpZ2h0XCIsIFwidmFsdWVcIjogXCJ9XCIgfSwgeyBcImtleVwiOiBcIkJhY2tzbGFzaFwiLCBcInZhbHVlXCI6IFwifFwiIH0sICB7IFwia2V5XCI6IFwiRGVsZXRlXCIsIFwidmFsdWVcIjogXCJEZWxcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBcImtleVwiOiBcIkNhcHNMb2NrXCIsIFwidmFsdWVcIjogXCJDYXBzTG9ja1wiIH0sIHsgXCJrZXlcIjogXCJLZXlBXCIsIFwidmFsdWVcIjogXCJBXCIgfSwgeyBcImtleVwiOiBcIktleVNcIiwgXCJ2YWx1ZVwiOiBcIlNcIiB9LCB7IFwia2V5XCI6IFwiS2V5RFwiLCBcInZhbHVlXCI6IFwiRFwiIH0sIHsgXCJrZXlcIjogXCJLZXlGXCIsIFwidmFsdWVcIjogXCJGXCIgfSwgeyBcImtleVwiOiBcIktleUdcIiwgXCJ2YWx1ZVwiOiBcIkdcIiB9LCB7IFwia2V5XCI6IFwiS2V5SFwiLCBcInZhbHVlXCI6IFwiSFwiIH0sIHsgXCJrZXlcIjogXCJLZXlKXCIsIFwidmFsdWVcIjogXCJKXCIgfSwgeyBcImtleVwiOiBcIktleUtcIiwgXCJ2YWx1ZVwiOiBcIktcIiB9LCB7IFwia2V5XCI6IFwiS2V5TFwiLCBcInZhbHVlXCI6IFwiTFwiIH0sIHsgXCJrZXlcIjogXCJTZW1pY29sb25cIiwgXCJ2YWx1ZVwiOiBcIjpcIiB9LCB7IFwia2V5XCI6IFwiUXVvdGVcIiwgXCJ2YWx1ZVwiOiBcIlxcXCJcIiB9LCB7IFwia2V5XCI6IFwiRW50ZXJcIiwgXCJ2YWx1ZVwiOiBcIkVudGVyXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCJTaGlmdExlZnRcIiwgXCJ2YWx1ZVwiOiBcIlNoaWZ0XCIgfSwgeyBcImtleVwiOiBcIktleVpcIiwgXCJ2YWx1ZVwiOiBcIlpcIiB9LCB7IFwia2V5XCI6IFwiS2V5WFwiLCBcInZhbHVlXCI6IFwiWFwiIH0sIHsgXCJrZXlcIjogXCJLZXlDXCIsIFwidmFsdWVcIjogXCJDXCIgfSwgeyBcImtleVwiOiBcIktleVZcIiwgXCJ2YWx1ZVwiOiBcIlZcIiB9LCB7IFwia2V5XCI6IFwiS2V5QlwiLCBcInZhbHVlXCI6IFwiQlwiIH0sIHsgXCJrZXlcIjogXCJLZXlOXCIsIFwidmFsdWVcIjogXCJOXCIgfSwgeyBcImtleVwiOiBcIktleU1cIiwgXCJ2YWx1ZVwiOiBcIk1cIiB9LCB7IFwia2V5XCI6IFwiQ29tbWFcIiwgXCJ2YWx1ZVwiOiBcIjxcIiB9LCB7IFwia2V5XCI6IFwiUGVyaW9kXCIsIFwidmFsdWVcIjogXCI+XCIgfSwgeyBcImtleVwiOiBcIlNsYXNoXCIsIFwidmFsdWVcIjogXCI/XCIgfSwgIHsgXCJrZXlcIjogXCJTaGlmdFJpZ2h0XCIsIFwidmFsdWVcIjogXCJTaGlmdFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiQ29udHJvbExlZnRcIiwgXCJ2YWx1ZVwiOiBcIkN0cmxcIiB9LCB7IFwia2V5XCI6IFwiQWx0TGVmdFwiLCBcInZhbHVlXCI6IFwiQWx0XCIgfSwgeyBcImtleVwiOiBcIlNwYWNlXCIsIFwidmFsdWVcIjogXCIgXCIgfSwgeyBcImtleVwiOiBcIkFsdFJpZ2h0XCIsIFwidmFsdWVcIjogXCJBbHRcIiB9LCB7IFwia2V5XCI6IFwiQ29udHJvbFJpZ2h0XCIsIFwidmFsdWVcIjogXCJDdHJsXCIgfSwgeyBcImtleVwiOiBcIkFycm93TGVmdFwiLCBcInZhbHVlXCI6IFwiJiM5NjY4O1wiIH0sIHsgXCJrZXlcIjogXCJBcnJvd0Rvd25cIiwgXCJ2YWx1ZVwiOiBcIiYjOTY2MDtcIiB9LCB7IFwia2V5XCI6IFwiQXJyb3dSaWdodFwiLCBcInZhbHVlXCI6IFwiJiM5NjU4O1wiIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEtleXMgPSBbXHJcbiAgICBcIkJhY2tzcGFjZVwiLCBcIlRhYlwiLCBcIkNhcHNMb2NrXCIsIFwiRW50ZXJcIiwgXCJTaGlmdExlZnRcIiwgXCJTaGlmdFJpZ2h0XCIsIFwiQ29udHJvbExlZnRcIiwgXCJBbHRMZWZ0XCIsIFwiQWx0UmlnaHRcIiwgXCJDb250cm9sUmlnaHRcIiwgXCJBcnJvd1VwXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dEb3duXCIsIFwiQXJyb3dSaWdodFwiLCBcIlNwYWNlXCIsIFwiRGVsZXRlXCJcclxuXTtcclxuXHJcbmV4cG9ydCB7IGtleXMsIHNwZWNpYWxLZXlzIH07XHJcblxyXG4iLCJpbXBvcnQge2tleXMsIHNwZWNpYWxLZXlzfSBmcm9tICcuL2luaXREYXRhJztcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQga2V5Ym9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNbXCJlbmdcIl1bXCJub3JtYWxcIl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgaWYgKHNwZWNpYWxLZXlzLmluY2x1ZGVzKGtleXNbXCJlbmdcIl1bXCJub3JtYWxcIl1baV0ua2V5KSkge1xyXG4gICAgICAgICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J0bi1kYXJrJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgYnRuLSR7a2V5c1tcImVuZ1wiXVtcIm5vcm1hbFwiXVtpXS5rZXkudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSBrZXlzW1wiZW5nXCJdW1wibm9ybWFsXCJdW2ldLnZhbHVlO1xyXG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuZGF0YXNldC5rZXkgPSBrZXlzW1wiZW5nXCJdW1wibm9ybWFsXCJdW2ldLmtleTtcclxuICAgICAgICBrZXlib2FyZC5hcHBlbmQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0S2V5Ym9hcmQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXQsIGdldEtleWJvYXJkIH07XHJcblxyXG5cclxuIiwiZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xyXG4gICAgY29uc3QgdGV4dGFyZWFDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICB0ZXh0YXJlYS5hcHBlbmQodGV4dGFyZWFDb250ZW50KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kKHRleHRhcmVhKTtcclxuICAgIGNvbnN0IGtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBrZXlib2FyZC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xyXG4gICAgd3JhcHBlci5hcHBlbmQoa2V5Ym9hcmQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdFBhZ2V9OyIsImltcG9ydCB7IGtleUhhbmRsZXIgfSBmcm9tICcuL2tleUhhbmRsZXInO1xyXG5cclxuZnVuY3Rpb24ga2V5RG93bihldmVudCkge1xyXG4gICAgbGV0IGNvZGUgPSBldmVudC5jb2RlO1xyXG4gICAgbGV0IG1vZGUgPSB7XHJcbiAgICAgICAgXCJpc1NoaWZ0XCI6IGV2ZW50LnNoaWZ0S2V5LFxyXG4gICAgICAgIFwiaXNDYXBzXCI6IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoXCJDYXBzTG9ja1wiKSxcclxuICAgIH07XHJcbiAgICBsZXQgbGFuZyA9IHdpbmRvdy5sYW5nO1xyXG4gICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idG5bZGF0YS1rZXk9JHtjb2RlfV1gKTtcclxuICAgIGlmIChwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgcHJlc3NlZEtleS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoa2V5SGFuZGxlcltjb2RlXSkge1xyXG4gICAgICAgICAgICBrZXlIYW5kbGVyW2NvZGVdKG1vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGtleUhhbmRsZXJbXCJkZWZhdWx0XCJdKG1vZGUsIGNvZGUsIGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgIFxyXG5cclxuZnVuY3Rpb24ga2V5VXAoZXZlbnQpIHtcclxuICAgIGxldCBjb2RlID0gZXZlbnQuY29kZTtcclxuICAgIGxldCBtb2RlID0ge1xyXG4gICAgICAgIFwiaXNTaGlmdFwiOiBldmVudC5zaGlmdEtleSxcclxuICAgICAgICBcImlzQ2Fwc1wiOiBldmVudC5nZXRNb2RpZmllclN0YXRlKFwiQ2Fwc0xvY2tcIiksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idG5bZGF0YS1rZXk9JHtjb2RlfV1gKTtcclxuICAgIGlmIChwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgcHJlc3NlZEtleS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoa2V5SGFuZGxlcltjb2RlXSkge1xyXG4gICAgICAgICAgICBrZXlIYW5kbGVyW2NvZGVdKG1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsga2V5RG93biwga2V5VXAgfTsiLCJpbXBvcnQgeyBrZXlzLCBzcGVjaWFsS2V5cyB9IGZyb20gJy4vaW5pdERhdGEnO1xyXG5pbXBvcnQgeyB0ZXh0YXJlYSB9IGZyb20gJy4vdGV4dGFyZWEnO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2hpZnQobW9kZSkge1xyXG4gICAgbGV0IG1vZGVOYW1lID0gbW9kZS5pc1NoaWZ0ID8gXCJzaGlmdGVkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgY29uc3QgYnRuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuW2RhdGEta2V5XVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghc3BlY2lhbEtleXMuaW5jbHVkZXMoYnRuTGlzdFtpXS5kYXRhc2V0LmtleSkpIHtcclxuICAgICAgICAgICAgbGV0IGtleVZhbHVlID0ga2V5c1tcImVuZ1wiXVttb2RlTmFtZV1baV0udmFsdWU7XHJcbiAgICAgICAgICAgIGJ0bkxpc3RbaV0uaW5uZXJIVE1MID0gKG1vZGUuaXNDYXBzICYmICFtb2RlLmlzU2hpZnQpIHx8ICghbW9kZS5pc0NhcHMgJiYgbW9kZS5pc1NoaWZ0KSA/IGtleVZhbHVlLnRvVXBwZXJDYXNlKCkgOiBrZXlWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGtleUhhbmRsZXIgPSB7XHJcbiAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gKG1vZGUsIGtleSwgbGFuZykge1xyXG4gICAgICAgIGxldCBtb2RlTmFtZSA9IG1vZGUuaXNTaGlmdCA/IFwic2hpZnRlZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICBsZXQgY2hhcjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNbbGFuZ11bbW9kZU5hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlzW2xhbmddW21vZGVOYW1lXVtpXS5rZXkgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IGtleXNbbGFuZ11bbW9kZU5hbWVdW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjaGFyID0gKG1vZGUuaXNDYXBzICYmICFtb2RlLmlzU2hpZnQpIHx8ICghbW9kZS5pc0NhcHMgJiYgbW9kZS5pc1NoaWZ0KSA/IGNoYXIudG9VcHBlckNhc2UoKSA6IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGV4dGFyZWEuYWRkQ2hhcihjaGFyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJCYWNrc3BhY2VcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRleHRhcmVhLmRlbGV0ZUNoYXIoKTtcclxuICAgIH0sXHJcbiAgICBcIlRhYlwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGV4dGFyZWEuYWRkQ2hhcihcIlxcdFwiKTtcclxuICAgIH0sXHJcbiAgICBcIkRlbGV0ZVwiOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIFwiRW50ZXJcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRleHRhcmVhLmFkZENoYXIoXCJcXG5cIik7XHJcbiAgICB9LFxyXG4gICAgXCJDYXBzTG9ja1wiOiBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgIGxldCBpc0NhcHMgPSBtb2RlLmlzQ2FwcyAmJiAhbW9kZS5pc1NoaWZ0O1xyXG4gICAgICAgIGNvbnN0IGJ0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bltkYXRhLWtleV1cIik7XHJcbiAgICAgICAgYnRuTGlzdC5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3BlY2lhbEtleXMuaW5jbHVkZXMoYnRuLmRhdGFzZXQua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGlzQ2FwcyA/IGJ0bi5pbm5lckhUTUwudG9VcHBlckNhc2UoKSA6IGJ0bi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFwiU2hpZnRMZWZ0XCI6IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgaGFuZGxlU2hpZnQobW9kZSk7XHJcbiAgICB9LFxyXG4gICAgXCJTaGlmdFJpZ2h0XCI6IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgaGFuZGxlU2hpZnQobW9kZSk7XHJcbiAgICB9LFxyXG4gICAgXCJDb250cm9sTGVmdFwiOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIFwiQ29udHJvbFJpZ2h0XCI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgXCJBbHRMZWZ0XCI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgXCJBbHRSaWdodFwiOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGtleUhhbmRsZXIgfTtcclxuXHJcbiIsImltcG9ydCB7IGtleUhhbmRsZXIgfSBmcm9tIFwiLi9rZXlIYW5kbGVyXCI7XHJcblxyXG5mdW5jdGlvbiBtb3VzZURvd24oZXZlbnQpIHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgY29kZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleTtcclxuICAgIGxldCBtb2RlID0ge1xyXG4gICAgICAgIFwiaXNTaGlmdFwiOiBldmVudC5zaGlmdEtleSxcclxuICAgICAgICBcImlzQ2Fwc1wiOiBldmVudC5nZXRNb2RpZmllclN0YXRlKFwiQ2Fwc0xvY2tcIiksXHJcbiAgICB9O1xyXG4gICAgbGV0IGxhbmcgPSB3aW5kb3cubGFuZztcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGlmIChrZXlIYW5kbGVyW2NvZGVdKSB7XHJcbiAgICAgICAga2V5SGFuZGxlcltjb2RlXShtb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAga2V5SGFuZGxlcltcImRlZmF1bHRcIl0obW9kZSwgY29kZSwgbGFuZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlVXAoZXZlbnQpIHtcclxuICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5O1xyXG4gICAgbGV0IG1vZGUgPSB7XHJcbiAgICAgICAgXCJpc1NoaWZ0XCI6IGV2ZW50LnNoaWZ0S2V5LFxyXG4gICAgICAgIFwiaXNDYXBzXCI6IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoXCJDYXBzTG9ja1wiKSxcclxuICAgIH07XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBpZiAoa2V5SGFuZGxlcltjb2RlXSkge1xyXG4gICAgICAgIGtleUhhbmRsZXJbY29kZV0obW9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1vdXNlRG93biwgbW91c2VVcCB9OyIsImNvbnN0IHRleHRhcmVhID0ge1xyXG4gICAgYWRkQ2hhcjogZnVuY3Rpb24gKGNoYXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0YXJlYSA+IHByZScpO1xyXG4gICAgICAgIGlucHV0LmlubmVySFRNTCArPSBjaGFyO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVDaGFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEgPiBwcmUnKTtcclxuICAgICAgICBsZXQgdGV4dCA9IFsuLi5pbnB1dC5pbm5lckhUTUxdO1xyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHQubGVuZ3RoID0gdGV4dC5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IHRleHQuam9pbihcIlwiKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHRleHRhcmVhIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0UGFnZSB9IGZyb20gJy4vaW5pdFBhZ2UnO1xyXG5pbXBvcnQgeyBpbml0IGFzIGluaXRLZXlib2FyZCwgZ2V0S2V5Ym9hcmQgfSBmcm9tICcuL2luaXRLZXlib2FyZCc7XHJcbmltcG9ydCB7IGtleURvd24sIGtleVVwIH0gZnJvbSAnLi9rZXlFdmVudHMnO1xyXG5pbXBvcnQgeyBtb3VzZURvd24sIG1vdXNlVXAgfSBmcm9tICcuL21vdXNlRXZlbnRzJztcclxuXHJcbmluaXRQYWdlKCk7XHJcbmNvbnN0IGtleXMgPSBpbml0S2V5Ym9hcmQoKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bik7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcCk7XHJcbmNvbnN0IGtleWJvYXJkID0gZ2V0S2V5Ym9hcmQoKTtcclxua2V5Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duKTtcclxua2V5Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xyXG53aW5kb3cubGFuZyA9IFwiZW5nXCI7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9