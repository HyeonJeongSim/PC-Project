// 연혁

function updatePositions() {
    smh = $('#content .his_navbox').offset().top + 20;//네비게이션 박스가 고정되기 시작할 스크롤 위치를 계산

    h1 = $('.now').offset().top - ($(window).height() * 0.25);
    h2 = $('.2019').offset().top - ($(window).height() * 0.1);
    h3 = $('.2009').offset().top - ($(window).height() * 0.1);
    h4 = $('.1989').offset().top - ($(window).height() * 0.1);
    h5 = $('.1979').offset().top - ($(window).height() * 0.1);
}

updatePositions();

$(window).on('scroll',function(){
    var scroll = $(window).scrollTop(); //현재 스크롤된 위치(페이지 상단으로부터의 거리)를 scroll 변수에 저장
    var windowHeight = $(window).height();

    //sticky menu 
    if(scroll>smh){ 
        $('.his_navbox').addClass('navOn');
        $('header').hide(); //스크롤 위치가 smh보다 크면 네비게이션 박스에 'navOn' 클래스를 추가하고 헤더를 숨김
    }else{
        $('.his_navbox').removeClass('navOn');
        $('header').show(); //스크롤 위치가 smh보다 작으면 'navOn' 클래스를 제거하고 헤더를 보여준다
    }


    $('#content .his_navbox li').find('a').removeClass('spy');

    var offset = windowHeight * 0.2; // 20% of window height

    //현재 스크롤 위치에 따라 해당하는 네비게이션 메뉴 항목에 'spy' 클래스를 추가
    if (scroll >= 0 && scroll < (h1 + offset)) { 
        $('.his_navbox li:eq(0)').find('a').addClass('spy');
    } else if (scroll >= (h1 + offset) && scroll < (h2 + offset)) { 
        $('.his_navbox li:eq(1)').find('a').addClass('spy');
    } else if (scroll >= (h2 + offset) && scroll < (h3 + offset)) { 
        $('.his_navbox li:eq(2)').find('a').addClass('spy');
    } else if (scroll >= (h3 + offset) && scroll < (h4 + offset)) {  
        $('.his_navbox li:eq(3)').find('a').addClass('spy');
    } else if (scroll >= (h4 + offset) && scroll < (h5 + offset)) {
        $('.his_navbox li:eq(4)').find('a').addClass('spy');
    } else if (scroll >= (h5 + offset)){
        $('.his_navbox li:eq(5)').find('a').addClass('spy');
    }
});


 $('.his_navbox  ul li a').click(function(e){ //네비게이션 메뉴 항목이 클릭되었을 때 실행될 함수를 정의
    e.preventDefault(); 
  
     $('.title').css('fontSize', '');// 모든 title 클래스의 원래 폰트 사이즈로 되돌림
    
        var value = 0;
        var targetClass = '';
        var offset = $(window).height() * 0.2; // 10% of window height
    
        if($(this).hasClass('year1')){   //클릭된 메뉴 항목이 어떤 연도인지 확인하고, 해당 섹션의 위치와 클래스명을 변수에 저장
            value = $('.now').offset().top-130; //각 위치에서 offset을 빼는 이유는 클릭 시 상단 여백을 주기 위함
            targetClass = '.now';
        }else if($(this).hasClass('year2')){
            value = $('.2019').offset().top - offset;
            targetClass = '.2019';
        }else if($(this).hasClass('year3')){
            value = $('.2009').offset().top - offset;
            targetClass = '.2009';
        }else if($(this).hasClass('year4')){
            value = $('.1989').offset().top - offset;
            targetClass = '.1989';
        }else if($(this).hasClass('year5')){
            value = $('.1979').offset().top - offset; 
            targetClass = '.1979';
        }
        
        // 클릭한 메뉴에 해당하는 섹션의 title 클래스 css변경
        $(targetClass + ' .title').css('fontSize', '3.5rem').css('lineHeight', '3rem').css('fontWeight','800');
        
     
   $("html,body").stop().animate({"scrollTop":value},1000);
 });
