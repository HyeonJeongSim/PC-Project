//글로벌네비게이션(GNB)
$(document).ready(function() {

    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다 900px
    var on_off=false;  //false(안오버)  true(오버)
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background', '#fff');
            $('.dropdownmenu li a').css('color','#050D1B'); 
            $('.top_menu li a').css('color','#050D1B');
            $('.dropdownmenu li ul li a').css('color','#333');
             //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
            on_off=true;
        });
    
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-80){
                $(this).css('background', '#fff').css('border-bottom', 'none'); 
                $('.dropdownmenu li a').css('color','#050D1B');
                $('.top_menu li a').css('color','#050D1B');
            }else{
                $(this).css('background', '#fff').css('color','#050D1B'); 
                $('.dropdownmenu li a').css('color', '#050D1B');
                $('.top_menu li a').css('color', '#050D1B');
            }
           on_off=false;
       });

        //2depths hover 효과
       $('#headerArea #gnb ul ul li a').hover(function(){
           $(this).css('background', '#ffe9e9');
       },function(){
           $(this).css('background', '#fff');
       });


       //로그인 hover 효과
       $('.top_menu li a').hover(function(){
           $(this).css('color', '#E40214');
     },function(){
        $(this).css('color', '#333');
     });

    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  
            //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-80){ //스크롤이 비주얼의 높이-header높이 까지 내리면
                $('#headerArea').css('background','#fff').css('box-shadow','0 0 8px rgba(0, 0, 0, .3)');
                $('.dropdownmenu li a').css('color','#050D1B');
                $('.top_menu li a').css('color','#050D1B');
                
            }else{ //스크롤 내리기 전 디폴트(마우스올리지않음)
               if(on_off==false){
                $('#headerArea').css('background','#fff').css('box-shadow','none');
                $('.top_menu li a').css('color','#333');
               }
            }; 
         });
 
   
     //2depth 열기/닫기
     $('ul.dropdownmenu').hover(
        function() { 
           $('ul.dropdownmenu li ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열기
           $('#headerArea').animate({height:300},'fast').clearQueue();
           
        },function() {
           $('ul.dropdownmenu li ul').hide(); //모든 서브를 다 닫기
           $('#headerArea').animate({height:80},'fast').clearQueue();
      });

      //1depth 효과/
      $('ul.dropdownmenu li').hover(
        function() { 
            $('.depth1',this).css('color','#E40214');

        },function() {
           $('.depth1',this).css('color','#050D1B');
         
      });
      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:300},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:80},'normal').clearQueue();
     });
 });
 

    

//패밀리사이트

$(document).ready(function() {
   	
$('#footerArea .familysite .arrow').toggle(function(){ 
    $('#footerArea .familysite .alist').css('transform', 'translateY(-100%)') // 초기 위치를 아래로 설정
    .stop(true, true) .slideDown(2000,'easeOutBounce'); // 올리는 효과
    $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');
},function(){
    $('#footerArea .familysite .alist').stop(true, true).slideUp(500, 'easeOutQuad') // 내리는 효과
    $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');
});


//tab키 처리
    $('#footerArea .familysite .arrow').on('focus', function () {        
            $('#footerarea .familysite .alist').fadeIn('slow');	
    });
    $('#footerArea .familysite .aList li:last a').on('blur', function () {        
            $('.familysite .alist').fadeOut('fast');
    });

});

//TOP으로 이동 처리
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
   var scroll = $(window).scrollTop(); //스크롤의 거리
  
  
   // $('.text').text(scroll);
   if(scroll>=500){ //500이상의 거리가 발생되면
       $('.top_move').fadeIn('slow');  //top보여라
   }else{
       $('.top_move').fadeOut('fast');//top안보여라
   }
});

$('.top_move').click(function(e){
  e.preventDefault();
   //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({"scrollTop":0},1000); 
  //TOP을 해당 좌표 (0)만큼 이동하세요
});



