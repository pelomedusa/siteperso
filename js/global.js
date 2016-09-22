/**
 * Created by pelomedusa on 21/09/2016.
 */


function hideMainMenu(callback){
    $("#containerMenu").addClass("col-lg-12 col-lg-offset-0").removeClass("col-lg-9 col-lg-offset-2");

    $("#viewer").animate({ height: 0 }, "200", function () {
        $(this).hide();

    });
    $(".titlebutton").hide().css({
        'font-size' : '23px',
        'line-height' : '50px'
    });
    $(".menubutton").css({"margin-top":0, "background-color": "white"}).animate({ height: 50, backgroundColor:"#2980B9" }, "200", function(){
        $(this).each(function(){
            $(this).addClass("col-lg-1 col-lg-offset-0").removeClass("col-lg-2 col-lg-offset-1")
        });
        $("#firstButton").removeClass("col-lg-offset-0").addClass("col-lg-offset-8");
        $(".titlebutton").fadeIn();
        if ($(this).is(":last-child")){callback();}
    });
    $("#containerMenu").animate({backgroundColor : "#2980B9"},400);

}

function showProjects() {
    $("#catProjects").fadeIn();
}


$(function(){
    $(".category, .titleimgproject").hide();
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
        event.stopImmediatePropagation();
        hideMainMenu(function () {
            showProjects();
        });
    });

    $(".hoverproject").hover(function () {
        $(this).parent(".imgproject").fadeTo( "fast" , 0.5).find(".titleimgproject").fadeIn("fast");

    }, function () {
        $(this).fadeTo( "fast" , 1);
    })
});