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
	// variables
	var itemExpanded = $(".expanded");
	var expandButton = $(".expandButton");
  var coffeeButton = $(".coffeeButton");
  var coffeeTable = $(".coffeeTable");



	//Expanded Items show/hide
	expandButton.click(function(){
		if (itemExpanded.is(":visible")) {
			itemExpanded.fadeOut('1000');
			itemExpanded.hide('slow');
		}
		else {
		  itemExpanded.fadeIn('1000');
			itemExpanded.show();
		}
	});

  //Coffee Menu show/hide
	coffeeButton.click(function(){
		if (coffeeTable.is(":visible")) {
			coffeeTable.fadeOut('1000');
			coffeeTable.hide('slow');
		}
		else {
		  coffeeTable.fadeIn('1000');
			coffeeTable.show();
		}
	});

  //Baking Menu show/hide
	bakingButton.click(function(){
		if (bakingTable.is(":visible")) {
			bakingTable.fadeOut('1000');
			bakingTable.hide('slow');
		}
		else {
		  bakingTable.fadeIn('1000');
			bakingTable.show();
		}
	});

  //Breakfast Menu show/hide
	Button.click(function(){
		if (breakfastTable.is(":visible")) {
			breakfastTable.fadeOut('1000');
			breakfastTable.hide('slow');
		}
		else {
		  breakfastTable.fadeIn('1000');
			breakfastTable.show();
		}
	});

  //Coffee show/hide
	lunchButton.click(function(){
		if (lunchTable.is(":visible")) {
			lunchTable.fadeOut('1000');
			lunchTable.hide('slow');
		}
		else {
		  lunchTable.fadeIn('1000');
			lunchTable.show();
		}
	});

});


// Smooth Scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
