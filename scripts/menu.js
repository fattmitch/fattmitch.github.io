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
    $(body).toggleClass('overflow-hidden');
  }

  function toggleIcon() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
  }

  if($('#home').hasClass('home-container')) {
    $('.menu-button-container').addClass('hide');
  }

  // if($('#philosophy').hasClass('philosophy-container')) {
  //   $('.logo').addClass('white');
  //   $('#footer').addClass('white');
  // }

  // if($('#contact').hasClass('contact-container')) {
  //   $('.logo').addClass('white');
  //   $('#footer').addClass('white');
  // }

  if($('#mothers-day').hasClass('mothers-day-container')) {
    $(document.body).addClass('purple-overlay');
    $('#footer').addClass('white');
  }

  if($('#fathers-day').hasClass('fathers-day-container')) {
    $(document.body).addClass('blue-green-overlay');
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
