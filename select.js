const root = document.getElementById("root");

const form = document.createElement("form");
const wrapper = document.createElement("div");

const selectDiv = document.createElement("div");
const select = document.createElement("select");
const option = document.createElement("option");
const overSelect = document.createElement("div");

const checkboxes = document.createElement("div");
const labelOne = document.createElement("label");
const labelTwo = document.createElement("label");
const labelThree = document.createElement("label");

// const spanOne = document.createElement("span");
// const spanTwo = document.createElement("span");
// const spanThree = document.createElement("span");

root.append(form);
form.append(wrapper);
wrapper.append(selectDiv);
selectDiv.append(select);
selectDiv.append(overSelect);
select.append(option);

labelOne.setAttribute("for", "1");
labelTwo.setAttribute("for", "2");
labelThree.setAttribute("for", "3");
checkboxes.setAttribute("id", "checkboxes");
option.setAttribute("id", "selectedOption");
selectDiv.setAttribute("onclick", "showCheckboxes()");

option.textContent = 'Gender';

wrapper.classList.add("wrapper");
selectDiv.classList.add("selectBox");
overSelect.classList.add("overSelect");

wrapper.append(checkboxes);
checkboxes.append(labelOne);
checkboxes.append(labelTwo);
checkboxes.append(labelThree);
// labelOne.append(spanOne);
labelOne.innerHTML = `<input class='input-checkbox' type="checkbox" id="1" /><span class='fake-checkbox'></span>Man`;
labelTwo.innerHTML = `<input class='input-checkbox' type="checkbox" id="2" /><span class='fake-checkbox'></span>Woman`;
labelThree.innerHTML = `<input class='input-checkbox' type="checkbox" id="3" /><span class='fake-checkbox'></span>Undefined`;

let show = true;
function showCheckboxes() {
    let checkboxesId = document.getElementById("checkboxes");

    if (show) {
        checkboxesId.style.display = "flex";
        show = false;
    } else {
        checkboxesId.style.display = "none";
        show = true;
    }
}

document.getElementById("1").addEventListener('click', () => {
    const checked = document.getElementById("1").checked;
    console.log(checked);
    if(checked) {
        option.textContent = labelOne.textContent;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
    } else {
        document.getElementById("2").disabled = false;
        document.getElementById("3").disabled = false;
        option.textContent = 'Gender';
    }
});

document.getElementById("2").addEventListener('click', () => {
    const checked = document.getElementById("2").checked;
    console.log(checked);
    if(checked) {
        option.textContent = labelTwo.textContent;
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
    } else {
        document.getElementById("1").disabled = false;
        document.getElementById("3").disabled = false;
        option.textContent = 'Gender';
    }
})

document.getElementById("3").addEventListener('click', () => {
    const checked = document.getElementById("3").checked;
    console.log(checked);
    if(checked) {
        option.textContent = labelThree.textContent;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
    } else {
        document.getElementById("1").disabled = false;
        document.getElementById("2").disabled = false;
        option.textContent = 'Gender';
    }
});
