/**
 * Created by pelomedusa on 21/09/2016.
 */


function hideMainMenu(callback){
    $("#viewer").animate({ height: 0 }, "200", function () {
        $(this).hide();
        callback();
        $("#maincontainer").css("background-color","whitesmoke");
    });
    $("#containerMenu").fadeOut(400, function(){
        $("#topbar").show();
    });

}

function showMainMenu(){
    $("#maincontainer").css("background-color","#2980B9");
    var height = $("#viewer").show().find(".img-responsive").height();
    $("#topbar").hide();
    $("#viewer").animate({ height: height }, "200");
    $(".category").hide();
    $("#containerMenu").show()
}

function showProjects() {
    $("#catProjects").fadeIn();
}

function showAbout() {
    $("#catAbout").fadeIn();
}

function showpart(part){
    $(".partcv").hide();
    $("#part"+part).fadeIn(100);
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

    $("#home").click(function(){
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

    $("#buttoncvEdu").click(function () {showpart("Edu");})
    $("#buttoncvExp").click(function () {showpart("Exp");})
    $("#buttoncvSkills").click(function () {showpart("Skills");})

    $(".blockskill").hover(function () {
       $(this).find("img").first().animate({"margin-bottom":"80"},200) ;
    }, function () {
        $(this).find("img").first().animate({"margin-bottom":"0"},200) ;
    });
});