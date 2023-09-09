document.addEventListener("DOMContentLoaded", function () {
    const birthdayPopup = document.createElement("div");
    birthdayPopup.classList.add("popup");
    birthdayPopup.id = "birthdayPopup";

    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    const popupHeader = document.createElement("div");
    popupHeader.classList.add("popup-header");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.id = "closePopup";
    closeButton.innerText = "×";

    const popupBody = document.createElement("div");
    popupBody.classList.add("popup-body");

    const title = document.createElement("h2");
    title.innerText = "🎂Happy Birthday Tam🎉";

    const message = document.createElement("p");
    message.innerText = "Today is September 16th, aka Tam's birthday! He made these sites for you, so tell him HAPPY BIRTHDAY!!";

    popupHeader.appendChild(closeButton);
    popupBody.appendChild(title);
    popupBody.appendChild(message);
    popupContent.appendChild(popupHeader);
    popupContent.appendChild(popupBody);
    birthdayPopup.appendChild(popupContent);
    document.body.appendChild(birthdayPopup);

    const today = new Date();
    if (today.getMonth() === 8 && today.getDate() === 16) { // September is month 8 in JavaScript (0-based index)
        birthdayPopup.style.display = "block";

        closeButton.addEventListener("click", () => {
            birthdayPopup.style.transform = "scale(0.5)";
            birthdayPopup.style.opacity = "0";
            setTimeout(() => {
                birthdayPopup.style.display = "none";
            }, 400);
        });
    }
});
