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
    title.innerText = "🎂Happy Birthday CybriaGames🎉";

    const message = document.createElement("p");
    message.innerText = "Today is July 15, CybriaGame's Official Birthday!!";

    popupHeader.appendChild(closeButton);
    popupBody.appendChild(title);
    popupBody.appendChild(message);
    popupContent.appendChild(popupHeader);
    popupContent.appendChild(popupBody);
    birthdayPopup.appendChild(popupContent);
    document.body.appendChild(birthdayPopup);

    const today = new Date();
    const currentYear = today.getFullYear();
    const lastPopupDate = localStorage.getItem('lastPopupDate');

    if (today.getMonth() === 6 && today.getDate() === 15) { 
        if (!lastPopupDate || lastPopupDate !== currentYear.toString()) {
            birthdayPopup.style.display = "block";
            localStorage.setItem('lastPopupDate', currentYear.toString());

            closeButton.addEventListener("click", () => {
                birthdayPopup.style.transform = "scale(0.5)";
                birthdayPopup.style.opacity = "0";
                setTimeout(() => {
                    birthdayPopup.style.display = "none";
                }, 400);
            });
        }
    }
});
