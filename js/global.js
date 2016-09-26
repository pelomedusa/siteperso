/**
 * Created by pelomedusa on 21/09/2016.
 */


function hideMainMenu(callback){
    $("#maincontainer").css("background-color","whitesmoke");
    $("#containerMenu").addClass("col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0")
                        .removeClass("col-lg-9 col-lg-offset-2 col-md-9 col-md-offset-2 col-sm-7 col-sm-offset-3 col-xs-10 col-xs-offset-1");

    $("#viewer").animate({ height: 0 }, "200", function () {
        $(this).hide();

    });
    $(".titlebutton").hide().css({
        'font-size' : '23px',
        'line-height' : '50px'
    });

    $(".menubutton").css({"margin-top":0, "background-color":"#2980B9"})
        .animate({ height: 50, backgroundColor:"#2980B9" }, "200", function(){
        $(this).each(function(){
            $(this).addClass("col-lg-1 col-lg-offset-0 col-md-1 col-md-offset-0 col-sm-3 col-xs-6")
                .removeClass("col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-9 col-xs-offset-2")
        });
        $("#buttonProj").removeClass("col-lg-offset-0 col-md-offset-0").addClass("col-md-offset-8");
        $(".titlebutton").fadeIn();
        if ($(this).is(":last-child")){callback();}
    });
    $("#containerMenu").animate({backgroundColor : "#2980B9"},400, function(){
        $("#homebutton").fadeIn();
    });

}

function showMainMenu(){
    $("#maincontainer").css("background-color","#2980B9");
    $("#homebutton").hide();
    $("#containerMenu").removeClass("col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0")
        .addClass("col-lg-9 col-lg-offset-2 col-lg-md col-md-offset-2 col-sm-7 col-sm-offset-3 col-xs-10 col-xs-offset-1")
        .animate({backgroundColor : "transparent"},400);
    var height = $("#viewer").show().find(".img-responsive").height();
    $("#viewer").animate({ height: height }, "200", function () {
        $(".titlebutton").hide().css({
            'font-size' : '50px',
            'line-height' : '80px'
        });

    });

    $(".menubutton").css({"margin-top":20}).animate({ height: 80, backgroundColor:"#2980B9" }, "200", function(){
        $(this).each(function(){
            $(this).removeClass("col-lg-1 col-lg-offset-0 col-md-1 col-md-offset-0 col-sm-3 col-xs-6")
                .addClass("col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-5 col-xs-12");
            if ($(this).is("#buttonAbout, #buttonCont")){ $(this).removeClass("col-sm-offset-0").addClass("col-sm-offset-1")}
        });
        $("#buttonProj").removeClass("col-lg-offset-8 col-md-offset-8").addClass("col-lg-offset-0 col-md-offset-0");
        $(".titlebutton").fadeIn();
    });
    $(".category").hide();
}

function showProjects() {
    $("#catProjects").fadeIn();
}

function showAbout() {
    $("#catAbout").fadeIn();
}


$(function(){
    $(".category, .titleimgproject, #homebutton").hide();
    $( window ).resize(function() {
        var sizewin = $( window ).width();
        if (sizewin>=1200){document.title = 'lg';}
        else if ((sizewin<1200)&&(sizewin>=992)){document.title = 'md';}
        else if ((sizewin<992)&&(sizewin>=768)){document.title = 'sm';}
        else {document.title = 'xs';}
    });

    $(".menubutton").hover(function() {
        $(this).animate({ backgroundColor: "#3498DB" }, 100);
    }, function () {
        $(this).animate({ backgroundColor: "#2980B9" }, 100);
    });

    $("#buttonProj").click(function(){hideMainMenu(function () {showProjects();});});
    $("#buttonAbout").click(function(){hideMainMenu(function () {showAbout();});});

    $("#homebutton").click(function(){
        showMainMenu();
    });

    $(".hoverproject").hover(function () {
        $(this).find(".titleimgproject").fadeIn("fast");
        $(this).siblings(".imgproject").fadeTo( "fast" , 0.5);

    }, function () {
        $(this).find(".titleimgproject").fadeOut("fast");
        $(this).siblings(".imgproject").fadeTo( "fast" , 1);
    })

    $(".buttoncvmenu").not(":last-child").click(function () {
        $(".buttoncvmenu").removeClass("selected");
        $(this).addClass("selected");
    })
});