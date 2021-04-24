$(function(e) {

  //search
  $('.search__icon').click(function() {
    $('.header .logo, .certificate, .h-b-right__content, .h-b-left__content, .search').addClass('search_hidden');
    $('.search_visible').removeClass('hidden');
    $('.header-head__bottom').css('height', '64px');
    $('.auth, .h-basket').css('display', 'none');
  });
  $('.search_visible__close').click(function() {
    $('.header .logo, .certificate, .h-b-right__content, .h-b-left__content, .search').removeClass('search_hidden');
    $('.search_visible').addClass('hidden');
    $('.header-head__bottom').css('height', 'auto');
  });





  //TOGGLE MENU
  $('.menu__btn').click(function() {
    $(this).toggleClass('menu__btn_active');
    $('.toggle_menu').slideToggle();
    $('.h-basket').hide();
    $('.auth').hide();
    $('.header__head_mob .icon-icon-cart').removeClass('icon-icon-small-close');
    $('.header__head_mob .icon-icon-cart').parent().css('padding-top', '0px');
  });

  //BREND COLLUMNS
  $('.view_four_items').click(function() {
    $('.brend__col').removeClass('col-md-4');
    $('.brend__col').addClass('col-md-3');
    $('.reminder, .o-reminder').addClass('rem__padd');
  });
  $('.view_three_items').click(function() {
    $('.brend__col').removeClass('col-md-3');
    $('.brend__col').addClass('col-md-4');
    $('.reminder, .o-reminder').removeClass('rem__padd');
  });

  // AUTHORIZATION
  $('.auth__close').click(function() {
    $('.auth').hide();
    $('.forgot-pass__content').addClass('hidden');
    $('.auth').css({
      'height' : 'auto'
    });
  });
  $('.acc__icon').click(function() {
    $('.checkout .auth').hide();
    $('.header .auth').toggle();
    $('.h-basket').hide();
  });
  $('.login__btn').click(function() {
    $('.checkout .auth').toggle();
    $('.header .auth').hide();
    $('.h-basket').hide();
  });
  $('.header .forgot__pass').click(function() {
    $('.header .forgot-pass__content').removeClass('hidden');
    $('.header .auth').css({
      'height' : '250px'
    });
  });
  $('.checkout .forgot__pass').click(function() {
    $('.checkout .forgot-pass__content').removeClass('hidden');
    $('.checkout .auth').css({
      'height' : '200px'
    });
  });
  $('.header .log-in').click(function() {
    $('.header .forgot-pass__content').addClass('hidden');
    $('.header .auth').css({
      'height' : 'auto'
    });
  });
  $('.checkout .log-in').click(function() {
    $('.checkout .forgot-pass__content').addClass('hidden');
    $('.checkout .auth').css({
      'height' : 'auto'
    });
  });
  $('.auth__tab').click(function() {
    $('.forgot-pass__content').addClass('hidden');
    $('.auth').css({
      'height' : 'auto'
    });
  });
  $(".auth__tab-item").not(":first").hide();
  $(".auth .auth__tab").click(function() {
    $(".auth .auth__tab").removeClass("auth_active").eq($(this).index()).addClass("auth_active");
    $(".auth__tab-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("auth_active");

  // HEADER BASKET
  $('.header__basket').click(function() {
    $('.h-basket').toggle();
    $('.auth').hide();
  });
  $('.cart__icon').click(function() {
    $('.h-basket').toggle();
    $('.auth').hide();
    $('.toggle_menu').hide();
    $('.menu__btn').removeClass('menu__btn_active');
  });
  $('.icon-icon-small-close').click(function() {
    $('.h-basket').hide();
  });
  $('.nav__link').click(function() {
    $('.h-basket').hide();
    $('.auth').hide();
  });

  $('.header__head_mob .icon-icon-cart').click(function() {
    $(this).toggleClass('icon-icon-small-close');
    $(this).parent().css('padding-top', '3px');
  });

  //WISHLIST ICON
  $('.favorites__icon .icon-icon-wishlist').click(function() {
    $(this).toggleClass('icon-icon-wishlist-select');
    $(this).toggleClass('icon-icon-wishlist');
  });

  //PRODUCT COLOR
  $('.colors span').click(function() {
    $('.colors span').removeClass('product_color_active');
    $(this).addClass('product_color_active');
  });
  //PRODUCT SIZE
  $('.sizes span').click(function() {
    $('.sizes span').removeClass('product_size_active');
    $(this).addClass('product_size_active');
  });
  //PRODUCT TABS
  $(".product__body").not(":first").hide();
  $(".product__content .product__tab").click(function() {
    $(".product__content .product__tab").removeClass("product__tab_active").eq($(this).index()).addClass("product__tab_active");
    $(".product__body").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("product__tab_active");

  

   // SCROLL TO
   $('a[href^="#to"]').on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

   //GAME
   $('.game__close').click(function() {
    $('.game__wrap').hide();
  });
   $('.game__text').click(function() {
    $('.game__wrap').show();
  })

   //PROFILE TABS
   $(".profule-content__item").not(":first").hide();
   $(".profile__body .profile__tab").click(function() {
    $(".profile__body .profile__tab").removeClass("profile__tab_active").eq($(this).index()).addClass("profile__tab_active");
    $(".profule-content__item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("profile__tab_active");

  //ORDER LINK
  $('.order__number').click(function() {
    $(this).parents('.order-table__body').find('.order_toggle').slideToggle();
  });

  //ACCOURDEON
  $(".accordeon dd").prev().click(function() {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("acc_active");
    $(this).next().not(":visible").slideDown().prev().addClass("acc_active");
  });

  

	// SLIDERS (Слайдеры)
  // HEADER SLIDER
  $('.header__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.brends__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
  });
  //START

  // PRODUCT SLIDER
  $('.one-product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.one-product__slider_navigation',
    dots: false,
    infinite: true,
    focusOnSelect: true,
    arrows: true,
    swipe: false,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
        focusOnSelect: false,
        swipe: true,
      }
    }
    ]
  });
  $('.one-product__slider_navigation').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    asNavFor: '.one-product__slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
      }
    }
    ]
  });
  // FOR MAN FOOT SLIDER
  $('.bc-foot__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-right-arrow"></i></button>',
  });
  // SALE SLIDER
  $('.sale__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
  // FOR MAN HEAD SLIDER
  $('.tab__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
  $('.tabs__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data('thumb');
      return '<span>'+thumb+'</span>';
    },
  });

  $(".ch__more").click(function () {
    $('.ch__about_hidden').slideToggle();
    $(this).toggleClass('ch__more_active');
    $(this).text(function(i, text){
      return text === "Показать подробнее" ? "Свернуть" : "Показать подробнее";
    })
  });

	// POPUP'S (Всплывающее окно)
	$('.inst__link').magnificPopup({
		mainClass: 'mfp-fade',
    closeMarkup: '<button class="mfp-close mfp-close__btn icon-icon-small-close"></button>'
  });
  $('.product__video').magnificPopup({
    mainClass: 'mfp-fade',
    closeMarkup: '<button class="mfp-close mfp-close__btn mfp-close__btn-2 icon-icon-small-close"></button>'
  });
  $('.quick-view').magnificPopup({
    mainClass: 'mfp-fade',
    closeMarkup: '<button class="mfp-close mfp-close__btn icon-icon-small-close"></button>',
    callbacks: {
      open: function() {
        $('.quick-view__popup').addClass('quick-view__popup_active');
      },
      close: function() {
        $('.quick-view__popup').removeClass('quick-view__popup_active');
      }
    }
  });

  // VIEW FILTER
  $('.view > div').click(function() {
    $('.view > div').removeClass('view_three_items_active');
    $(this).addClass('view_three_items_active');
  });

  //REMINDER FORM PRODUCT
  $('.no-product__reminder').click(function() {
    $('.o-reminder').hide();
    $(this).parents('.no-item').find('.o-reminder').show();
  });
  $('.o-reminder__close').click(function() {
    $(this).parent().hide();
  });
  $('.reminder__close').click(function() {
    $(this).parent().hide();
  });
  //INSTAGRAM CLOSE ICON
  $('.mfp-close').addClass('icon-icon-small-close');

  $('.item__close').click(function() {
    $(this).parent().parent().css("display", "none");
  });

  //FILTER ITEMS
  $('.filter__item').click(function() {
    $(this).toggleClass('filter__item_active');
  });

  // Селект
  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('sel-hidden'); 
    $this.wrap('<div class="sel"></div>');
    $this.after('<div class="sel-styled"></div>');

    var $styledsel = $this.next('div.sel-styled');
    $styledsel.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'sel-options'
    }).insertAfter($styledsel);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledsel.click(function(e) {
      e.stopPropagation();
      $('div.sel-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.sel-options').hide();
      });
      $(this).toggleClass('active').next('ul.sel-options').toggle();
    });

    $listItems.click(function(e) {
      e.stopPropagation();
      $styledsel.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
            //console.log($this.val());
          });

    $(document).click(function() {
      $styledsel.removeClass('active');
      $list.hide();
    });
  });

  //SELECT CHECK
  $('.sel-options li').click(function() {
    $(this).parent().find('li').removeClass('li_active');
    $(this).addClass('li_active');
  });

  //СЧЕТЧИК
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  //DISCOUNT INPUT
  $('.discount__input').click(function() {
    $('.discount__btn').show();
  });

  // BREND TEXT TOGGLE
  $('.brend-buy__head').click(function() {
    $('.brend-buy__text_hidden').slideToggle();
    $('.brend-buy__head span').toggleClass('brend-arrow_active');
  });

  //FILTER TOGGLE
  $('.filter').click(function() {
    $('.filter_toggle').slideToggle();
    $(this).toggleClass('filter_active');
  });


$(window).resize(function() {
    var wid = $(window).width();
    if(wid > 991) {
      $('.tovar-img')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({
        magnify: 2
      });
    } else {
     $('.tovar-img').trigger('zoom.destroy');
   }
 });
  if($(window).width() > 991) {
    $('.tovar-img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom({
      magnify: 2
    });
  } else {
   $('.tovar-img').trigger('zoom.destroy');
 }

  // PRICE SLIDER
  var keypressSlider = document.getElementById('keypress');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];

  noUiSlider.create(keypressSlider, {
    start: [3000, 10000],
    connect: true,
    tooltips: false,
    range: {
      'min': 0,
      'max': 20000
    }
  });

  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    keypressSlider.noUiSlider.set(r);
  }




  // Listen to keydown events on the input field.
  inputs.forEach(function(input, handle) {

    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });

    input.addEventListener('keydown', function( e ) {

      var values = keypressSlider.noUiSlider.get();
      var value = Number(values[handle]);

    // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
    var steps = keypressSlider.noUiSlider.steps();

    // [down, up]
    var step = steps[handle];

    var position;

    // 13 is enter,
    // 38 is key up,
    // 40 is key down.
    switch ( e.which ) {

      case 13:
      setSliderHandle(handle, this.value);
      break;

      case 38:

        // Get step to go increase slider value (up)
        position = step[1];

        // false = no step is set
        if ( position === false ) {
          position = 1;
        }

        // null = edge of slider
        if ( position !== null ) {
          setSliderHandle(handle, value + position);
        }

        break;

        case 40:

        position = step[0];

        if ( position === false ) {
          position = 1;
        }

        if ( position !== null ) {
          setSliderHandle(handle, value - position);
        }

        break;
      }
    });
  });

  keypressSlider.noUiSlider.on('update', function( values, handle ) {
    inputs[handle].value = Math.round(values[handle]);
  });







});



// LOADER (Загрущик)
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});


