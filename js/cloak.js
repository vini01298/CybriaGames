document.addEventListener("DOMContentLoaded", function () {
  var faviconURLInput = document.getElementById("faviconURL");
  var urlTitleInput = document.getElementById("urlTitle");
  var enableHistoryHiderSwitch = document.getElementById("historyHiderSwitch");
  var schoologyCloaker = document.getElementById("schoologyCloaker");
  var cfisdCloaker = document.getElementById("cfisdCloaker");
  var googleCloaker = document.getElementById("googleCloaker");
  var defaultCloaker = document.getElementById("defaultCloaker");

  // Function to update localStorage when inputs change
  function updateLocalStorage() {
    localStorage.setItem("faviconURL", faviconURLInput.value);
    localStorage.setItem("urlTitle", urlTitleInput.value);
    localStorage.setItem("historyHiderEnabled", enableHistoryHiderSwitch.checked);
  }

  // Function to hide a webpage from the browser's history
  function hideFromHistory() {
    // Check if the browser supports the 'pushState' method (HTML5 History API)
    if (window.history && window.history.pushState) {
      // Replace the current URL with a new one to hide it from the history
      const hiddenUrl = '/hidden-page'; // Change this to the URL you want to hide
      const pageTitle = 'Hidden Page'; // Change this to the title of the hidden page

      // Push a new state with the hidden URL and title
      window.history.pushState({ path: hiddenUrl }, pageTitle, hiddenUrl);
    }
  }

  // Function to show a webpage in the browser's history
  function showInHistory() {
    // Check if the browser supports the 'replaceState' method (HTML5 History API)
    if (window.history && window.history.replaceState) {
      // Replace the current URL with the original one to show it in history
      const originalUrl = window.location.pathname; // Use the original URL
      const originalTitle = document.title; // Use the original page title

      // Replace the current state with the original URL and title
      window.history.replaceState({}, originalTitle, originalUrl);
    }
  }

  // Set initial values based on stored data or defaults
  var storedFaviconURL = localStorage.getItem("faviconURL");
  var storedUrlTitle = localStorage.getItem("urlTitle");
  var isHistoryHiderEnabled = localStorage.getItem("historyHiderEnabled") === "true";

  if (storedFaviconURL) {
    faviconURLInput.value = storedFaviconURL;
  }

  if (storedUrlTitle) {
    urlTitleInput.value = storedUrlTitle;
  }

  enableHistoryHiderSwitch.checked = isHistoryHiderEnabled;

  // Add event listeners for input changes
  faviconURLInput.addEventListener("input", updateLocalStorage);
  urlTitleInput.addEventListener("input", updateLocalStorage);
  enableHistoryHiderSwitch.addEventListener("change", function () {
    updateLocalStorage();

    // Include the code for history hiding here
    if (enableHistoryHiderSwitch.checked) {
      // When the switch is checked, hide the page from history
      hideFromHistory();
    } else {
      // When the switch is unchecked, show the page in history
      showInHistory();
    }
  });

  // Function to handle cloaking when a cloaker is clicked
  function handleCloakerClick(newFaviconURL, newUrlTitle) {
    faviconURLInput.value = newFaviconURL;
    urlTitleInput.value = newUrlTitle;
    updateLocalStorage();
  }

  // Example: Change favicon and title when Schoology cloaker is clicked
  schoologyCloaker.addEventListener("click", function (event) {
    event.preventDefault();
    handleCloakerClick("https://cfisd.schoology.com/sites/all/themes/schoology_theme/favicon.ico", "Home | Schoology");
  });

  // Add event listeners for other cloakers
  cfisdCloaker.addEventListener("click", function (event) {
    event.preventDefault();
    handleCloakerClick("https://www.cfisd.net/cms/lib/TX50000664/Centricity/Domain/4/favicon-16x16.png", "Cypress-Fairbanks Independent School District / CFISD Homepage");
  });

  googleCloaker.addEventListener("click", function (event) {
    event.preventDefault();
    handleCloakerClick("https://www.google.com/favicon.ico", "Google");
  });

  // Remove cloaks when the defaultCloaker is clicked
  defaultCloaker.addEventListener("click", function (event) {
    event.preventDefault();
    // Clear the values for faviconURL and urlTitle
    faviconURLInput.value = "";
    urlTitleInput.value = "";
    updateLocalStorage();
  });
});
