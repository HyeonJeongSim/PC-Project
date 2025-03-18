
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.jpg' ,title:'제품명1', price:'10,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big2.jpg' ,title:'제품명2', price:'20,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big3.jpg' ,title:'제품명3', price:'25,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big4.jpg' ,title:'제품명4', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'}
      ];
    
  $('.bottom .pop_menu a').click(function(e){
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.bottom .pop_menu a');  // 0 1 2 3

      $('.bottom .modal_box').fadeIn('fast');
      $('.bottom .popup').fadeIn('slow');

      //$('.bottom .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
      $('.bottom .popup img').attr('src','./images/'+memo[ind].imgsrc);

      txt+= '<dl>';
      txt+= '<dt>제품명 : '+memo[ind].title+'</dt>';
      txt+= '<dd>제품가격: '+memo[ind].price+'</dd>';
      txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
      txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
      txt+= '</dl>';
      
      $('.bottom .popup .txt').html(txt);
  });

  $('.close_btn,.bottom .modal_box').click(function(e){
      e.preventDefault();
      $('.bottom .modal_box').hide();
      $('.bottom .popup').hide();
  });

