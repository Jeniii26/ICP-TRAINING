document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('#menu ul');
    
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
        console.log('Hamburger clicked! Menu class list:', menu.classList);
        console.log('Menu display style:', window.getComputedStyle(menu).display);
        console.log('Menu visibility:', menu.offsetHeight > 0 ? 'Visible' : 'Hidden');
    });

    // Slideshow class
    class Slideshow {
        constructor(containerSelector, slideSelector, interval) {
            this.container = document.querySelector(containerSelector);
            if (!this.container) {
                console.error(`Container not found for selector: ${containerSelector}`);
                return; // Exit if the container is not found
            }
            this.slides = this.container.querySelectorAll(slideSelector);
            if (this.slides.length === 0) {
                console.error(`No slides found for selector: ${slideSelector}`);
                return; // Exit if no slides are found
            }
            this.interval = interval;
            this.currentSlideIndex = 0;

            this.showNextSlide = this.showNextSlide.bind(this);
            this.init();
        }

        init() {
            this.slides.forEach((slide) => {
                slide.style.display = 'none'; // Hide all slides initially
            });
            this.slides[this.currentSlideIndex].style.display = 'block'; // Show the first slide
            this.slideInterval = setInterval(this.showNextSlide, this.interval); // Start the slideshow
        }

        showNextSlide() {
            this.slides[this.currentSlideIndex].style.display = 'none'; // Hide current slide
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length; // Move to the next slide
            this.slides[this.currentSlideIndex].style.display = 'block'; // Show the next slide
        }
    }

    // Create a new slideshow instance for the Home page
    const slideshowHome = new Slideshow('.container .slideshow-container', '.slide', 3000); // 3 seconds

    // Create a new slideshow instance for the About page
    const slideshowAbout = new Slideshow('.container-about .slideshow-container-2', '.slideAbout', 3000); // 3 seconds

    // FAQ functionality
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach(item => {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");
        const icon = question.querySelector(".icon-main");

        icon.addEventListener("click", function () {
            answer.classList.toggle("non-active"); // Toggle answer visibility
            const i = icon.querySelector("i");
            i.classList.toggle("fa-xmark"); // Change icon to 'x' when open
            i.classList.toggle("fa-plus"); // Change icon back to 'plus' when closed
        });
    });

    // Search functionality for FAQs
    const searchInput = document.getElementById('search-input');
    const faqsList = document.querySelectorAll('.faq');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        faqsList.forEach(faq => {
            const question = faq.querySelector('.question').textContent.toLowerCase();
            const answer = faq.querySelector('.answer').textContent.toLowerCase();

            if (question.includes(query) || answer.includes(query)) {
                faq.style.display = 'block'; // Show matching FAQ
            } else {
                faq.style.display = 'none'; // Hide non-matching FAQ
            }
        });
    });

    // Print-specific adjustments
    window.onbeforeprint = function() {
        // Show all slides for printing
        const homeSlides = document.querySelectorAll('.container .slide');
        const aboutSlides = document.querySelectorAll('.container-about .slideAbout');
        
        homeSlides.forEach(slide => {
            slide.style.display = 'block'; // Show all home page slides
        });
        
        aboutSlides.forEach(slide => {
            slide.style.display = 'block'; // Show all about page slides
        });

        // Stop the slideshow intervals
        clearInterval(slideshowHome.slideInterval);
        clearInterval(slideshowAbout.slideInterval);

        // Ensure all FAQ answers are visible
        const faqAnswers = document.querySelectorAll(".faq .answer");
        faqAnswers.forEach(answer => {
            answer.classList.remove("non-active"); // Expand all answers
            answer.style.display = 'block'; // Ensure visibility
        });
    };
});
