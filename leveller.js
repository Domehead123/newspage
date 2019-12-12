$(document).ready(function() {

    var x = $('.latest-news').height();

    x = x + "px";

    console.log(x);

    $('.top-story-image').css("height", x);

});
