$(function(){
    
    var videoPlay = $(".galleryVideo");

    $(videoPlay).on('canplay', function () {
        $(videoPlay).mouseenter(function () {
            $(this).get(0).play();
        }).mouseleave(function () {
            $(this).get(0).pause();
        })
    });

    
});
    
    