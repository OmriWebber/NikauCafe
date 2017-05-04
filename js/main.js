$(document).ready(function(){
	// Menu Expand Variables
	var itemExpanded = $(".expanded");
	var expandButton = $(".expandButton");

  // Menu Filter Variables
  var coffeeButton = $("#coffeeButton");
  var coffeeTable = $(".coffeeTable");
  var bakingButton = $("#bakingButton");
  var bakingTable = $(".bakingTable");
  var breakfastButton = $("#breakfastButton");
  var breakfastTable = $(".breakfastTable");
  var lunchButton = $("#lunchButton");
  var lunchTable = $(".lunchTable");
  var menuTable = $(".menuTable");
  var filterButton = $(".filterButton");

  // Navbar Variables
  var hamburgerMenu = $(".hamburgerMenu");
  var dropdownNav = $(".dropdownNav");
  var menuItem = $(".dropdownNav li");
  var cartButton = $(".cartButton");
  var cartDropdown = $(".cartDropdown");

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

  //Expanded menu show/hide
	hamburgerMenu.click(function(){
		if (dropdownNav.is(":visible")) {
			dropdownNav.fadeOut('500');
			dropdownNav.hide('');
		}
		else {
		  dropdownNav.fadeIn('500');
			dropdownNav.show();
      cartDropdown.hide();
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
      dropdownNav.hide();
		}
	});


  expandButton.click(function() {
    var expandVar = $(this).parent().parent().find(itemExpanded);
    expandVar.slideUp();
  });


  coffeeButton.click(function() {
    menuTable.fadeOut();
    coffeeTable.fadeIn();

    filterButton.removeClass("active");
    coffeeButton.addClass("active");
  });

  bakingButton.click(function() {
    menuTable.fadeOut();
    bakingTable.fadeIn();

    filterButton.removeClass("active");
    bakingButton.addClass("active");
  });

  breakfastButton.click(function() {
    menuTable.fadeOut();
    breakfastTable.fadeIn();

    filterButton.removeClass("active");
    breakfastButton.addClass("active");
  });

  lunchButton.click(function() {
    menuTable.fadeOut();
    lunchTable.fadeIn();

    filterButton.removeClass("active");
    lunchButton.addClass("active");
  });



  // $("#coffeeButton").click(function() {
  //   $(".coffeeTable").fadeIn(500);
  //   $("div:not(.coffeeTable)").fadeOut(0);
  //   $("#coffeeButton").addClass("active");
  //   $(":not(#coffeeButton)").removeClass("active");
  // });
  // $("#bakingButton").click(function() {
  //   $(".bakingTable").fadeIn(500);
  //   $("div:not(.bakingTable)").fadeOut(0);
  //   $("#bakingButton").addClass("active");
  //   $(":not(#bakingButton)").removeClass("active");
  // });
  // $("#breakfastButton").click(function() {
  //   $(".breakfastTable").fadeIn(500);
  //   $("div:not(.breakfastTable)").fadeOut(0);
  //   $("#breakfastButton").addClass("active");
  //   $(":not(#breakfastButton)").removeClass("active");
  // });
  // $("#lunchButton").click(function() {
  //   $(".lunchTable").fadeIn(500);
  //   $("div:not(.lunchTable)").fadeOut(0);
  //   $("#lunchButton").addClass("active");
  //   $(":not(#lunchButton)").removeClass("active");
  // });

});

// Smooth Scrolling between anchor links to divs
$(document).on('click', 'a', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});
