// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).load(Function(){
  $('.gallery').masonry({
    itemSelector: '.gcontainer',
    gutter: 15,
    columnWidth:230
  });
});
