$(document).ready(function () {
    $('#menu').mouseover(function(){
        $('#menu div').addClass('desp');
        $('#menu div').removeClass('boton2');
    });
    $('#second').click(function(){
        $('#secc').fadeIn(500);
    });
    $('#first').click(function(){
        $('#secc').fadeOut(500);
    });
    $('#menu').mouseout(function(){
        $('#menu div').addClass('boton2');
        $('#menu div').removeClass('desp');
    });
    $('#uno').click(function(){
        $('.boton').fadeOut();
        $('#botella').animate({
            left : '15%'
        },1000, function(){
            $('#textou').slideDown();
        });
        return false;
    });
    $('#dos').click(function(){
        $('.boton').fadeOut();
        $('#botella').animate({
            left : '70%'
        },1000, function(){
            $('#textod').slideDown();
        });
    });
    $('#tres').click(function(){
        $('.boton').fadeOut();
        $('#botella').animate({
            left : '15%'
        },1000, function(){
            $('#textot').slideDown();
        });
    });
    $('.boton3').click(function(){
        $('#textou').slideUp(function(){
            $('#botella').animate({
            left : '40%'
        },1000,function(){
            $('.boton').fadeIn();
            });
        });
    });
    $('.boton4').click(function(){
        $('#textod').slideUp(function() {
            $('#botella').animate({
            left : '40%'
        },1000,function(){
            $('.boton').fadeIn();
            });
        });
    });
    $('.boton5').click(function(){
        $('#textot').slideUp(function(){
            $('#botella').animate({
            left : '40%'
        },1000,function(){
            $('.boton').fadeIn();
            });
        });
    });
    $('#menu a').click(function(e){
        e.preventDefault();
    });
});