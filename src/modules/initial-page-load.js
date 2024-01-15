function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const log =document.createElement('h1');
    log.textContent = text;
    header.appendChild(logo);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    return btn;
}