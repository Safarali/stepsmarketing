$(document).ready(function(){
    $('.js--nav-icon').click(function(){
        var nav = $('.js--navigation-links');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if(icon.hasClass('fa-list')){
            icon.addClass('fa-times')
            icon.removeClass('fa-list');
        }
        else {
            icon.addClass('fa-list');
            icon.removeClass('fa-times');
        }
    });
});
