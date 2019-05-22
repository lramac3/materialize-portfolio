M.AutoInit();
$(document).ready(function() {
  $(".parallax").parallax();
});
document.addEventListener("DOMContentLoaded", function() {
  let elems = document.querySelectorAll(".fixed-action-btn");
  let instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: false,
  });
  let elems1 = document.querySelectorAll('.sidenav')
let instances1 = M.Sidenav.init(elems1, options)
let elems2 = document.querySelectorAll('.carousel');
    let instances2 = M.Carousel.init(elems2, options);
    
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav({
       draggable: true,
      });
 $('.carousel').carousel({
  
  numVisible: 5,
  dist: -100,
  noWrap: false,
  shift: -800,

});
setInterval(() => {
    $('.carousel').carousel('next')
}, 2000);

$('textarea#textarea2').characterCounter()
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