$(window).load(function(){
    $('#prin h2').fadeIn(400,function(){
        $('#prin h4').delay(500).fadeIn(400,function(){
            $('#prin h2').delay(400).animate({
                opacity:0
            },500)
            $('#cen').delay(600).fadeIn()
        })
    })
})
$(document).ready(function(){
    $('#cen section',this).hover(function(){
        $(this).stop(true,true).css('width','55%').siblings().css('width','45%')
    },function(){
        $(this).stop(true,true).css('width','50%').siblings().css('width','50%')
    })
    $('#about').click(function(){
        $('#cen section h2').fadeOut(400,function(){
            $('#work,#about').height(0)
            $('#prin h4').slideUp()
            $('#info').delay(500).fadeIn(400)
        });
    })
    $('#work').click(function(){
        window.location.href="works.html"
    })
    $('#cl').click(function(){
        $('#info').fadeOut(400,function(){
            $('#prin h4').slideDown()
             $('#work,#about').height('100%')
             $('#cen section h2').delay(500).fadeIn()
        })
    })
    $('#clc').click(function(){
        $('#cont section').fadeOut(400,function(){
            $('#cont').fadeOut()
        })
    })
    $('#socs').click(function(){
        $('#cont').animate({
            width:'100%',
            height:'100%'
        },400,function(){
            $('#cont').fadeIn()
        })
        $('#cont section').fadeIn()
    })
})