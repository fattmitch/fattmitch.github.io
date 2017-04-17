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

  function toggleMenu() {
    $('.menu').toggleClass('show');
  }

  function toggleIcon() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
  }
  
});
