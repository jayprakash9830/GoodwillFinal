(function($){
"use strict";

//bootstrap carousel with animation
function bootstrapAnimatedLayer() {
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $("#mainSlider"),
        $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animate__animated']");

    //Initialize carousel
    $myCarousel.carousel({
        interval: 10000
    });

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animate__animated']"
        );
        doAnimations($animatingElems);
    });
}

/* OWL-CAROUSEL */
function owlCarouselActivation() {
    if($('.feature-carousel').length) {
        $('.feature-carousel').owlCarousel({
            autoplay: true,
            autoplayTimeout: 10000,
            navSpeed: 1000,
            loop: true,
            autoplayHoverPause: true,
            pagination: true,
            smartSpeed: 1000,
            margin: 30,
            stagePadding: 0,
            items: 5,
            responsive : {
                0 : {
                    items: 1
                },
                400 : {
                    items: 2
                },
                768 : {
                    items: 3
                },
                1024 : {
                    items: 4
                },
                1400 : {
                    items: 5
                }
            }
        });
        $(".skill-carousel-nav.btn-prev").on("click", function() {
            $(".skill-carousel").trigger("next.owl.carousel")
        });
        $(".skill-carousel-nav.btn-next").on("click", function() {
            $(".skill-carousel").trigger("prev.owl.carousel")
        });
    };
}

// Activation of WOW
function wowActivation() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}

//Testimony Section
let reviewContainer = document.querySelector('.review-buttons');
if (reviewContainer) {
    let currentBtn = document.querySelector('.review-buttons .review-btn.active');
    currentBtn.parentElement.classList.add('active-btn');
    reviewContainer.addEventListener('click', (e)=>{
        let reviewBtn = e.target.parentElement;
        if( 'A' == reviewBtn.nodeName ){
            e.preventDefault();
            let clickedIndex = parseInt(reviewBtn.getAttribute('data-review'));
            let itemList = document.querySelectorAll('.testimony-content .review-single');
            let currentReview = document.querySelector('.review-single.active');
            let currentBtn = document.querySelector('.review-buttons .review-btn.active');
            let currentBtnBox = document.querySelector('.review-buttons .active-btn');
            currentBtnBox.classList.remove('active-btn');
            currentReview.classList.remove('active');
            currentBtn.classList.remove('active');
            itemList[clickedIndex - 1].classList.add('active');
            reviewBtn.classList.add('active');
            reviewBtn.parentElement.classList.add('active-btn');
        }
    });
}

//faq
$('#faq-wraper').on('shown.bs.collapse', function (e) {
    let currentCard = document.querySelector('.collapse.show').parentElement;
    currentCard.classList.add('active-faq');
});

$('#faq-wraper').on('hide.bs.collapse', function (i) {
    let currentCard = document.querySelectorAll('.card');
    currentCard.forEach(element => {
        element.classList.remove('active-faq');
    });
});

/* bs4Accordion */
function bs4Accordion() {
    $('.faq-container [data-toggle=collapse]').on('click', function (e) {
        e.preventDefault();
        if(! $(this).hasClass('collapsed')){
            e.stopPropagation();
            return false;
        }
    });
}


// Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
}


// Header Style and Scroll to Top
function headerStyle() {
    if ($('.main-header').length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.main-header');
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}

headerStyle();

// dropdown menu

var mobileWidth = 991;
var navcollapse = $('.navigation li.dropdown');

$(window).on('resize', function () {
    navcollapse.children('ul').hide();
});

navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
        $(this).children('ul').stop(true, false, true).slideToggle(300);
        $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
    }
});


//Submenu Dropdown Toggle
if ($('.navigation li.dropdown ul').length) {
    $('.navigation li.dropdown').append('<div class="dropdown-btn"><span class="icofont-arrow-up"></span></div>');

    //Dropdown Button
    $('.navigation li.dropdown .dropdown-btn').on('click', function () {
        $(this).prev('ul').slideToggle(500);
        $(this).prev('.megamenu').slideToggle(800);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function (e) {
        e.preventDefault();
    });
}

//Submenu Dropdown Toggle
if ($('.main-header .main-menu').length) {
    $('.main-header .main-menu .navbar-toggle').on('click', function () {
        $(this).prev().prev().next().next().children('li.dropdown').hide();
    });

}
// End Main menu


// Scroll Down to contact form
$(".scroll").on('click', function(e){
    e.preventDefault();
    var hash = this.hash;
    var position = $(hash).offset().top;
    $("html").animate({
        scrollTop : position
    },1000);
});
    
    
/*Video Magnific Popup */
if ($.fn.magnificPopup) {
    $('.video-link').magnificPopup({
        type: 'video',
    });
}

/*Portfolio Magnific Popup */
if ($.fn.magnificPopup) {
    $('.footer-gallery figure').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
              return openerElement.is('a') ? openerElement : openerElement.find('a');
            }
        }
    });
};
    

// Scroll to a Specific Div
if ($('.scroll-to-top').length) {
    $(".scroll-to-top").on('click', function () {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500);

    });
}


/* Back2Top button visibility */
function backToTopVisible() {
     if ($('.scroll-to-top').length) {
        if ($(window).scrollTop() > 300) {
            $(".scroll-to-top").fadeIn(300);
        } else {
            $(".scroll-to-top").fadeOut(300);
        }
    };
}
    
    
/* initialize the contact page map on the "map" div with a given center and zoom*/
if($('#map').length !== 0){
    var map = L.map('map', {
        center: [46.818188, 8.227512],
        zoom: 13,
        zoomControl: false,
        scrollWheelZoom: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
}


jQuery(document).on('ready', function() {
    (function($) {
        bootstrapAnimatedLayer();
        owlCarouselActivation();
        bs4Accordion();
        wowActivation();
        headerStyle();
    })(jQuery);
});

 $(window).on('load', function () {
    handlePreloader();
});
    
jQuery(window).on('scroll', function () {   
    (function ($) {
        headerStyle();
        backToTopVisible();
    })(jQuery);
});
    
})(jQuery);