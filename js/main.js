// Slideshow
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

$(document).ready(function(){
	// Menu Expand Variables
	var itemExpanded = $(".expanded");
	var expandButton = $(".expandButton");

  // Menu Filter Variables
  var coffeeButton = $(".coffeeButton");
  var coffeeTable = $(".coffeeTable");
  var bakingButton = $(".bakingButton");
  var bakingTable = $(".bakingTable");
  var breakfastButton = $(".breakfastButton");
  var breakfastTable = $(".breakfastTable");
  var lunchButton = $(".lunchButton");
  var lunchTable = $(".lunchTable");

  // Navbar Variables
  var hamburgerMenu = $(".hamburgerMenu");
  var dropdownNav = $(".dropdownNav");
  var menuItem = $(".dropdownNav li");
  var cartButton = $(".cartButton");
  var cartDropdown = $(".cartDropdown");



  //Expanded menu show/hide
	hamburgerMenu.click(function(){
		if (dropdownNav.is(":visible")) {
			dropdownNav.fadeOut('500');
			dropdownNav.hide('');
		}
		else {
		  dropdownNav.fadeIn('500');
			dropdownNav.show();
		}
	});
  // When an item on the menu is clicked, Hide dropdownNav
  menuItem.click(function(){
		if (dropdownNav.is(":visible")) {
			dropdownNav.fadeOut('1000');
			dropdownNav.hide('slow');
		}
	});

  //CartDropdown Show/Hide
	cartButton.click(function(){
		if (cartDropdown.is(":visible")) {
			cartDropdown.fadeOut('500');
			cartDropdown.hide('');
		}
		else {
		  cartDropdown.fadeIn('500');
			cartDropdown.show();
		}
	});


  $("#coffeeButton").click(function() {
    $(".coffeeTable").fadeIn(500);
    $("div:not(.coffeeTable)").fadeOut(0);
    $("#coffeeButton").addClass("active");
    $(":not(#coffeeButton)").removeClass("active");
  });
  $("#b").click(function() {
    $(".b").fadeIn(500);
    $("div:not(.b)").fadeOut(0);
    $("#b").addClass("active");
    $(":not(#b)").removeClass("active");
  });
  $("#c").click(function() {
    $(".c").fadeIn(500);
    $("div:not(.c)").fadeOut(0);
    $("#c").addClass("active");
    $(":not(#c)").removeClass("active");
  });
  $("#d").click(function() {
    $(".d").fadeIn(500);
    $("div:not(.d)").fadeOut(0);
    $("#d").addClass("active");
    $(":not(#d)").removeClass("active");
  });


  $(function() {
    $("td[colspan=3]").find("p").hide();
    $("expandButton").click(function(event) {
        event.stopPropagation();
        var $target = $(event.target);
        if ( $target.closest("td").attr("colspan") > 1 ) {
            $target.slideUp();
        } else {
            $target.closest("tr").next().find("p").slideToggle();
        }
    });
  });

});


// Smooth Scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
