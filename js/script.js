
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(".hamburger").click(function() {
  if ($(".topnav").hasClass("responsive")) {
    $(".topnav").removeClass("responsive");
  } else {
    $(".topnav").addClass("responsive");
  }
});


$(".topnav .navLink").click(function(event) {
    $(".topnav").removeClass("responsive");
});
