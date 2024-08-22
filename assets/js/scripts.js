/* ==========================================================================
   Theme Name: My Theme
   Script Version: 1.0
   Author: Your Name
   Description: Custom JavaScript for theme functionality.
   ========================================================================== */

/* ================================
   Document Ready
   ================================ */
$(document).ready(function() {
    console.log('Document ready!');
    
   
    // Initialize Slick Slider
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000, // Speed of transition
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true, // Fade transition effect
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Increased delay between slides
        cssEase: 'linear' // Smooth transition
    });

    $('.news-slick').slick({
        infinite: true,          // Enable infinite loop
        slidesToShow: 3,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll at once
        arrows: true,            // Show next/prev arrows
        dots: false,             // Hide dots navigation
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // Adjust margins between slides
    $('.news-slick .slick-slide').css('margin', '0 5px'); // 10px total space (5px left and 5px right)

    $('.comments-slider').slick({
        infinite: true,          // Enable infinite loop
        slidesToShow: 2,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll at once
        arrows: true,            // Show next/prev arrows
        dots: false,             // Hide dots navigation
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

// Initialize Slick sliders
        $('.featured-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    
        $('.testimonial-carousel').slick({
        
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
          autoplaySpeed: 5000,
          fade: true,
          cssEase: 'linear'
        });


    // Car Type to Model and Year Visibility
    $('#car-type').on('change', function() {
        var selectedType = $(this).val();
        var carModelSelect = $('#car-model');
        var yearSelect = $('#year');
        
        // Clear previous options
        carModelSelect.empty().append('<option value="">Select Car Model</option>');
        yearSelect.empty().append('<option value="">Select Year</option>');

        // Update models based on selected type
        var models = {
            sedan: [
                { value: 'accord', text: 'Honda Accord' },
                { value: 'camry', text: 'Toyota Camry' }
            ],
            suv: [
                { value: 'crv', text: 'Honda CR-V' },
                { value: 'rav4', text: 'Toyota RAV4' }
            ],
            truck: [
                { value: 'f150', text: 'Ford F-150' },
                { value: 'silverado', text: 'Chevrolet Silverado' }
            ],
            coupe: [
                { value: 'mustang', text: 'Ford Mustang' },
                { value: 'camaro', text: 'Chevrolet Camaro' }
            ]
        };

        if (selectedType) {
            // Populate models
            models[selectedType].forEach(function(model) {
                carModelSelect.append('<option value="' + model.value + '">' + model.text + '</option>');
            });
            // Show the model and year fields
            $('#car-model-group, #year-group').show();
        } else {
            // Hide model and year fields if no type is selected
            $('#car-model-group, #year-group').hide();
        }
    });

    // Initialize Slick Slider for Team Slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.collapse').on('show.bs.collapse', function() {
        $(this).parent().find('.btn-link').addClass('active');
    }).on('hide.bs.collapse', function() {
        $(this).parent().find('.btn-link').removeClass('active');
    });
    
});


/* ================================
   AOS Initialization
   ================================ */
AOS.init({
    duration: 1200,  // Animation duration in milliseconds
    easing: 'ease-in-out',  // Easing function
    once: true  // Whether animation should happen only once
});


// ================================
// JS for About Page
// ================================


