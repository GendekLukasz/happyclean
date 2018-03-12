$(document).ready(function () {
    //scroll
    var licznik = 0;
    var lastScrollTop = 0;

    var tabOfOffset = [0, document.getElementById("listOf").offsetTop+5, document.getElementById("listOfSecond").offsetTop];

    //hover uslugi


    $(window).on('mousewheel DOMMouseScroll', function (e) {

        var direction = (function () {

            var delta = (e.type === 'DOMMouseScroll' ?
                         e.originalEvent.detail * -40 :
                         e.originalEvent.wheelDelta);

            return delta > 0 ? 0 : 1;
        }());

        if (direction === 1) {
            if ((licznik) == tabOfOffset.length) {

               
            }
            else {
                licznik++;
                slide(tabOfOffset[licznik]);
            }
        }
        if (direction === 0) {
            if ((licznik) == 0) {

                
            }
            else {
                licznik--;
                slide(tabOfOffset[licznik]);
            }
        }
        return false;
    });



    //$('.btn-wykladziny').hover(function () {
    function slide(dist) {
   
      $('body,html').animate({ scrollTop: dist }, 600);

    }
 
    //}
    //);
    //wykladziny
    var tmpWykladziny = document.getElementById("btn-wykladziny");
    tmpWykladziny.distance = document.getElementById("listOfSecond").offsetTop;
    tmpWykladziny.addEventListener("click", function () {
        scroll(this); allInfoNonVisible(); $('#wykladziny-info').removeClass("non-visible");
    } );

    //posadzki
    var tmpPosadzki = document.getElementById("btn-posadzki");
    tmpPosadzki.distance = document.getElementById("listOfSecond").offsetTop;
    tmpPosadzki.addEventListener("click", function () {
        scroll(this); allInfoNonVisible(); $('#posadzki-info').removeClass("non-visible");
    });

    var tmpDywany = document.getElementById("btn-dywany");
    tmpDywany.distance = document.getElementById("listOfSecond").offsetTop;
    tmpDywany.addEventListener("click", function () {
        scroll(this); allInfoNonVisible(); $('#dywany-info').removeClass("non-visible");
    });

    var tmpTekstylne = document.getElementById("btn-tekstylne");
    tmpTekstylne.distance = document.getElementById("listOfSecond").offsetTop;
    tmpTekstylne.addEventListener("click", function () {
        scroll(this); allInfoNonVisible(); $('#tekstylne-info').removeClass("non-visible");
    });
    function scroll(distanceToInfo) {

        $('body,html').animate({ scrollTop: distanceToInfo.distance }, 600);
   
    }
    function allInfoNonVisible() {
        $('#wykladziny-info').addClass("non-visible");
        $('#posadzki-info').addClass("non-visible");
        $('#dywany-info').addClass("non-visible");
        $('#tekstylne-info').addClass("non-visible");
    }
//    $('#wykladziny').hover(function () {
//        $('#wykladziny').addClass('btn-wykladziny-hover');
//    }, function () {
//        $('#wykladziny').removeClass('btn-wykladziny-hover');
//    }
//);

    //Arrow home down
    var tmpArrow = document.getElementById("arrow");
    tmpArrow.distance = document.getElementById("listOf").offsetTop;
    tmpArrow.addEventListener("click", updateDebugState);
    function updateDebugState() {

        var tmp = 0;
        tmp = this.distance;
       

            $('body,html').animate({ scrollTop: tmp +1 }, 600);


    
    }
    //arrow gallery down
    function addArrowGalleryEvent() {
        var tmpArrowGall = document.getElementById("arrow-gallery");
        tmpArrowGall.distance = document.getElementById("row1").offsetTop;
        tmpArrowGall.addEventListener("click", updateDebugState);
        function updateDebugState() {

            var tmp = 0;
            tmp = this.distance;


            $('body,html').animate({ scrollTop: tmp + 1 }, 600);



        }
    }

    //Zmaiana paska nawigacji 
    $(window).scroll(function (e) {
       
        var currentposition = $(document).scrollTop();
        var position = $('.distance').height();
        if (currentposition >position) {
            $('.nav-normal').addClass('change-nav-oppacity');
            $('.nav-normal-btn-text-logo-white').addClass('nav-normal-btn-text-logo-white-small');
            $('.nav-normal-btn-text-logo-red').addClass('nav-normal-btn-text-logo-red-small');
            $('.nav-normal-btn-logo').addClass('nav-normal-btn-logo-small');
           
            $('.nav-normal-btn').addClass('nav-normal-btn-small');
            
            $('.center').addClass('center-small');
            $('.nav-normal-btn-text').addClass('nav-normal-btn-text-small');
            $('.nav-normal-btn-logo-small').removeClass('nav-normal-btn-logo');
            $('.nav-normal-btn-small').removeClass('nav-normal-btn');
        }
        else {
            $('.nav-normal').removeClass('change-nav-oppacity');
            $('.nav-normal-btn-text-logo-white').removeClass('nav-normal-btn-text-logo-white-small');
            $('.nav-normal-btn-text-logo-red').removeClass('nav-normal-btn-text-logo-red-small');
            $('.nav-normal-btn-logo-small').addClass('nav-normal-btn-logo');
            $('.nav-normal-btn-logo').removeClass('nav-normal-btn-logo-small');
            $('.nav-normal-btn-small').addClass('nav-normal-btn');
            $('.nav-normal-btn').removeClass('nav-normal-btn-small');
            
            $('.center').removeClass('center-small');
            $('.nav-normal-btn-text').removeClass('nav-normal-btn-text-small');
        }

    });


    //zmiana podstrony
    var homeBtn = document.getElementById("home-btn");
    var galeriaBtn = document.getElementById("galeria-btn");
    var kontaktBtn = document.getElementById("kontakt-btn");
    var cennikBtn = document.getElementById("cennik-btn");

    homeBtn.addEventListener("click", function () { updatePage(this); tabOfOffset = [0, document.getElementById("listOf").offsetTop + 5, document.getElementById("listOfSecond").offsetTop]; });
    homeBtn.podstrona = $('#home');
    galeriaBtn.addEventListener("click", function () { updatePage(this); tabOfOffset = [0, document.getElementById("row1").offsetTop, document.getElementById("row2").offsetTop, , document.getElementById("row3").offsetTop]; addArrowGalleryEvent() });
    galeriaBtn.podstrona = $('#galeria');
    kontaktBtn.addEventListener("click", function () { updatePage(this); initMap(); });
    kontaktBtn.podstrona = $('#kontakt');
    cennikBtn.addEventListener("click", function () { updatePage(this); });
    cennikBtn.podstrona = $('#cennik');
    function updatePage(pageAdress) {

        allNonVisible();
        pageAdress.podstrona.removeClass("non-visible");


    }
    function allNonVisible() {
        $('#home').addClass("non-visible");
        $('#galeria').addClass("non-visible");
        $('#kontakt').addClass("non-visible");
        $('#cennik').addClass("non-visible");
    }

    //api google
    function initMap() {


        $('#map').gmap3({
            map: {
                options: {
                    center: [52.121053, 20.819778],
                    zoom: 9,
                    mapTypeId: 'custom_style',
                    mapTypeControlOptions: {
                        mapTypeIds: ['custom_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                    },
                    panControl: false,
                    zoomControl: false
                }
            },
            marker: {
                values: [],
                events: {
                    click: function (marker, event, context) {
                        var map = $(this).gmap3('get'),
                            infowindow = $(this).gmap3({ get: { name: 'infowindow' } });
                        if (infowindow) {
                            infowindow.open(map, marker);
                            infowindow.setContent(context.data);
                        } else {
                            $(this).gmap3({
                                infowindow: {
                                    anchor: marker,
                                    options: { content: context.data }
                                }
                            });
                        }
                    }
                }
            },
            styledmaptype: {
                id: 'custom_style',
                options: {
                    name: 'Mapa'
                },
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }, {
                    featureType: 'poi.business',
                    stylers: [{
                        visibility: 'off'
                    }]
                }]
            },
            polygon: {
                values: [{
                    options: {
                        paths: [[52.086257, 20.566406], [52.125901, 20.559540], [52.136017, 20.576019], [52.159612, 20.566406], [52.175616, 20.571899], [52.203399, 20.622711], [52.204240, 20.651550], [52.209290, 20.699615], [52.215180, 20.732574], [52.206765, 20.773773], [52.214339, 20.839691], [52.222752, 20.858917], [52.242097, 20.882263], [52.252187, 20.901489], [52.258071, 20.917969],
                            [52.269838, 20.926208], [52.274040, 20.944061], [52.276561, 20.966034], [52.269838, 20.990753],
                            [52.257231, 20.998993], [52.226117, 21.033325], [52.205924, 21.074524], [52.178142, 21.047058],
                            [52.139388, 21.022339], [52.127587, 20.938568], [52.135174, 20.894623], [52.108192, 20.864410],
                            [52.087945, 20.843811], [52.081194, 20.812225], [52.080350, 20.751801], [52.083726, 20.687256],
                            [52.070221, 20.622711], [52.086257, 20.566406]],
                        strokeColor: '#21a298',
                        fillColor: '#30d5c8'
                    }
                }]
            }
        });

    }
});