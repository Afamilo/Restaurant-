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

function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id',id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}