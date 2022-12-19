

let todoForm = document.querySelector("form");
let textBox = document.querySelector("input[type='text']");
let body = document.querySelector("body");

let todoDiv = document.createElement("div");
let ul = document.createElement("ul");

body.appendChild(todoDiv);
todoDiv.appendChild(ul);

let contentDiv = document.querySelector(".content");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "todoRow");

    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "textDiv");

    let textcontent = document.createElement("p");
    textcontent.innerHTML = `<b>${textBox.value}</b>`;
    textDiv.appendChild(textcontent);
    rowDiv.appendChild(textDiv);

    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "iconDiv");

    let done = document.createElement("a");

    done.setAttribute("class", "doneElement");
    done.innerText = "Done";
    iconDiv.appendChild(done);

    let iconAnchor = document.createElement("a");

    let icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-trash");
    iconAnchor.appendChild(icon);
    iconDiv.appendChild(iconAnchor);
    rowDiv.appendChild(iconDiv);
    contentDiv.appendChild(rowDiv);
    textBox.value = "";
});


contentDiv.addEventListener("click", (e) => {
    // console.dir(e.target); //gives us the node upon which the click is made
    if (e.target.nodeName === "I") {
        let todoRow = e.target.parentElement.parentElement.parentElement;
        todoRow.remove();
    }

    if (e.target.nodeName === "A" && e.target.className === "doneElement") {
        console.dir(e.target.parentElement.parentElement);
        let para = e.target.parentElement.parentElement.childNodes[0].childNodes[0];

        e.target.innerText === "Done" ? e.target.innerText = "Undone" : e.target.innerText = "Done";
        para.classList.toggle("lineStrike");
    }
});