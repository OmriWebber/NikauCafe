$(document).ready(function(){
	// Menu Expand Variables
	var expanded = $(".expanded");
	var expandButton = $(".expandButton");

	// Contact Variables
	var contact = $(".contact");
	var contactButton = $(".contactButton");
	var contactCloseButton = $(".contactCloseButton");
	var contactSubmitButton = $(".submitButton");
	var contactSuccess = $(".contactSuccess");
	var contactForm = $(".contactForm");


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

	//Contact show/hide
	contactButton.click(function(){
		if (contact.is(":visible")) {
			contact.fadeOut('500');
			contact.hide('');
		}
		else {
		  contact.fadeIn('500');
			contact.show();
		}
	});

	//Contact Close Button show/hide
	contactCloseButton.click(function(){
			contact.fadeOut('500');
			contact.hide('');
	});

	//Contact Submit Button Action show/hide
	contactSubmitButton.click(function(){
			contactForm.fadeOut('500');
			contactForm.hide('');
			contactSuccess.delay('slow').fadeIn('500');
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

	$(function() {
    $(expandButton).click(function(event) {
        event.stopPropagation();
        var $target = $(event.target);
        if ( $target.closest("td").attr("colspan") > 1 ) {
            $target.slideUp();
        } else {
            $target.closest("tr").next().slideToggle();
        }
    });
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

});

// Smooth Scrolling between anchor links to divs
$(document).on('click', 'a', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});
