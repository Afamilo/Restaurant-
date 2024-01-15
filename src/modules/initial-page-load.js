function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const log =document.createElement('h1');
    log.textContent = text;
    header.appendChild(logo);
    return header;
}