$(document).ready(function () {


    //mobile-price


    $("#1c").click(function () {
        if ($(this).children('.bot-mobile').is('.non-visible')) {
            $(this).children('.bot-mobile').removeClass('non-visible');

            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot-mobile').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
    )

    $("#2c").click(function () {
        if ($(this).children('.bot-mobile').is('.non-visible')) {
            $(this).children('.bot-mobile').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot-mobile').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
    )

    $("#3c").click(function () {
        if ($(this).children('.bot-mobile').is('.non-visible')) {
            $(this).children('.bot-mobile').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot-mobile').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
    )

    $("#4c").click(function () {
        if ($(this).children('.bot-mobile').is('.non-visible')) {
            $(this).children('.bot-mobile').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot-mobile').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
)

    $("#5c").click(function () {
        if ($(this).children('.bot-mobile').is('.non-visible')) {
            $(this).children('.bot-mobile').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot-mobile').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
)
    //questions

    $("#1q").click(function()
    {
        if ($(this).children('.bot').is('.non-visible')) {
            $(this).children('.bot').removeClass('non-visible');
     
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else
        {
            $(this).children('.bot').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }
      
    }
    )

    $("#2q").click(function () {
        if ($(this).children('.bot').is('.non-visible')) {
            $(this).children('.bot').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
    )

    $("#3q").click(function () {
        if ($(this).children('.bot').is('.non-visible')) {
            $(this).children('.bot').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
    )

    $("#4q").click(function () {
        if ($(this).children('.bot').is('.non-visible')) {
            $(this).children('.bot').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
)

    $("#5q").click(function () {
        if ($(this).children('.bot').is('.non-visible')) {
            $(this).children('.bot').removeClass('non-visible');
            $(this).find(".open").removeClass('non-visible');
            $(this).find(".closed").addClass('non-visible');
        }
        else {
            $(this).children('.bot').addClass('non-visible');
            $(this).find(".open").addClass('non-visible');
            $(this).find(".closed").removeClass('non-visible');
        }

    }
)



    var mobileIconClicked = false;
    $(".mobile-icon").click(function () {

        if (!mobileIconClicked) {
            $(".mobile-menu").removeClass('non-visible');
            mobileIconClicked = true;
        }
        else {
            $(".mobile-menu").addClass('non-visible');
            mobileIconClicked = false;
        }
    })
   
    var licznik = 0;


    //hover uslugi
    $(".button-uslugi").hover(function () {
        $(".services-nav").removeClass('non-visible');
    }, function () {
        $(".services-nav").addClass('non-visible');
    })

    $(".services-nav").hover(function () {
        $(".services-nav").removeClass('non-visible');
    }, function () {
        $(".services-nav").addClass('non-visible');
    })

    //gallery
    $(".gallery-right").click(function () {
        $("#gallery1-active").addClass('non-visible');
        $("#gallery1-noactive").removeClass('non-visible');
        $("#gallery2-active").removeClass('non-visible');
        $("#gallery2-noactive").addClass('non-visible');
    })
    $(".gallery-left").click(function () {
        $("#gallery2-active").addClass('non-visible');
        $("#gallery2-noactive").removeClass('non-visible');
        $("#gallery1-active").removeClass('non-visible');
        $("#gallery1-noactive").addClass('non-visible');
    })
    //slider on left click
    $(".slider-leftside").click(function () {

        switch (licznik) {
            case 0:
                $("#slider1-active").addClass('non-visible');
                $("#slider1-noactive").removeClass('non-visible');
                $("#slider8-active").removeClass('non-visible');
                $("#slider8-noactive").addClass('non-visible');
                //var x = document.getElementsByClassName("slider");
                //x.style.background= "url(Zdjecia/PhotoDopierzemyTo/slajder_1.png)";
                licznik = 7;
                break;
            case 1:
                $("#slider2-active").addClass('non-visible');
                $("#slider2-noactive").removeClass('non-visible');
                $("#slider1-active").removeClass('non-visible');
                $("#slider1-noactive").addClass('non-visible');
                var x = document.getElementsByClassName("slider")[0];
                x.style.background = "url(../Content/Zdjecia/PhotoDopierzemyTo/slajder_1.png)";
                licznik--;
                break;
            case 2:
                $("#slider3-active").addClass('non-visible');
                $("#slider3-noactive").removeClass('non-visible');
                $("#slider2-active").removeClass('non-visible');
                $("#slider2-noactive").addClass('non-visible');
                var x = document.getElementsByClassName("slider")[0];
                x.style.background = "url(../Content/Zdjecia/PhotoDopierzemyTo/davide-cantelli-240809.jpg)";
                licznik--;
                break;
            case 3:
                $("#slider4-active").addClass('non-visible');
                $("#slider4-noactive").removeClass('non-visible');
                $("#slider3-active").removeClass('non-visible');
                $("#slider3-noactive").addClass('non-visible');
                var x = document.getElementsByClassName("slider")[0];
                x.style.background = "url(../Content/Zdjecia/PhotoDopierzemyTo/Office-min.jpg)";
                licznik--;
                break;
            case 4:
                $("#slider5-active").addClass('non-visible');
                $("#slider5-noactive").removeClass('non-visible');
                $("#slider4-active").removeClass('non-visible');
                $("#slider4-noactive").addClass('non-visible');
                licznik--;
                break;

            case 5:
                $("#slider6-active").addClass('non-visible');
                $("#slider6-noactive").removeClass('non-visible');
                $("#slider5-active").removeClass('non-visible');
                $("#slider5-noactive").addClass('non-visible');
                licznik--;
                break;
            case 6:
                $("#slider7-active").addClass('non-visible');
                $("#slider7-noactive").removeClass('non-visible');
                $("#slider6-active").removeClass('non-visible');
                $("#slider6-noactive").addClass('non-visible');
                licznik--;
                break;
            case 7:
                $("#slider8-active").addClass('non-visible');
                $("#slider8-noactive").removeClass('non-visible');
                $("#slider7-active").removeClass('non-visible');
                $("#slider7-noactive").addClass('non-visible');
                licznik--;
                break;
            

        }
     

    })
    $(".slider-rightside").click(function () {

        switch (licznik) {
            case 0:
                $("#slider1-active").addClass('non-visible');
                $("#slider1-noactive").removeClass('non-visible');
                $("#slider2-active").removeClass('non-visible');
                $("#slider2-noactive").addClass('non-visible');
                var x = document.getElementsByClassName("slider")[0];
                x.style.background = "url(../Content/Zdjecia/PhotoDopierzemyTo/davide-cantelli-240809.jpg)";
                
                licznik++;
                break;
            case 1:
                $("#slider2-active").addClass('non-visible');
                $("#slider2-noactive").removeClass('non-visible');
                $("#slider3-active").removeClass('non-visible');
                $("#slider3-noactive").addClass('non-visible');
                var x = document.getElementsByClassName("slider")[0];
                x.style.background = "url(../Content/Zdjecia/PhotoDopierzemyTo/Office-min.jpg)";
                licznik++;
                break;
            case 2:
                $("#slider3-active").addClass('non-visible');
                $("#slider3-noactive").removeClass('non-visible');
                $("#slider4-active").removeClass('non-visible');
                $("#slider4-noactive").addClass('non-visible');
                licznik++;
                break;
            case 3:
                $("#slider4-active").addClass('non-visible');
                $("#slider4-noactive").removeClass('non-visible');
                $("#slider5-active").removeClass('non-visible');
                $("#slider5-noactive").addClass('non-visible');
                licznik++;
                break;
            case 4:
                $("#slider5-active").addClass('non-visible');
                $("#slider5-noactive").removeClass('non-visible');
                $("#slider6-active").removeClass('non-visible');
                $("#slider6-noactive").addClass('non-visible');
                licznik++;
                break;

            case 5:
                $("#slider6-active").addClass('non-visible');
                $("#slider6-noactive").removeClass('non-visible');
                $("#slider7-active").removeClass('non-visible');
                $("#slider7-noactive").addClass('non-visible');
                licznik++;
                break;
            case 6:
                $("#slider7-active").addClass('non-visible');
                $("#slider7-noactive").removeClass('non-visible');
                $("#slider8-active").removeClass('non-visible');
                $("#slider8-noactive").addClass('non-visible');
                licznik++;
                break;
            case 7:
                $("#slider8-active").addClass('non-visible');
                $("#slider8-noactive").removeClass('non-visible');
                $("#slider1-active").removeClass('non-visible');
                $("#slider1-noactive").addClass('non-visible');
                licznik = 0;
                break;
            

        }
    })
});