import loadPage from './modules/initial-page-load'
import loadHome from "./modules/home";

init();

function addNavEvents() {
    const homeBtn = document.getElementById('home');


    homeBtn.addEventListener('click', loadHome);
}
function init() {
    loadPage;
    loadHome;
    addNavEvents();
}