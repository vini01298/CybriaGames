$(document).ready(function() {
  if ($(".error-container").length > 0) {
    $.ajax({
      url: "https://cybriagames.netlify.app/index.html",
      dataType: "html",
      success: function(data) {
        $(".error-container").html(data);
      },
      error: function() {
        console.log("Error loading main page content.");
      }
    });
  }
});
