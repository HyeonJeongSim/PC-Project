$(document).ready(function() {
  var imageCount = 3;   //이미지개수
  var cnt = 1;   //이미지 순서 1 2 3
  
  // 초기 상태 설정

  $('.gallery .link1').fadeIn('slow');

  // 숫자 버튼 클릭 시
  $('.mbutton').click(function(event){  
    var $target = $(event.target);
 
    for(var i=1; i<=imageCount; i++){
      $('.gallery .link'+i).hide();
    } 
 
    if($target.is('.btn1')){
      cnt = 1;
    }else if($target.is('.btn2')){
      cnt = 2; 
    }else if($target.is('.btn3')){ 
      cnt = 3; 
    }
    
    $('.gallery .link'+cnt).fadeIn('slow');
  });

  // 좌우 버튼 클릭 시
  $('.gallery_wrap .btn').click(function(){
    if($(this).is('.btnRight')){
      if(cnt == imageCount) cnt = 0;
      cnt++;
    }else if($(this).is('.btnLeft')){
      if(cnt == 1) cnt = imageCount + 1;
      cnt--;
    }

    for(var i=1; i<=imageCount; i++){
      $('.gallery .link'+i).hide();
    }
    $('.gallery .link'+cnt).fadeIn('slow');
  });
});