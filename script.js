$(document).ready(function(){
    $(window).scroll(function(){
        // Check if we are on the index/home page
        // On sub-pages (Publications, Awards, Projects), we want the navbar to ALWAYS stay red.
        if(window.location.pathname.includes("index.html") || window.location.pathname === "/"){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
        } else {
            // Force sticky class on all other pages so the red background never disappears
            $('.navbar').addClass("sticky");
        }

        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    // Note: Ensure these elements exist on the page or the script might throw an error
    if($(".typing").length){
        var typed = new Typed(".typing", {
            strings: ["AI Researcher", "Research Analyst: Computational Pathology", "Machine Learning Engineer"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    if($(".typing-2").length){
        var typed2 = new Typed(".typing-2", {
            strings: ["AI & Digital Pathology", "Clinical AI Tool Development", "Whole-Slide Image Analysis"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }
});