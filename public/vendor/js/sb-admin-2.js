(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    console.log("entre");
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });




  // Toggle the side navigation
  $("#sidebarToggleBrand, #sidebarToggleTopBrand").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      console.log("entre")
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

 
  $(document).ready(function() {

  var availableTags = [];


  $(".collapse-item").each(function(indice,elemento) {
    // crea un valor personalizado con label (texto) y value (href)
    var el = {"label":$(elemento).text(), "value":$(elemento).attr("name"),"link":$(elemento).attr("href") || "" };
    availableTags.push(el);
   
  });

  // ahora que tenemos ya los datos, crea el autocomplete
  $("#autocompletar").autocomplete({
 
    source: availableTags, // indica tu fuente de datos
    select: function( event, ui ) {
      // muestra el nombre indicada en el label
      $( "#autocompletar" ).val( ui.item.label );
      // redircciona al la url indicada en el value
      if (ui.item.link != "" ) {
           location.assign( ui.item.link );
           // window.open(ui.item.link)
        } else {
            CambiarSource(ui.item.value);
        }

      //alert("Redireccionar a " + ui.item.value);
      // location.assign( ui.item.value );
      return false;
    }
  });

  $(".collapse-item").each(function(indice,elemento){
    $(elemento).on("click",function(){
      CambiarSource($(elemento).attr("name"));
    });
  })
  
  function CambiarSource(nuevoLink)
  {
    $("#iframePBI").attr("src",nuevoLink);
  }

}
);


$(window).load(function() {

  var availableTags = [];


  $(".collapse-item").each(function(indice,elemento) {
    // crea un valor personalizado con label (texto) y value (href)
    var el = {"label":$(elemento).text(), "value":$(elemento).attr("name"),"link":$(elemento).attr("href") || "" };
    availableTags.push(el);
   
  });

  // ahora que tenemos ya los datos, crea el autocomplete
  $("#autocompletar").autocomplete({
 
    source: availableTags, // indica tu fuente de datos
    select: function( event, ui ) {
      // muestra el nombre indicada en el label
      $( "#autocompletar" ).val( ui.item.label );
      // redircciona al la url indicada en el value
      if (ui.item.link != "" ) {
           location.assign( ui.item.link );
           // window.open(ui.item.link)
        } else {
            CambiarSource(ui.item.value);
        }

      //alert("Redireccionar a " + ui.item.value);
      // location.assign( ui.item.value );
      return false;
    }
  });

  $(".collapse-item").each(function(indice,elemento){
    $(elemento).on("click",function(){
      CambiarSource($(elemento).attr("name"));
    });
  })
  
  function CambiarSource(nuevoLink)
  {
    $("#iframePBI").attr("src",nuevoLink);
  }

}
);