//Swiper
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  freeMode: true,
  
  // pagination 설정
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-pagination-bullet"></span>';
    },
  },
  
  // navigation 버튼
  navigation: {
    nextEl: '.fa-chevron-right',
    prevEl: '.fa-chevron-left',
  },
  
  // 한 칸씩 이동 설정
  slideToClickedSlide: true,
  slidesPerGroup: 1,
});



//하단 이미지 슬라이드 영역
$(document).ready(function() {
    var position=0; 
    var movesize=2;
    var timeonoff;
    
    $('.img_slide ul').after($('.img_slide ul').clone());
   
    function partnerMove(){
         position-=movesize;
         $('.img_slide').css('left',position);
         
          if(position < -2244){
                $('.img_slide').css('left',0);
                position=0;
          } 
    };
 
      timeonoff= setInterval(partnerMove, 10);
     
        $('.img_slide').hover(function(){
         clearInterval(timeonoff);
     },function(){
         timeonoff= setInterval(partnerMove, 10);	
     });
     
     
  });