import { appendElements, addStyleClass, createHTMLElement } from "./utils/utils.js";

const root = document.getElementById("root");

const header = createHTMLElement("header");
const banner = createHTMLElement("div");
const navbar = createHTMLElement("nav");
const navbarUl = createHTMLElement("ul");
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

for(let item of navbarItems) {
    const navbarLi = createHTMLElement("li");
    const navbarLink = createHTMLElement("a");
    navbarLink.setAttribute("href", `/${item.toLowerCase()}.html`);
    navbarLink.textContent = item;
    appendElements(navbarUl, navbarLi);
    appendElements(navbarLi, navbarLink);
};

backgroundImg.setAttribute("src", "./assets/bg_2.png");

const logo = new Image(152, 90);
logo.src = './assets/logo.png';

title.textContent = `Find all your favorite heroes "Star Wars"`;
subtitle.textContent = `You can know the type of heroes, its strengths, disadvantages and abilities`;
startBtn.textContent = `Start`;

startBtnLink.setAttribute("href", `/${startBtn.textContent.toLowerCase()}.html`);

appendElements(root, header);
appendElements(root, banner);
appendElements(header, logo);
appendElements(header, navbar);
appendElements(navbar, navbarUl);
appendElements(banner, backgroundImg);
appendElements(banner, bannerText);
appendElements(bannerText, title);
appendElements(bannerText, subtitle);
appendElements(bannerText, startBtnLink);
appendElements(startBtnLink, startBtn);