$(window).load(function () {
    $('#tapar').hide();
    $('#menux, #hov2').animate({
        opacity: 1
    }, 'fast');
        $('.lcero').delay(3000).animate({
            left: '10px'
        }, 100, function () {
            $('.luno').animate({
            left: '10px'
        }, 100, function () {
                 $('.ldos').animate({
                    left: '10px'
                }, 100);
            });
        });
});
$(document).ready(function () {
    $('#uno').addClass('mover');
        $('#uno').load('about.html');
        if ($('#dos, #tres').hasClass('mover')) {
            $('#des, #tres').removeClass('mover');
            $('#contc, #contw').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
        $('html').css('overflow-y', 'inherit');
    $('#menux').mouseenter(function () {
        $(this).addClass("menu2");
        $(this).css("padding", "0px");
    });
    $('#menux').mouseleave(function () {
        $(this).removeClass("menu2");
        $(this).css("padding-right", "10px");
    });
    $('#ab').click(function () {
        $('#uno').addClass('mover');
        $('#uno').load('about.html');
        if ($('#dos, #tres, #ocho').hasClass('mover')) {
            $('#des, #tres, #ocho').removeClass('mover');
            $('#contc, #contw, #contmas').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
        $('html').css('overflow-y', 'inherit');
    });
    
    
    $('#mas').click(function () {
        $('#ocho').addClass('mover');
        $('#ocho').load('mas.html');
        if ($('#uno, #dos, #tres').hasClass('mover')) {
            $('#uno, #des, #tres').removeClass('mover');
            $('#conta, #contc, #contw').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
        $('html').css('overflow-y', 'inherit');
    });
    $('#mas2').click(function () {
        $('#ocho').addClass('mover');
        $('html').css('overflow-y', 'inherit');
        $('#ocho').load('mas.html');
        if ($('#tres, #uno, #dos').hasClass('mover')) {
            $('#tres, #uno, #dos').removeClass('mover');
            $('#contw, #conta, #contc').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
    });
    
    
    $('#des').click(function () {
        $('#tres').addClass('mover');
        $('#tres').load('work.html');
        if ($('#dos, #uno, #ocho').hasClass('mover')) {
            $('#des, #uno, #ocho').removeClass('mover');
            $('#contc, #conta, #contmas').css('display', 'none');
        }
        $('html').css('overflow-y', 'inherit');
    });
    $('#co').click(function () {
        $('#dos').addClass('mover');
        $('#dos').load('contacto.html');
        if ($('#tres, #uno, #ocho').hasClass('mover')) {
            $('#tres, #uno, #ocho').removeClass('mover');
            $('#contw, #conta, #contmas').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
        $('html').css('overflow-y', 'inherit');
    });
    $('#hov').click(function () {
        if ($('#menu2').hasClass('clasemenu')) {
        $('#menu2').removeClass('clasemenu');
            $(this).animate({top: '10px'}, 500);
        } else {
            $(this).animate({top: '80px'}, 500);
        $('#menu2').addClass('clasemenu');
        }
    });
    $('#ab2').click(function () {
        $('#uno').addClass('mover');
        $('#uno').load('about.html');
        if ($('#dos, #tres, #ocho').hasClass('mover')) {
            $('#des, #tres, #ocho').removeClass('mover');
            $('#contc, #contw, #contmas').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
        $('html').css('overflow-y', 'inherit');
    });
    $('#des2').click(function () {
        $('#tres').addClass('mover');
        $('#tres').load('work.html');
        if ($('#dos, #uno, #ocho').hasClass('mover')) {
            $('#des, #uno, #ocho').removeClass('mover');
            $('#contc, #conta, #contmas').css('display', 'none');
        }
        $('html').css('overflow-y', 'inherit');
    });
    $('#co2').click(function () {
        $('#dos').addClass('mover');
        $('html').css('overflow-y', 'inherit');
        $('#dos').load('contacto.html');
        if ($('#tres, #uno, #ocho').hasClass('mover')) {
            $('#tres, #uno, #ocho').removeClass('mover');
            $('#contw, #conta, #contmas').css('display', 'none');
        }
        if ($('#cinco, #cuatro, #seis, #siete').hasClass('moverder')) {
            $('#cinco, #cuatro, #seis, #siete').removeClass('moverder');
        }
    });
    $('.testrailvisible').slimscroll({
				  width: 'auto',
				  railVisible: true,
				  allowPageScroll: true,
				  touchScrollStep: 20
			  });
});