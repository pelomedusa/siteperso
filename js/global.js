/**
 * Created by pelomedusa on 21/09/2016.
 */

$(function(){
    $( window ).resize(function() {
        var sizewin = $( window ).width();
        if (sizewin>=1200){document.title = 'lg';}
        else if ((sizewin<1200)&&(sizewin>=992)){document.title = 'md';}
        else if ((sizewin<992)&&(sizewin>=768)){document.title = 'sm';}
        else {document.title = 'xs';}
    });

    $(".menubutton").hover(function() {
        $(this).animate({ backgroundColor: "#3498DB" }, "fast");
    }, function () {
        $(this).animate({ backgroundColor: "#2980B9" }, "fast");
    });

    $(".menubutton").click(function(){
        $("#viewer").animate({ height: 0 }, "200", function(){
            $(this).hide();
            $(".menubutton").animate({ height: 50 }, "200", function(){
                $(".titlebutton").css({
                    'font-size' : '30px',
                    'line-height' : '50px',
                });
                $(this).each(function(){
                    $(this).addClass("col-lg-1 col-lg-offset-0").removeClass("col-lg-2 col-lg-offset-1")
                });
                $("#firstButton").removeClass("col-lg-offset-0").addClass("col-lg-offset-8");


            });
        });
    })
});