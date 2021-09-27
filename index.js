import {
    appendElements,
    addStyleClass,
    createHTMLElement,
} from "./utils/utils.js";

const root = document.getElementById("root");

const header = createHTMLElement("header");
const logo = createHTMLElement("img");
const logoLink = createHTMLElement("a");
const navbar = createHTMLElement("nav");
const navbarUl = createHTMLElement("ul");
const banner = createHTMLElement("div");
const backgroundImg = createHTMLElement("img");
const bannerText = createHTMLElement("div");
const title = createHTMLElement("h1");
const subtitle = createHTMLElement("p");
const startBtn = createHTMLElement("button");
const startBtnLink = createHTMLElement("a");

addStyleClass(header, "header");
addStyleClass(banner, "banner");
addStyleClass(navbarUl, "navbar__list");
addStyleClass(backgroundImg, "banner__bgImg");
addStyleClass(bannerText, "banner__info");
addStyleClass(startBtn, "banner__startBtn");

const navbarItems = ["Home", "Preview"];

for (let item of navbarItems) {
    const navbarLi = createHTMLElement("li");
    const navbarLink = createHTMLElement("a");
    navbarLink.setAttribute("href", `/${item.toLowerCase()}.html`);
    navbarLink.textContent = item;
    appendElements(navbarUl, navbarLi);
    appendElements(navbarLi, navbarLink);
}

backgroundImg.setAttribute("src", "./assets/bg_2.png");
logo.setAttribute("src", "./assets/logo.png");
logoLink.setAttribute("href", "/index.html");

// const logo = new Image(152, 90);
// logo.src = './assets/logo.png';

title.textContent = `Find all your favorite heroes "Star Wars"`;
subtitle.textContent = `You can know the type of heroes, its strengths, disadvantages and abilities`;
startBtn.textContent = `Start`;

startBtnLink.setAttribute(
    "href",
    `/${startBtn.textContent.toLowerCase()}.html`
);

appendElements(root, header);
appendElements(root, banner);
appendElements(header, logoLink);
appendElements(logoLink, logo);
appendElements(header, navbar);
appendElements(navbar, navbarUl);
appendElements(banner, backgroundImg);
appendElements(banner, bannerText);
appendElements(bannerText, title);
appendElements(bannerText, subtitle);
appendElements(bannerText, startBtnLink);
appendElements(startBtnLink, startBtn);

function appendText(text) {
    if (history.state.url === "/index.html") {
        banner.innerHTML = "";
        appendElements(banner, backgroundImg);
        appendElements(banner, bannerText);
    } else {
        banner.innerHTML = "";
        banner.innerHTML = text;
    }
    console.log(history.state);
}

// функция для ссылок обрабатывается при клике на ссылку
function handlerAnchors() {
    // заполним хранилище чем нибудь
    let state = {
        title: null,
        url: this.getAttribute("href", 2), // двоечка нужна для ИЕ6-7
    };

    // заносим ссылку в историю
    history.pushState(state, state.title, state.url);

    // тут можете вызвать подгруздку данных и т.п.
    // ...

    appendText(
        "<b>Вы перешли по ссылке:</b> " +
            '<span style="color: green;">' +
            state.url +
            "</span>"
    );

    // не даем выполнить действие по умолчанию
    return false;
}

// ищем все ссылки
let anchors = document.getElementsByTagName("a");

// вешаем события на все ссылки в нашем документе
for (let i = 0; i < anchors.length; i++) {
    anchors[i].onclick = handlerAnchors;
}

// вешаем событие на popstate которое срабатывает
// при нажатии back/forward в браузере
window.onpopstate = function (e) {
    console.log(e);
    // просто сообщение
    appendText(
        "<b>Вы вернулись на страницу:</b> " +
            '<span style="color: green;">' +
            document.location +
            "</span>" +
            '<br/><b>state:</b> <span style="color: green;">' +
            JSON.stringify(history.state) +
            "</span><br/><br/>"
    );
};
