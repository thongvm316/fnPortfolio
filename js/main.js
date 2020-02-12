$(document).ready(function () {
   let $btns = $('.project-area .button-group button');
   $btns.click(function (e) { 
       e.preventDefault();
       $btns.removeClass('active');
       e.target.classList.add('active'); // add vao thang dc click
        console.log(e.target);
       let selector = $(e.target).attr('data-filter');
       $('.project-area .grid').isotope({
            filter : selector
       });
       return false;
   }); 

//    $('.project-area .button-group #btn1').trigger('click');

  //  $('.project-area .grid .test-group-link').magnificPopup({ 
  //      type: 'image',
  //      gallery:{enabled:true}
  //  });

   //Owl-carousel
//    $('.site-main .about-area .owl-carousel').owlCarousel({
//        loop: true,
//        autoplay: true,
//        dots: true,
//        margin: 10,
//        responsive: {
//            0: {
//             items: 1
//            },
//            544: {
//                items: 2
//            }
//        }
//    });

   // sticky Nav
   let nav_offset_top = $('.header_area').height() + 50;

   function navbarFixed() {
     if ($('.header_area').length) {
         $(window).scroll(function () { 
             let scroll = $(window).scrollTop();
             if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('navbar_fixed');                 
             } else {
               $('.header_area .main-menu').removeClass('navbar_fixed');
             }
         });
     }
   }

   navbarFixed();
});