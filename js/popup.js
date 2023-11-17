function createPopup() {
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
    popupContent.style.backgroundColor = "#333333";
    popupContent.style.color = "white";

    const popupHeader = document.createElement("div");
    popupHeader.classList.add("popup-header");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.id = "closePopup";
    closeButton.innerText = "×";
    closeButton.style.color = "white";

    const popupBody = document.createElement("div");
    popupBody.classList.add("popup-body");

    const title = document.createElement("h2");
    title.style.color = "white";
    title.innerText = "🎮 Changelog | Nov 17 🎉";

    const changelogText = `
        • Update 1: New Changelog!
        • Update 2: Added FNAF 3 🐰🔪 (x-88)
        • Update 3: New support page to report & request games n' more.
        `;

    const message = document.createElement("p");
    message.style.color = "white";
    message.innerText = changelogText;

    const dontShowCheckbox = document.createElement("input");
    dontShowCheckbox.setAttribute("type", "checkbox");
    dontShowCheckbox.id = "dontShowCheckbox";
    dontShowCheckbox.style.marginRight = "8px";

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "dontShowCheckbox");
    checkboxLabel.style.color = "white";
    checkboxLabel.innerText = "Don't show me this until the next update";

    const gotItButton = document.createElement("button");
    gotItButton.innerText = "Got It";
    gotItButton.addEventListener("click", () => {
        const checkbox = document.getElementById("dontShowCheckbox");
        if (checkbox.checked) {
            document.cookie = "popupChecked=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        } else {
            document.cookie = "popupChecked=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }

        const cookies = document.cookie.split(";").map(cookie => cookie.trim());
        const storedVersion = cookies.find(cookie => cookie.startsWith("version="));

        const latestVersion = "1.03"; // Change to your latest version

        if (!(storedVersion && storedVersion.split("=")[1] === latestVersion)) {
            document.cookie = `version=${latestVersion}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }
        
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
    const storedVersion = cookies.find(cookie => cookie.startsWith("version="));

    const latestVersion = "1.03"; 

    if (popupChecked && popupChecked.split("=")[1] === "true" && storedVersion && storedVersion.split("=")[1] === latestVersion) {
        dontShowCheckbox.checked = true;
        popupContent.style.display = "none";
    } else {
        popupContent.style.display = "block";
    }

    closeButton.addEventListener("click", () => {
        if (!dontShowCheckbox.checked) {
            document.cookie = "popupChecked=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }

        const cookies = document.cookie.split(";").map(cookie => cookie.trim());
        const storedVersion = cookies.find(cookie => cookie.startsWith("version="));

        const latestVersion = "1.03";

        if (!(storedVersion && storedVersion.split("=")[1] === latestVersion)) {
            document.cookie = `version=${latestVersion}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }

        popupContent.style.display = "none";
    });
}

window.onload = createPopup;
