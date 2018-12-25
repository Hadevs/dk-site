// let text = prompt("Введите ваше имя");
// let label = document.getElementById("idTitleLabel");
// label.innerHTML = `Привет, ${text}`

let defaultNavBarWidth = 650;
let miniNavBarWidth = 300;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showRightContainer() {
    document.getElementById("rightContainer").style.opacity = 1;
}

function hideRightContainer() {
    document.getElementById("rightContainer").style.opacity = 0;
}

function showSidePanel(panelName) {
    switch (panelName) {
        case "mini":
            document.getElementById("miniSidenav").style.width = `${miniNavBarWidth}px`;
            document.getElementById("mySidenav").style.width = `${0}px`;
            break;
        case "default":
            document.getElementById("miniSidenav").style.width = `${0}px`;
            document.getElementById("mySidenav").style.width = `100%`;
            break;
    }
}

function cvClicked() {
    const cvLabel = document.getElementById("cvLabel")
    if (cvLabel.innerHTML.includes("•")) {
        //off 
        showSidePanel("default")
        hideCV()
        hideRightContainer()
    } else {
        //on
        showSidePanel("mini")
        openCV()
        showRightContainer()
    }
}
function openCV() {
    const cvLabel = document.getElementById("cvLabel")
    cvLabel.innerHTML += "•"
}

function hideCV() {
    const cvLabel = document.getElementById("cvLabel")
    cvLabel.innerHTML = "CV"
}

showSidePanel("default")
// cvClicked()