//jQuery-3
$(document).ready(function() {
  $(".menu").click(function() {
              $("nav.nav_closed").toggleClass("nav_open");
          });
          $("nav ul li a").click(function() {
              $("nav.nav_open").removeClass("nav_open");
          });
      });

$( ".btn-first" ).click(function() {
  $( ".btn-first" ).fadeToggle( "slow", "linear" );
});
$( ".btn-last" ).click(function() {
  $( ".btn-last" ).fadeToggle( "fast", function() {
    $( "#log" ).append( "<div>finished</div>" );
  });
});


/*NO SCRIPT
MAINNAV

        Home
        Profile
        Highlights
        Education
        Rxperience
        Skills

Javascript is disabled in your browser. Menu and navigation links will be disabled, this may affect your content.
META HTTP-EQUIV="Refresh" CONTENT="0;URL=ShowErrorPage.html"*/

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(
                    1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                    return false;
                }
            }
        });
    });

//NOSCRIPT

/*Javascript is disabled in your browser. Smooth scrolling will be disabled on navigation links, but it does not affect the content.*/
