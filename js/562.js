       function redirectToOfflinePage() {
            window.location.href = "562.html";
        }

        // Check the online status when the page loads
        if (!navigator.onLine) {
            redirectToOfflinePage();
        }

        // Add an event listener to detect changes in online status
        window.addEventListener("offline", redirectToOfflinePage);
        window.addEventListener("online", function () {
            // Redirect to the main page when the connection is restored
            window.location.href = "index.html"; // Change this URL as needed
        });
