

const boxes = document.querySelectorAll('img');
boxes.forEach((img) => {
    img.classList.add("aos-init");
    img.setAttribute('data-aos', 'fade-in');
    img.setAttribute('data-aos-delay', '300');
});

AOS.init({
    easing: 'ease-in-out-sine'
});


jQuery(document).ready(function ($) {
    $("video[autoplay]").each(function(){ this.play(); });
});


//$(document).ready(function() {

    // $('.image-popup-vertical-fit').magnificPopup({
    //     type: 'image',
    //     closeOnContentClick: true,
    //     mainClass: 'mfp-img-mobile',
    //     image: {
    //         verticalFit: true
    //     }
        
    // });

    // $('.image-popup-fit-width').magnificPopup({
    //     type: 'image',
    //     closeOnContentClick: true,
    //     image: {
    //         verticalFit: false
    //     }
    // });

    // $('.image-popup-no-margins').magnificPopup({
    //     type: 'image',
    //     closeOnContentClick: true,
    //     closeBtnInside: false,
    //     fixedContentPos: true,
    //     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    //     image: {
    //         verticalFit: true
    //     },
    //     zoom: {
    //         enabled: true,
    //         duration: 300 // don't foget to change the duration also in CSS
    //     }
    // });

//});