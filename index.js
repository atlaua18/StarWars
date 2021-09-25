const root = document.getElementById("root");
const mainDiv = document.createElement("div");
const header = document.createElement("header");
const content = document.createElement("div");
const navbar = document.createElement("nav");
const navbarUl = document.createElement("ul");
const backgroundImg = document.createElement("img");
const textContent = document.createElement("div");
const title = document.createElement("h1");
const subtitle = document.createElement("p");
const startBtn = document.createElement("button");

const navbarItems = ["Home", "Preview"];

for(let item of navbarItems) {
    const navbarLi = document.createElement("li");
    const navbarLink = document.createElement("a");
    navbarLi.classList.add("navbarItem");
    navbarLink.textContent = item;
    navbarUl.append(navbarLi);
    navbarLi.append(navbarLink);
}

mainDiv.classList.add("mainDiv");
header.classList.add("header");
content.classList.add("content");
navbarUl.classList.add("navbarUl");
content.classList.add("content");
backgroundImg.classList.add("bgImg");
textContent.classList.add("textContent");
startBtn.classList.add("startBtn");

backgroundImg.setAttribute("src", "./assets/bg_2.png");

const logo = new Image(152, 90);
logo.src = './assets/logo.png';

title.textContent = `Find all your favorite heroes "Star Wars"`;
subtitle.textContent = `You can know the type of heroes, its strenghts, disadvantages and abilities`;
startBtn.textContent = `Start`;

root.append(mainDiv);
mainDiv.append(header, content);
header.append(logo);
header.append(navbar);
navbar.append(navbarUl);
content.append(backgroundImg);
content.append(textContent);
textContent.append(title);
textContent.append(subtitle);
textContent.append(startBtn);