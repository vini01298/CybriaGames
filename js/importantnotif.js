document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('notificationPopup');

    // abatakum moment
    popup.style.display = 'block';

    // closes when dat button pressed 
    window.closePopup = function() {
        popup.style.display = 'none';
    };
});
