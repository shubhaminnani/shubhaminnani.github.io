$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar logic
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["AI Researcher", "Research Analyst: Computational Pathology", "Machine Learning Engineer"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["AI & Digital Pathology", "Clinical AI Tool Development", "Whole-Slide Image Analysis"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
});