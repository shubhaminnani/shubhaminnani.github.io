$(document).ready(function () {

    /* --- Sticky Navbar --- */
    $(window).scroll(function () {
        if (this.scrollY > 60) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    /* --- Scroll to top --- */
    $('.scroll-up-btn').click(function () {
        $('html').css('scrollBehavior', 'auto');
        $('html').animate({ scrollTop: 0 }, 300, function () {
            $('html').css('scrollBehavior', 'smooth');
        });
    });

    /* --- Mobile menu toggle --- */
    $('#menu-btn').click(function () {
        $('#menu').toggleClass('active');
        const icon = $(this).find('i');
        if ($('#menu').hasClass('active')) {
            icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            icon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    /* Close menu on link click */
    $('#menu li a').click(function () {
        $('#menu').removeClass('active');
        $('#menu-btn i').removeClass('fa-times').addClass('fa-bars');
    });

    /* --- Typed.js — Hero --- */
    if ($('.typing-hero').length) {
        new Typed('.typing-hero', {
            strings: [
                'Computational Pathology',
                'Whole-Slide Image Analysis',
                'Clinical AI Development',
                'Interpretable Deep Learning'
            ],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    /* --- Typed.js — About --- */
    if ($('.typing-about').length) {
        new Typed('.typing-about', {
            strings: [
                'AI & Digital Pathology',
                'Clinical AI Tool Development',
                'Whole-Slide Image Analysis',
                'Prognostic Stratification'
            ],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    /* --- Active nav link on scroll (index page only) --- */
    if ($('#home').length) {
        const sections = ['#home', '#about', '#experience', '#highlights', '#contact'];
        $(window).scroll(function () {
            const scrollPos = $(this).scrollTop() + 80;
            sections.forEach(function (id) {
                const el = $(id);
                if (el.length) {
                    if (el.offset().top <= scrollPos && el.offset().top + el.outerHeight() > scrollPos) {
                        $('.navbar .menu li a').removeClass('active');
                        $(`.navbar .menu li a[href="${id}"]`).addClass('active');
                    }
                }
            });
        });
    }

    /* --- Fade-in on scroll (simple CSS class add) --- */
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.highlight-card, .timeline-item, .stat-item, .award-card, .project-card, .pub-list li').forEach(function (el) {
        el.classList.add('fade-in');
        observer.observe(el);
    });

});
