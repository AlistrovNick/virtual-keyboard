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

export { keys, specialKeys };

