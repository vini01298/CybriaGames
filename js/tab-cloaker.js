        const storedURL = localStorage.getItem('cloakedURL');
        if (storedURL) {
            cloakWebsite(storedURL);
        }

        function cloakWebsite(url) {
            const favicon = document.getElementById('favicon');
            const title = document.title;

            favicon.href = url + '/favicon.ico';
            document.title = url;

            localStorage.setItem('cloakedURL', url);
        }

        function openInputAlert() {
            const url = prompt('Enter the URL:');
            if (url) {
                cloakWebsite(url);
            }
        }
