M.AutoInit();
$(document).ready(function() {
  $(".parallax").parallax();
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: false,
  });
});

setTimeout(function() {
  $("#icon").addClass("scale-in");
}, 1000);

$("#submit").on("click", function(event) {
  event.preventDefault();
  let name = $("#first_name").val();
  let email = $("#email").val();
  let message = $("#message").val();
  $("#first_name").val("");
  $("#email").val("");
  $("#message").val("");
  M.textareaAutoResize($("#message"));
});
