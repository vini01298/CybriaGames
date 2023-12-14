const targetURL = 'https://cybria-games.pages.dev;

function checkCurrentURL() {
  const currentURL = window.location.href;

  if (currentURL !== targetURL) {
    alert('This is a backup/forked copy of CybriaGames, it might be outdated! ');
  }
  // balls (pls laugh)
}

checkCurrentURL();
