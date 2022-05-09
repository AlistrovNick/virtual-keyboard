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

export {initPage};