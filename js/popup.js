function createPopup() {
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
    popupContent.style.backgroundColor = "#333333"; // bg color duh
    popupContent.style.color = "white"; // txt color duhh

    const popupHeader = document.createElement("div");
    popupHeader.classList.add("popup-header");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.id = "closePopup";
    closeButton.innerText = "×";
    closeButton.style.color = "white"; // button

    const popupBody = document.createElement("div");
    popupBody.classList.add("popup-body");

    const title = document.createElement("h2");
    title.innerText = "🎮 Changelog | Nov 17 🕹️";

    const changelogText = `
        - Update 1: Testing This ChangeLog!
        - Update 2: Added FNAF 3
        - Update 3: New support page!
        `;

    const message = document.createElement("p");
    message.innerText = changelogText;

    const dontShowCheckbox = document.createElement("input");
    dontShowCheckbox.setAttribute("type", "checkbox");
    dontShowCheckbox.id = "dontShowCheckbox";
    dontShowCheckbox.style.marginRight = "8px";
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "dontShowCheckbox");
    checkboxLabel.style.color = "white"; // label txt color
    checkboxLabel.innerText = "Don't show me this until the next update";

    const gotItButton = document.createElement("button");
    gotItButton.innerText = "Got It";
    gotItButton.addEventListener("click", () => {
        const checkbox = document.getElementById("dontShowCheckbox");
        if (checkbox.checked) {
            document.cookie = "popupChecked=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
        document.cookie = `version=1.01; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        popupContent.style.display = "none";
    });

    popupHeader.appendChild(closeButton);
    popupBody.appendChild(title);
    popupBody.appendChild(message);
    popupBody.appendChild(dontShowCheckbox);
    popupBody.appendChild(checkboxLabel);
    popupBody.appendChild(gotItButton);
    popupContent.appendChild(popupHeader);
    popupContent.appendChild(popupBody);

    document.body.appendChild(popupContent);

    const cookies = document.cookie.split(";").map(cookie => cookie.trim());
    const popupChecked = cookies.find(cookie => cookie.startsWith("popupChecked="));

    if (popupChecked && popupChecked.split("=")[1] === "true") {
        popupContent.style.display = "none";
    } else {
        popupContent.style.display = "block";
    }

    closeButton.addEventListener("click", () => {
        popupContent.style.display = "none";
    });
}

window.onload = createPopup;
