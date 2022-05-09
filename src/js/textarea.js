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

export { textarea };