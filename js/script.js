//burger
$(document).ready(function() {
    burger = $('.header__burger');
    burger.click(function() {
        burger.toggleClass('header__burger-open');
        $('.nav').toggleClass('nav-open');
    });

    $(document).mouseup( function(e) {
        if ( !burger.is(e.target) && $('.nav').has(e.target).length === 0 ) {
            burger.removeClass('header__burger-open');
            $('.nav').removeClass('nav-open');
        }
    });
});

//top sallers 

$(document).ready(function() {
    topFirst = $('.top__item').first();
    topContent = $('.top__content');

    topFirst.click(function() {
        topContent.toggleClass('top__content-open');
    });

    $(document).mouseup( function(e) {
        if ( !topFirst.is(e.target) && topContent.has(e.target).length === 0 ) {
            topContent.removeClass('top__content-open');
        }
    });
});

// sliders

$(document).ready(function(){
    $('.live__slider').slick({    
        arrows: false,
        dots: true,
        
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.collection__slider').slick({    
        arrows: false,
        dots: false,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1199.98,
                settings: {
                    dots: true,
                }
            }
        ]
    })


    if (window.innerWidth <= 992) {
        $('.today__slider').slick({ 
            arrows: false,
            dots: true,
            
            slidesToShow: 3,
            slidesToScroll: 1,
        })
    }

    $(window).resize(function(){
        if (window.innerWidth <= 992) {
            $('.today__slider').not('.slick-initialized').slick({ 
                arrows: false,
                dots: true,
                
                slidesToShow: 3,
                slidesToScroll: 1,
            })
        } else if ($('.today__slider').hasClass('slick-initialized')){
            $('.today__slider').slick('unslick');
        }
    })
})