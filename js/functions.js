$("#t1").click(function () {

    $("#t1").addClass("active");
    $("#t2").removeClass("active");
    $("#t3").removeClass("active");

    //Após o primero fade out ser terminado o outro começa a ser executado e depois o fade in
    $("#box2").fadeOut(150, function () {

        $("#box3").fadeOut(150, function () {

            $("#box1").fadeIn(150);

        });

    });

});

$("#t2").click(function () {

    $("#t2").addClass("active");
    $("#t1").removeClass("active");
    $("#t3").removeClass("active");

    //Após o primero fade out ser terminado o outro começa a ser executado e depois o fade in
    $("#box1").fadeOut(150, function () {

        $("#box3").fadeOut(150, function () {

            $("#box2").fadeIn(150);

        });

    });

});

$("#t3").click(function () {

    $("#t3").addClass("active");
    $("#t1").removeClass("active");
    $("#t2").removeClass("active");

    //Após o primero fade out ser terminado o outro começa a ser executado e depois o fade in
    $("#box1").fadeOut(150 , function(){

        $("#box2").fadeOut(150, function () {

            $("#box3").fadeIn(150);
    
        });

    });
    
});