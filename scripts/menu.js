$(document).ready(function(){

/*$('#fullpage').fullpage({
    anchor: ['top', 'work', ,'know-your-beer', 'venue-template', 'pay-crave', 'lil-bubbas', 'about', 'contact'],
    menu: '#menu',
    verticalCentered: false,
    recordHistory: false,
    navigation: true,
    navigationPosition: 'right',
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    afterLoad: function(anchorLink, index){

      if ($('.menu').hasClass('show')) {
        toggleMenu();
      }

      if($('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').hasClass('open')) {
        toggleIcon();
      }
    }
  });*/

  $('#nav-icon3').click(function(){
    toggleIcon();
  });

  $('.menu-button').click(function(event) {
    toggleMenu();
  });

  $('#menu').click(function(event){
    toggleMenu();
    toggleIcon();
  });

  function toggleMenu() {
    $('.menu').toggleClass('show');
  }

  function toggleIcon() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
  }

  if($('#home').hasClass('home-container')) {
    $('.menu-button-container').addClass('hide');
  }

  if($('#philosophy').hasClass('philosophy-container')) {
    $(document.body).addClass('red-overlay');
    $('.logo').addClass('white');
    $('#footer').addClass('white');
  }

  if($('#work').hasClass('work-container')) {
    $(document.body).addClass('yellow-overlay');
    $('.logo').addClass('white');
    $('#footer').addClass('white');
  }

  if($('#contact').hasClass('contact-container')) {
    $(document.body).addClass('blue-overlay');
    $('.logo').addClass('white');
    $('#footer').addClass('white');
  }

  // Show Philosophy
  // $('.philosophy').click(function(event) {
  //   togglePhilosophy();
  // });

  // $('.close-section').click(function(event) {
  //   togglePhilosophy();
  // });

  // function togglePhilosophy() {
  //   // event.preventDefault();
  //   $('.philosophy-container').toggleClass('show');
  //   $('.home-container').toggleClass('hide');
  //   $('.navbar').toggleClass('hide');
  //   $('footer').toggleClass('hide');
  // }

});
