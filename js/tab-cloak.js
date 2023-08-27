// Check if the cloaked URL is stored in localStorage
const storedURL = localStorage.getItem('cloakedURL');
if (storedURL) {
    cloakWebsite(storedURL);
}

// Function to cloak the website
function cloakWebsite(url) {
    const favicon = document.getElementById('favicon');
    const title = document.title;

    // Change favicon and title
    favicon.href = url + '/favicon.ico';
    document.title = url;

    // Store the cloaked URL in localStorage
    localStorage.setItem('cloakedURL', url);
}

// Function to handle the input alert
function openInputAlert() {
    const url = prompt('Enter the URL:');
    if (url !== null && url.trim() !== '') {
        cloakWebsite(url);
    }
}
