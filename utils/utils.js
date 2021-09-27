export const createHTMLElement = (el) => {
    return document.createElement(el);
};

export const addStyleClass = (el, className) => {
    return el.classList.add(className);
}

export const appendElements = (outerEl, innerEl) => {
    return outerEl.append(innerEl);
}