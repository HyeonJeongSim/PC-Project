var memo = [
    {imgsrc:'changwon.png' ,title:'창원공장', sub1:'경상남도 창원시에 위치한 한국마이콤 공장입니다.'},
    {imgsrc:'yeosu.png' ,title:'여수지사', sub1:'전라남도 여수시에 위치한 한국마이콤 지사입니다.'},
    {imgsrc:'busan.png' ,title:'부산지사', sub1:'부산광역시에 위치한 한국마이콤 지사입니다.'},
    {imgsrc:'iksan.png' ,title:'익산지사', sub1:'전라북도 익산시에 위치한 한국마이콤 지사입니다.'}
  ];
  
  $('.bottom li a').click(function(e){
  e.preventDefault();
  var txt ='';  //dl태그 생성
  var ind = $(this).index('.bottom li a');  // 0 1 2 3
  

  $('#content .modal_box').fadeIn('fast');
  $('#content .popup').fadeIn('slow');
  
  //$('.bottom .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
  $('#content .popup img').attr('src','./images/content5/'+memo[ind].imgsrc);
  
  txt+= '<dl>';
  txt+= '<dt>'+memo[ind].title+'</dt>';
  txt+= '<dd>'+memo[ind].sub1+'</dd>';
  txt+= '</dl>';
  
  $('#content .popup .txt').html(txt);
  });
  
  $('.close_btn, #content .modal_box').click(function(e){
  e.preventDefault();


  $('#content .modal_box').hide();
  $('#content .popup').hide();
  });
  

//스크롤락
$('#content .modal_box, #content .popup').on('scroll touchmove mousewheel', function(e) {

  e.preventDefault();

  e.stopPropagation();

  return false;

});