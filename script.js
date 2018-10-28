$(function(){

    setInterval(function(){
        $(".slider ul li:first-child").fadeOut("slow", function(){
            $(this).appendTo(".slider ul").fadeIn();
        });
    }, 3000);

    $("#next").click(function() {
        $(".slider ul li:first-child").appendTo(".slider ul", function(){
            $(this).fadeOut("fast");
        });
    });

    $("#prev").click(function() {
        $(".slider ul li:last-child").prependTo(".slider ul", function(){
            $(this).fadeOut("fast");
        });
    });

});