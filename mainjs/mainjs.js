//년도 처리

var one = false;  //false(한번도 동작안했을때)  true(한번 동작했을때)
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop(); 

    if(scroll > 800 && one==false){
        count();
        one=true;
    }
    else if(scroll <= 800 && one==true){
        one=false;
    }
});


function count(){
    var memberCountConTxt=1973; //출력하고 싶은 최종값

    $({ val : 2025 }).animate({ val : memberCountConTxt }, { //초기값
    duration: 500,
    step: function() {
    var number = Math.floor(this.val);
    $(".count1").text(number);
    },
    complete: function() { //끝값을 한번 더 처리한다
    var number = Math.floor(this.val);
    $(".count1").text(number);
    }
    });
}



// 메인비주얼 영역
var timeonoff;   //타이머 처리  홍길동 정보
var imageCount=$('.gallery ul li').size();   //이미지 총개수
var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때

$('.btn1').css('background','#ffffff5b'); //첫번째 불 키기
$('.btn1').css('width','200px'); // 버튼의 너비 증가
$(".btn1").addClass('on');

$('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다
$('.gallery .link1 dl').css({top:420,opacity:1}); //텍스트를 delay해서 띄우도록
// $('.gallery li dd').css({top:450,opacity:1});

function gallery_change(){
  $(".gallery li").fadeOut("300"); 
  $('.gallery .link'+cnt).fadeIn("400");  //자기 자신만 이미지가 보인다
    
  $(".mbutton").css('background','#ffffff5b'); //버튼 모두불꺼
  $(".mbutton").css('width','50px'); // 작동 안하는 바의 너비
  $(".mbutton").removeClass("on");
  $(".btn" + cnt).addClass("on");
  $('.btn'+cnt).css('width','200px');
  
  $('.gallery li dl').css('top',400).css('opacity',0);
//   $('.gallery li p').css('top',500).css('opacity',0);
  $('.gallery .link'+cnt).find('dl').delay(500).animate({top:420,opacity: 1},'slow');
//   $('.gallery .link'+cnt).find('p').delay(800).animate({top:450,opacity:1},'slow');
}


function moveg(){
  if(cnt==imageCount+1)cnt=1;
  if(cnt==imageCount)cnt=0;  //카운트 초기화
  cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화
  gallery_change();             
   if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
 }
 
timeonoff= setInterval( moveg , 3000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리




// 하단 버튼 클릭해서 이미지 변경

$(".mbutton").click(function (event) {
 
  var $target = $(event.target); 
  clearInterval(timeonoff); 

  cnt = $(this).index(".mbutton") + 1; //0~4 ->1~5
  // console.log(cnt);

  gallery_change();


  if(cnt==imageCount)cnt=0;  //카운트 초기화
 
  timeonoff= setInterval( moveg , 3000); //타이머의 부활
 
  if(onoff==false){ //중지상태 인지?
        onoff=true; //동작
        $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
  }
  
});


 //stop/play 버튼 클릭시 타이머 동작/중지
$('.ps').click(function(){ 
 if(onoff==true){ //타이머 동작 중인가?
       clearInterval(timeonoff);   //stop버튼 클릭시 멈춤
         $(this).html('<span class="hidden">play</span><i class="fa-solid fa-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
    
         onoff=false;    
   }else{  // false 타이머가 중지 상태냐??
       timeonoff= setInterval(moveg, 3000); //play버튼 클릭시  부활
       $(this).html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
       onoff=true; 
   }

});	


//왼쪽/오른쪽 버튼 처리
$('.visual .btn').click(function(){

  clearInterval(timeonoff); //살인마

//   if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
//       if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
//       //if(cnt==imageCount+1)cnt=1;  
//       cnt++; //카운트 1씩증가
//   }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
//       if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
//       if(cnt==0)cnt=imageCount;  //만약에 i가 5라면, -1(첫번째 사진으로 가는 것)이 아니라 0이 5가 되서 5-1=4가 되야한다.
//       cnt--; //카운트 감소
//   }

$('.gallery li').hide(); //모든 이미지를 보이지 않게.
$('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                    
$('.mbutton').css('background','#ffffff5b'); //버튼 모두불꺼
$('.mbutton').css('width','50');
$('.btn'+cnt).css('background','#E40214');//자신 버튼만 불켜 
$('.btn'+cnt).css('width','200');

$('.gallery li dl').css('top',350).css('opacity',0);
$('.gallery li p').css('top',500).css('opacity',0);
$('.gallery .link'+cnt).find('dl').stop(true, true).delay(500).animate({top:300,
  opacity: 1},'slow');
$('.gallery .link'+cnt).find('p').stop(true, true).delay(800).animate({top:450,opacity:1},'slow');


timeonoff= setInterval( moveg , 3000); //부활

if(onoff==false){
  onoff=true;
  $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
}
});



//글로벌네트워크 처리

$('#content .global .global_map li').click(function(e) {
    // dl 내부 요소(링크)를 클릭했을 때는 아무 동작도 하지 않도록 처리
    if ($(e.target).closest('dl').length > 0) {
        return;
    }
    const $currentLi = $(this);
    const $currentDl = $currentLi.find('dl');

    // 이미 dl이 보이는 상태라면 dl 숨기고 형제 li 다시 보이기
    if ($currentDl.is(':visible')) {
        $currentDl.fadeOut('fast');
        $currentLi.siblings().fadeIn('fast');
    } 
    // dl이 숨겨진 상태라면 dl 보이고 형제 li 숨기기
    else {
        $currentLi.siblings().hide();
        $currentDl.fadeIn('fast');
    }
});


    

//Newsletter 처리 코드

  var position=0;  //최초위치
  //var movesize=435; //이미지 하나의 너비
  var movesize=$('.newsletter_move ul li').width()+50;  //435
  //console.log(movesize);
  var timeonoff2;
 
  $('.newsletter_move ul').after($('.newsletter_move ul').clone());

  function moveG() {
      position-=movesize;  // 435씩 감소
      $('.newsletter_move').animate({left:position}, 'fast',
          function(){							
          if(position<=-3480){ //요소의 총 너비
              $('.newsletter_move').css('left',-1305); 
              //안보이는 요소의 총 너비
              position=-1305; //안보이는 요소의 총 너비
          }
      }).clearQueue();
  }

  timeonoff2= setInterval(moveG, 3000); //자동기능

  
//슬라이드 겔러리를 한번 복제
var lastClickTime = 0;      

$('.m7').click(function(e){
   e.preventDefault();

   var currentTime = new Date().getTime();
  //  console.log(currentTime);

   var timeDiff = currentTime - lastClickTime;

   if (timeDiff < 300) {
       e.preventDefault();
       return false;
   }

   lastClickTime = currentTime;

  clearInterval(timeonoff2);
   
    position-=movesize;  // 435씩 감소
    $('.newsletter_move').animate({left:position}, 'fast',function(){
        if(position<=-3480){ //요소의 총 너비
            position=-1305; // 화면에 안보이는 요소의 총 너비
            $('.newsletter_move').css('left',-1305); //화면에 안보이는 요소의 총 너비
        }
    }).clearQueue();  

 });



//고객지원 처리 코드
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if(scroll>$('.customer_box').offset().top){
        var bbb =scroll - $('.customer_box').offset().top;
        //0~1000, (부모 box 초록 - sticky 박스 노랑)

        if(bbb<800){  //마지노선이 100이 되게하기 위해 400씀
        $('.customer_right ul').css('top',200-bbb);
        //500은 처음의 움직이는 컨텐츠의 top 값
        }
    }
});





