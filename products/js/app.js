// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        //autoPlay: 5000, //Set AutoPlay to 3 seconds

        navigation : false, // Show next and prev buttons
        slideSpeed : 800,
        paginationSpeed : 600,
        singleItem:true,

        lazyLoad : true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });

});
