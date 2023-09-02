    // Get the previous and next page links
    var prevPageLink = document.getElementById("prevPage");
    var nextPageLink = document.getElementById("nextPage");

    // Set an initial page number
    var currentPage = 1;

    // Add click event listeners to the links
    prevPageLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Only navigate to the previous page if not on Page 1
        if (currentPage > 1) {
            currentPage--;
            navigateToPage(currentPage);
        }
    });

    nextPageLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Navigate to the next page
        currentPage++;
        navigateToPage(currentPage);
    });

    // Function to update the page content based on the page number
    function navigateToPage(pageNumber) {
        // Here's the logic to update the games content based on the page number.
        var games = document.querySelectorAll('.game'); // Get all game elements

        // Loop through all games and hide them
        games.forEach(function (game) {
            game.style.display = 'none';
        });

        // Calculate the range of games to display for the current page
        var gamesPerPage = 10; // Number of games per page
        var startIndex = (pageNumber - 1) * gamesPerPage;
        var endIndex = startIndex + gamesPerPage;

        // Loop through games within the current range and show them
        for (var i = startIndex; i < endIndex && i < games.length; i++) {
            games[i].style.display = 'block';
        }

        // Update the link text and visibility based on the page number
        if (pageNumber === 1) {
            prevPageLink.style.display = "none"; // Hide the "Previous" button on Page 1
        } else {
            prevPageLink.style.display = "inline-block";
        }

        // You can add more logic here if needed, such as disabling the "Next" button on the last page.
        if (endIndex >= games.length) {
            nextPageLink.style.display = "none"; // Hide the "Next" button on the last page
        } else {
            nextPageLink.style.display = "inline-block";
        }
    }

    // Initial call to navigate to Page 1
    navigateToPage(currentPage);
