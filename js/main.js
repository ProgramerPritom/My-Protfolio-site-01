
  var typed = new Typed('.animate', {
    strings:[
        "Font-End Designer",
        "PHP Developer",
        "Laravel Learner"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY >0);
});
// Portfolio gallery
$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
      $('.item-Box').show('1000');
    }else{
      $('.item-Box').not('.'+value).hide('1000');
      $('.item-Box').filter('.'+value).show('1000');
    }
  })
  $('.list').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

})
// Counter Js

$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
})
// Owl Carosel
$('#slider').owlCarousel({
      loop:true,
      margin:15,
      nav:false,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
})



















