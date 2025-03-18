// 연혁

// function updatePositions() {
//     smh = $('#content .his_navbox').offset().top + 20;//네비게이션 박스가 고정되기 시작할 스크롤 위치를 계산

//     h1 = $('.now').offset().top - ($(window).height() * 1);
//     h2 = $('.2019').offset().top - ($(window).height() * 1);
//     h3 = $('.2009').offset().top - ($(window).height() * 1);
//     h4 = $('.1989').offset().top - ($(window).height() * 1);
//     h5 = $('.1979').offset().top - ($(window).height() * 1);
// }

// updatePositions();

// $(window).on('scroll',function(){
//     var scroll = $(window).scrollTop(); //현재 스크롤된 위치(페이지 상단으로부터의 거리)를 scroll 변수에 저장
//     var windowHeight = $(window).height();

//     //sticky menu
//     if(scroll>smh){
//         $('.his_navbox').addClass('navOn');
//         $('header').hide(); //스크롤 위치가 smh보다 크면 네비게이션 박스에 'navOn' 클래스를 추가하고 헤더를 숨김
//     }else{
//         $('.his_navbox').removeClass('navOn');
//         $('header').show(); //스크롤 위치가 smh보다 작으면 'navOn' 클래스를 제거하고 헤더를 보여준다
//     }


//     $('#content .his_navbox li').find('a').removeClass('spy');

//     var offset = windowHeight * 0.1; // 10% of window height

//     //현재 스크롤 위치에 따라 해당하는 네비게이션 메뉴 항목에 'spy' 클래스를 추가
//     if (scroll >= 0 && scroll < (h1 + offset)) { //0~현재
//         $('.his_navbox li:eq(0)').find('a').addClass('spy');
//     } else if (scroll >= (h1 + offset) && scroll < (h2 + offset)) { //현재~2020
//         $('.his_navbox li:eq(1)').find('a').addClass('spy');
//     } else if (scroll >= (h2 + offset) && scroll < (h3 + offset)) { //2020~2009
//         $('.his_navbox li:eq(2)').find('a').addClass('spy');
//     } else if (scroll >= (h3 + offset) && scroll < (h4 + offset)) { //2009~1989
//         $('.his_navbox li:eq(3)').find('a').addClass('spy');
//     } else if (scroll >= (h4 + offset) && scroll < (h5 + offset)) { //1989~1979
//         $('.his_navbox li:eq(4)').find('a').addClass('spy');
//     }
//     else if (scroll >= (h5 + offset)){ //1979~
//         $('.his_navbox li:eq(5)').find('a').addClass('spy');
//     }
// });


//  $('.his_navbox  ul li a').click(function(e){ //네비게이션 메뉴 항목이 클릭되었을 때 실행될 함수를 정의
//     e.preventDefault();
  
//      $('.title').css('fontSize', '');// 모든 title 클래스의 원래 폰트 사이즈로 되돌림
    
//         var value = 0;
//         var targetClass = '';
//         var offset = $(window).height() * 0.1; // 10% of window height, 여백
    
//         if($(this).hasClass('year1')){   //클릭된 메뉴 항목이 어떤 연도인지 확인하고, 해당 섹션의 위치와 클래스명을 변수에 저장
//             value = $('.now').offset().top-130; //각 위치에서 offset을 빼는 이유는 클릭 시 해당 클래스에 상단 여백을 주기 위함
//             targetClass = '.now';
//         }else if($(this).hasClass('year2')){
//             value = $('.2019').offset().top - offset; //클릭했을 때의 여백
//             targetClass = '.2019';
//         }else if($(this).hasClass('year3')){
//             value = $('.2009').offset().top - offset;
//             targetClass = '.2009';
//         }else if($(this).hasClass('year4')){
//             value = $('.1989').offset().top - offset;
//             targetClass = '.1989';
//         }else if($(this).hasClass('year5')){
//             value = $('.1979').offset().top - offset;
//             targetClass = '.1979';
//         }
        
//         // 클릭한 메뉴에 해당하는 섹션의 title 클래스 css변경
//         $(targetClass + ' .title').css('fontSize', '3.5rem').css('lineHeight', '3rem').css('fontWeight','800');
        
     
//    $("html,body").stop().animate({"scrollTop":value},1000);
//  });


// 연혁

function updatePositions() {
    smh = $('#content .his_navbox').offset().top + 20; //네비게이션 박스가 고정되기 시작할 스크롤 위치를 계산

    // 여기서 숫자를 조정하여 메뉴 활성화 타이밍 조절 (숫자가 클수록 더 늦게 활성화됨)
    var activationDelay = 0.5; // 활성화 지연 계수 - 이 값을 증가시키면 스크롤을 더 많이 내려야 메뉴가 활성화됨
    var activationDelay2 = 0.1;

    h1 = $('.now').offset().top - ($(window).height() * activationDelay);
    h2 = $('.2019').offset().top - ($(window).height() * activationDelay); //2019의 아래를 늘려야한다
    h3 = $('.2009').offset().top - ($(window).height() * activationDelay2);
    h4 = $('.1989').offset().top - ($(window).height() * activationDelay2);
    h5 = $('.1979').offset().top - ($(window).height() * activationDelay2);
}

updatePositions();

$(window).on('resize', function () {
    updatePositions(); // 창 크기가 변경될 때 위치 재계산
});

$(window).on('scroll', function () {
    var scroll = $(window).scrollTop(); //현재 스크롤된 위치(페이지 상단으로부터의 거리)를 scroll 변수에 저장
    var windowHeight = $(window).height();

    //sticky menu 
    if (scroll > smh) {
        $('.his_navbox').addClass('navOn');
        $('header').hide(); //스크롤 위치가 smh보다 크면 네비게이션 박스에 'navOn' 클래스를 추가하고 헤더를 숨김
    } else {
        $('.his_navbox').removeClass('navOn');
        $('header').show(); //스크롤 위치가 smh보다 작으면 'navOn' 클래스를 제거하고 헤더를 보여준다
    }

    $('#content .his_navbox li').find('a').removeClass('spy');

    // 여기서 숫자를 조정하여 스크롤 위치에 따른 메뉴 활성화 타이밍 조절
    var scrollOffset = windowHeight * 0.8; // 활성화 오프셋 - 이 값을 증가시키면 더 늦게 활성화됨
    var scrollOffset2 = windowHeight * 1.1;
    var scrollOffset3 = windowHeight * 1.5;
    var scrollOffset4 = windowHeight * 1.75;
    var scrollOffset5 = windowHeight * 0.7;


    //현재 스크롤 위치에 따라 해당하는 네비게이션 메뉴 항목에 'spy' 클래스를 추가
    if (scroll >= 0 && scroll < (h1 + scrollOffset)) { //0~현재
        $('.his_navbox li:eq(0)').find('a').addClass('spy');
    } else if (scroll >= (h1 + scrollOffset) && scroll < (h2 + scrollOffset4)) { //현재~2020 ok
        $('.his_navbox li:eq(1)').find('a').addClass('spy');
    } else if (scroll >= (h2 + scrollOffset4) && scroll < (h3 + scrollOffset2)) { //2019~2010
        $('.his_navbox li:eq(2)').find('a').addClass('spy');
    } else if (scroll >= (h3 + scrollOffset2) && scroll < (h4 + scrollOffset5)) { //2009~1990
        $('.his_navbox li:eq(3)').find('a').addClass('spy');
    } else if (scroll >= (h4 + scrollOffset5) && scroll < (h5 + scrollOffset3)) { //1989~1980
        $('.his_navbox li:eq(4)').find('a').addClass('spy');
    }
    else if (scroll >= (h5 + scrollOffset3)) { //1979~
        $('.his_navbox li:eq(5)').find('a').addClass('spy');
    }
});


$('.his_navbox ul li a').click(function (e) { //네비게이션 메뉴 항목이 클릭되었을 때 실행될 함수를 정의
    e.preventDefault();

    $('.title').css('fontSize', '').css('lineHeight', '').css('fontWeight', ''); // 모든 title 클래스의 스타일 초기화

    var value = 0;
    var targetClass = '';
    var clickOffset = $(window).height() * 0.1; // 10% of window height, 여백

    if ($(this).hasClass('year1')) {   //클릭된 메뉴 항목이 어떤 연도인지 확인하고, 해당 섹션의 위치와 클래스명을 변수에 저장
        value = $('.now').offset().top - clickOffset; //각 위치에서 offset을 빼는 이유는 클릭 시 해당 클래스에 상단 여백을 주기 위함
        targetClass = '.now';
    } else if ($(this).hasClass('year2')) {
        value = $('.2019').offset().top - clickOffset; //클릭했을 때의 여백
        targetClass = '.2019';
    } else if ($(this).hasClass('year3')) {
        value = $('.2009').offset().top - clickOffset;
        targetClass = '.2009';
    } else if ($(this).hasClass('year4')) {
        value = $('.1989').offset().top - clickOffset;
        targetClass = '.1989';
    } else if ($(this).hasClass('year5')) {
        value = $('.1979').offset().top - clickOffset;
        targetClass = '.1979';
    }

    // 클릭한 메뉴에 해당하는 섹션의 title 클래스 css변경
    $(targetClass + ' .title').css('fontSize', '3.5rem').css('lineHeight', '3rem').css('fontWeight', '800');

    $("html,body").stop().animate({ "scrollTop": value }, 1000);
});