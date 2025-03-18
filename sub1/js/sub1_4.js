//TAB메뉴

// URL에서 num 파라미터 가져오는 함수
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 처음에 first 섹션만 보이고 나머지는 숨김
var init;
$('.third, .fourth').hide();
$('.first').show();

// 탭 활성화 함수
function activateTab(tabNumber) {
    // 모든 탭 버튼의 스타일 초기화
    $('.tab-btn').css({
        'background-color': '',
        'color': ''
    });

    // 선택된 탭 버튼 활성화
    $(`.tab-btn:eq(${tabNumber - 1})`).css({
        'background-color': '#E40214',
        'color': '#fff'
    });

    // 모든 섹션 숨기기
    $('.first, .second, .third, .fourth').hide();
    $('.content_area').height('auto');

    // 해당 탭 섹션 보이기
    switch(tabNumber) {
        case 1:
            $('.first').show();
            break;
        case 2:
            $('.second').show();
            break;
        case 3:
            $('.third').show();
            break;
        case 4:
            $('.fourth').show();
            init = document.getElementsByClassName("content")[0];
            init.style.maxHeight = init.scrollHeight + "px";
            break;
    }
}

// 페이지 로드 시 실행
$(document).ready(function() {
    // URL에서 num 파라미터 확인
    const tabNum = getUrlParameter('num');
    
    if (tabNum) {
        // num 파라미터가 있으면 해당 탭 활성화
        activateTab(parseInt(tabNum));
    } else {
        // 파라미터가 없으면 첫 번째 탭 활성화
        activateTab(1);
    }

    // 탭 버튼 클릭 이벤트
    $('.tab-btn').click(function() {
        const index = $(this).index('.tab-btn') + 1;
        activateTab(index);
    });
});

// 인덱스 페이지의 더보기 버튼용 (global_map의 링크)
$('.global_map a').click(function(e) {
    // 기본 이벤트 방지 (필요한 경우)
    // e.preventDefault();
    
    // 현재 링크의 href 속성에서 num 파라미터 추출
    const href = $(this).attr('href');
    const num = href.split('num=')[1];
    
    // 로컬 스토리지에 탭 번호 저장 (페이지 전환 시 사용)
    if (num) {
        localStorage.setItem('activeTab', num);
    }
});



//국내 사업장 swiper
var swiper1 = new Swiper('.swiper1', {
    // pagination: {
    //     el: '.swiper_pagination',
    // },
    slidesPerView: 2.5,
    paginationClickable: true,
    spaceBetween: 40,
    freeMode: true,
});

var swiper2 = new Swiper('.swiper2', {
    // pagination: {
    //     el: '.swiper_pagination',
    // },
    slidesPerView: 2.5,
    paginationClickable: true,
    spaceBetween: 40,
    freeMode: true,
});



//해외지사 처리
function collapse(element) { //element=클릭한 자신

var content = element.nextElementSibling;
if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
    content.style.maxHeight = null;         // 접기
} else {
    content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
}
}

