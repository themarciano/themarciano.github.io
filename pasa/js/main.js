$(window).load(function() {
    $('.flexslider').flexslider();
});
$(document).ready(function () {
    $('#galchica').perfectScrollbar({
        wheelSpeed: 30
    });
    $('#fdos').click(function () {
        $('#slides').animate({
            opacity: 0
        }, 500, function () {
            $(this).css('display', 'none');
            $('#slides2').css('display', 'block');
            $('#slides2').animate({
                opacity: 1
            }, 800);
        });
    });
     $('#funo').click(function () {
        $('#slides2').animate({
            opacity: 0
        }, 500, function () {
            $(this).css('display', 'none');
            $('#slides').css('display', 'block');
            $('#slides').animate({
                opacity: 1
            }, 800);
        });
    });
    $('#icome').click(function () {
        $('#menu2').slideToggle('fast');
        return false;
    });
    $('#icome2').click(function () {
        $('#galeria').animate({
            opacity: 0
        }, 500, function(){
            $(this).css('display', 'none');
            $('#galchica').css('display', 'inline-block');
            $('#galchica').animate({
                opacity:1
            }, 500);
        });
    });
    $('#icome3').click(function () {
        $('#galchica').animate({
            opacity: 0
        }, 500, function(){
            $(this).css('display', 'none');
            $('#galeria').css('display', 'inline-block');
            $('#galeria').animate({
                opacity:1
            }, 500);
        });
    });
});












/*      Codigo ejemplo--------------------------------------------

        $(document).ready(function(){
            $('.menu-container').hover(
                function(){
                    $('.profile-actions').slideDown('fast');
                  $('.list-icon').addClass('active');
                },
                function(){
                    $('.profile-actions').slideUp('fast');
                  $('.list-icon').removeClass('active');
                }
            );
            $('.profile-card').mouseleave(function(){
                $('.profile-actions').slideUp('fast');
                $('.profile-info').slideUp('fast');
                $('.profile-map').slideUp('fast');
            });

            $('.profile-avatar').hover(
                function(){
                    $('.profile-links').fadeIn('fast');
                },
                function(){
                    $('.profile-links').hide();
                }
            );
            $('.read-more').click(function(){
                $('.profile-map').slideUp('fast');
                $('.profile-info').slideToggle('fast');
                return false;
            });
            $('.view-map').click(function(){
                $('.profile-info').slideUp('fast');
                $('.profile-map').slideToggle('fast');
                return false;
            });
        });
        
        */