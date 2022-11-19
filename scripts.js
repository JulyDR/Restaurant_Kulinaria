// Mobile Menu
$( document ).ready(function() {
    $(".burger-button").click(function(){
      $(".burger-button").toggleClass("active");
      $(".burger-menu").toggleClass("active");
    });
  });
  

// Slick Caroussel
$('.slider-container').slick({
    autoplay: true, // Do we want it to autoplay? true or false
    autoplaySpeed: 4000, // How long between each slide when auto-playing
    speed: 500, // How fast is the transition in milliseconds
    arrows: true, // Do you want to show arrows to trigger each slide
    accessibility: true, // Enables keyboard tabbing and arrow key navigation
    dots: false, // Enables the dots below to show how many slides
    fade: false, // Changes the animate from slide to fade if true
    infinite: true, // When true, means that it will scroll in a circle
    pauseOnHover: true, // When true means the autoplay pauses when hovering
    pauseOnDotsHover: false, // Pauses the autoplay when hovering over the dots
  });

// Filterable Menu
  $('#menu-filter span').click(function(){
    
    // Remove class 'active' from any <span> that is currently active 
    $('#menu-filter .active').removeClass('active');
     
    // give this <span> that was clicked on a class of 'active' 
    $(this).addClass('active');
  
    // get the name of the category from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
    var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();
  
    // This is something new, it's an 'each' function which basically iterates through each element that matches the selector and applies the function one by one.
    $('#filterable-menu .menu-item').each(function() {
      
      // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
      if (filterVal == 'all') {
        $(this).removeClass('hidden');
      }
      
      // If it's not all, then 
      else {
        if($(this).hasClass(filterVal)) {
          $(this).removeClass('hidden'); // show those that have the filter class
        }
        else {
          $(this).addClass('hidden'); // hide those that do not have the filter
        }
      }
    });
  });

// Adds/removes 'active' class to selected item
$('#menufilter span').first().addClass("active"); // Adds the 'active' class to the first anchor	
$("#menufilter span").click(function(){
    $(".active").removeClass("active");
     $(this).addClass("active");
  });

$('span:contains("Speisen")').click();


