$(window).scroll(function() {
    if (screen.width > 767) {
      if ($(this).scrollTop() > 50){
      $('.header-custom').addClass("sticky fixed-top");
      $('body').addClass("p-custom");
      }
      else{
      $('.header-custom').removeClass("sticky fixed-top");
      $('body').removeClass("p-custom");
      }
      }
    });

$(function(){
    if (screen.width < 768){
      $('.fix-top-custom').addClass("sticky fixed-top");
      $('body').addClass("p-custom");
      }
      // else{
      // $('.header-custom').removeClass("sticky fixed-top");
      // $('body').removeClass("p-custom");
      // }
      // });
  });


//QUANTITY
$('.minus').click(function() {
    var quantity = parseInt($('.number').html());
    quantity -= 1;
    if (quantity < 1) {
      quantity = 1;
    }
    updateQuantity(quantity);
    updatePrice(quantity);
  });

  $('.plus').click(function() {
    var quantity = parseInt($('.number').html());
    quantity += 1;
    updateQuantity(quantity);
    updatePrice(quantity);
  });

  function updatePrice(quantity) {
    var price = 1000;
    price = price * quantity;
    $('#price').html(price + " руб");
  }

  function updateQuantity(quantity) {
    $('.number').html(quantity);
  }