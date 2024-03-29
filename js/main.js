$(document).ready(function() {
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

	// Misc Variables
	var orderButton = $(".orderBtn");
	var orderComplete = $(".orderComplete");
	var orderConfirm = $(".orderConfirm");
	var confirmOrderButton = $(".confirmOrderButton");

	// Translation variables
	var maori = $(".maori");
	var english = $(".english");
	var translateButton = $(".translateButton");

	// Countdown Timer for FoodReady Timer
	$('#progressbar').animate({width: '0'}, 300000, 'linear');

	translateButton.click(function(){
		if (maori.is(":visible")) {
			maori.fadeOut('');
			maori.hide('');
			english.delay('slow').fadeIn('500');
			english.delay('slow').show('');
		}
		else {
			english.fadeOut('');
			english.hide('');
			maori.delay('slow').fadeIn('500');
			maori.delay('slow').show('');
		}
	});


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

	//CartDropdown Show/Hide
	orderButton.click(function(){
		cartDropdown.fadeIn('500');
		cartDropdown.show();
		if (cartDropdown.is(":visible")) {
			cartDropdown.delay(2000).fadeOut('');
		}
	});

	// Menu Item Expand
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

	confirmOrderButton.click(function(){
		  orderComplete.fadeIn('500');
			orderComplete.show();
			orderConfirm.hide();
	});

});
