(function($) { 
    "use strict";   
      $(window).on('load', function() {
  
      // Material
        $.material.init();
  
      // Dropdown 
        $('.dropdown-toggle').dropdown() 

      // Carousel
        $('.carousel').carousel()
  
      // Preloader
      $('#preloader').fadeOut();
    
      //WOW Scroll Spy
        var wow = new WOW({
        //disabled for mobile
        mobile: false
        });
  
        wow.init(); 
     
    
  
      $('#Material-image-carousel').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
      $('#Material-image-carousel').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
   
  
      // Counter JS
      $('.work-counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $(this).find('.timer').each(function() {
              var $this = $(this);
              $({
                Counter: 0
              }).animate({
                Counter: $this.text()
              }, {
                  duration: 3000,
                  easing: 'swing',
                  step: function() {
                  $this.text(Math.ceil(this.Counter));
                }
              });
          });
          $(this).off('inview');
        }
      });	
   
      // Tab
      $('#v-pills-tab a').on('click',function (e) {
        e.preventDefault()
        $("#acte-area").attr('class', '');  
        $("#ates-area").attr('class', '');  
        $("#v-pills-tab a").removeClass('active');  
        $("#v-pills-tab a").removeClass('show');  
      })  

      // acte
      $('#acte-area .acte-form-bloc .btn').on('click',function (e) {
        e.preventDefault()
        $("#acte-area").attr('class', 'acte-form-view'); 
      })
      $('#acte-area .acte-track-bloc .btn').on('click',function (e) {
        e.preventDefault()
        $("#acte-area").attr('class', 'acte-track-view');  
      })

      // Attestation
      $('#ates-area .ates-form-bloc .btn').on('click',function (e) {
        e.preventDefault()
        $("#ates-area").attr('class', 'ates-form-view'); 
      })
      $('#ates-area .ates-track-bloc .btn').on('click',function (e) {
        e.preventDefault()
        $("#ates-area").attr('class', 'ates-track-view');  
      })
      
       // Slick Nav 
      $('.wpb-mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'span',
        allowParentLinks: true,
        duplicate: false,
        label: '',
        closedSymbol: '<i class="mdi mdi-chevron-right"></i>',
        openedSymbol: '<i class="mdi mdi-chevron-down"></i>',
      });
  
       // Back Top Link
        var offset = 200;
        var duration = 500;
        $(window).scroll(function() {
          if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
          } else {
            $('.back-to-top').fadeOut(400);
          }
        });
        
        $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      // stepper tabs
      $('#myTab1.nav-tabs+.tab-content .btn-primary').click(function(){
        $('#myTab1.nav-tabs li a.active').parent('li').next('li').find('a').trigger('click');  
      });
      
        $('#myTab1.nav-tabs+.tab-content .btn-default').click(function(){
          $('#myTab1.nav-tabs li a.active').parent('li').prev('li').find('a').trigger('click');   
      });
      
      // $('select.search').editableSelect({ effects: 'slide' });  

      $('select.select').selectpicker({ 
        liveSearch: false 
      });
      $('select.search').selectpicker({ 
        liveSearch: true,
        liveSearchNormalize: true,
        maxOptions: 1 
      });

    });      
  

  }(jQuery));


