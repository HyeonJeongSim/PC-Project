//상단 주요 인증서

// var swiper = new Swiper('.swiper-container', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     loop: true,
//     coverflowEffect: {
//       rotate: -10,
//       stretch: 0,
//       depth: 300,
//       modifier: 1,
//       slideShadows : true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
//   });

//   var gdata = [
//     {'title':'ASME U STAMP', 'desc':'압력 용기 설계 및 제조에 대한 품질과 안전을 <br>보증하는 ASME 인증입니다.'},
//     {'title':'SEL License', 'desc':'전력설비의 설계, 제조, 설치 및 유지 관리에 대한 전문성을 인증하는 라이센스입니다.'},
//     {'title':'National Board Certification', 'desc':'압력 설비의 검사, 수리, 인증을 위한 국가 <br> 인증으로, 안전성과 신뢰성을 보장합니다.'},
//     {'title':'신·재생에너지 전문기업 등록증', 'desc':'신재생에너지 분야에서 기술력과 전문성을 갖춘 <br> 기업으로 인증받은 증서입니다.'},
//     {'title':'특정설비제조 등록증', 'desc':'특정 설비 제조에 필요한 기술적 요건과 품질을 <br> 인증하는 등록증입니다.'},
//   ];
//   var text = document.getElementById('text');
//   var output ='';

//   output +='<dl>';
//   output +='<dt>'+ gdata[0].title +'</dt>';
//   output +='<dd>'+ gdata[0].desc +'</dd>';
//   output +='</dt>';  
//   text.innerHTML = output;

//   swiper.on('transitionEnd', function() {
//       //console.log(swiper.realIndex);
//       var sind = swiper.realIndex;  // 0~9
      
//       output ='<dl>';
//       output +='<dt>'+ gdata[sind].title +'</dt>';
//       output +='<dd>'+ gdata[sind].desc +'</dd>';
//       output +='</dt>';  
//       text.innerHTML = output;
//   });

   
         
//하단 인증서

// $(document).ready(function() {
//   // 초기에 7번째 이후 항목들 숨기기
//   $('.pdf_item:gt(5)').addClass('hide');
  
//   // More 버튼 클릭 이벤트
//   $('.more').click(function(e){
//       e.preventDefault();
      
//       // 현재 숨겨진 상태인지 확인
//       var isHidden = $('.pdf_item:gt(5)').hasClass('hide');
      
//       if(isHidden){
//           // 열때
//           $('.pdf_item:gt(5)').removeClass('hide');
//           $(this).text('닫기');

//           // 부드러운 스크롤
//           $('html, body').animate({
//               scrollTop: $('.pdf_item:gt(5)').first().offset().top - 100
//           }, 500);
          
//       } else {
//           // 닫을 때
//           $('.pdf_item:gt(5)').addClass('hide');
//           $(this).text('더보기');
 
//           // 부드러운 스크롤
//           $('html, body').animate({
//               scrollTop: $('.pdf_grid').offset().top - 100
//           }, 500);
//       }
//   });
// });

