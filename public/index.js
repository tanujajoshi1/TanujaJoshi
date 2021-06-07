

$(document).ready(function(){
    $(window).scroll(function(){

        //SCROLLING EFFECT

        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
          
        }else{
            $('.navbar').removeClass("sticky");
           
        }
    })
var year=new Date().getFullYear();
document.getElementById('year').innerHTML=year;
    //SLIDE UP TO TOP SCRIPT
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // SCRIPT FOR TOGGLE BETWEEN NAVBAR AND MENUBAR
    $('.menu-btn').click(function(){
        
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    var typed=new Typed(".typing",{
        strings:['Student', 'Developer', 'Freelancer'],
        typeSpeed:100,
        backSpeed:50,
        loop:true
    })
    var typed=new Typed(".typing1",{
        strings:['Student', 'Developer', 'Freelancer'],
        typeSpeed:100,
        backSpeed:50,
        loop:true
    })
});
