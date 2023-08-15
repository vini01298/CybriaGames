<!DOCTYPE html>
<html>
<head>
 <title>Search | CybriaGames</title>
<meta charset="utf-8"/>
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NTQ60TS6SP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NTQ60TS6SP');
</script>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="CybriaGames Is Another unblocked games site with games and apps etc" name="description"/>
<meta content="games, unblocked games, bypasss" name="keywords"/>
<meta content="CybriaTech" name="author"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&amp;display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
<link href="/css/styles.css" rel="stylesheet" type="text/css"/>
</head>
<body>
  <header>
    <a class="title" href="/">
      <h1>CybriaGames</h1>
    </a>
    <nav>
      <a href="/configure">Configure</a>
      <a href="/">Proxy</a>
    </nav>
    <div id="searchContainer">
      <form action="search.php" method="get">
        <input id="searchInput" name="q" placeholder="Search For A Game..." type="text"/>
        <button id="searchButton" type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </header>
  <main>
    <div id="gamesContainer">
      <?php
      if (isset($_GET['q'])) {
        $searchValue = strtolower($_GET['q']); // Get the search query from the URL
        
        // Replace this section with your logic to fetch and display search results
        // Example:
        $games = array(
          // Define your games here...
        );
  
        foreach ($games as $game) {
          if (strpos(strtolower($game['title']), $searchValue) !== false) {
            echo '<div class="game">';
            echo '<a href="' . $game['link'] . '">';
            echo '<img alt="' . $game['title'] . '" src="' . $game['image'] . '"/>';
            echo '<p class="game-title">' . $game['title'] . '</p>';
            echo '</a>';
            echo '</div>';
          }
        }
      }
      ?>
    </div>
  </main>
  <!-- ... Your existing scripts ... -->
</body>
</html>
