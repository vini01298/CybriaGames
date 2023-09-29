$(document).ready(function() {
  if ($(".error-container").length > 0) {
    $.ajax({
      url: "error/404.html", // Update the URL to the path of your 404.html page
      dataType: "html",
      success: function(data) {
        $(".error-container").html(data);
      },
      error: function() {
        console.log("Error loading 404 page content.");
      }
    });
  }
});
