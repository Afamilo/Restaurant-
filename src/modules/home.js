function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'About';

    about.appendChild(title);

    const para = document.createElement('p');
    para.classList.add('section-descrip');
    para.textContent =
    'Kitchen Repblic has the best food from the all whiled world';

    about.appendChild(para);

    return about;
}

function loadHome() {
    const content = document.getElementById('tab-content');

    content.textContent = '';

    const aboutSection = createAboutSection();

    setBtnActive('home');

    content.appendChild(aboutSection);
}

export default loadHome;