//연혁

function updatePositions() {
  smh = $("#content .his_navbox").offset().top + 20;

  // 숫자만 여기서 한 번에 관리
  var offsets = [250, 1100, 600, 700, 700];

  // 아래는 건드릴 필요 없음 (자동 처리)
  h1 = $(".now").offset().top + offsets[0];
  h2 = $(".2019").offset().top + offsets[1];
  h3 = $(".2009").offset().top + offsets[2];
  h4 = $(".1989").offset().top + offsets[3];
  h5 = $(".1979").offset().top + offsets[4];

  console.log("업데이트된 감지 위치들:");
  console.log("h1:", h1, "h2:", h2, "h3:", h3, "h4:", h4, "h5:", h5);
}

updatePositions();

$(window).on("resize", function () {
  updatePositions();
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  // sticky menu
  if (scroll > smh) {
    $(".his_navbox").addClass("navOn");
    $("header").hide();
  } else {
    $(".his_navbox").removeClass("navOn");
    $("header").show();
  }

  // 모든 spy 클래스 제거
  $("#content .his_navbox li").find("a").removeClass("spy");

  // 스크롤 위치에 따른 메뉴 활성화 (논리적 순서로 정렬)
  if (scroll < h1) {
    // 맨 위에 있을 때는 첫 번째 메뉴 활성화
    $(".his_navbox li:eq(0)").find("a").addClass("spy");
    console.log("맨 위 - 첫 번째 섹션 활성화, 스크롤:", scroll);
  } else if (scroll >= h1 && scroll < h2) {
    $(".his_navbox li:eq(1)").find("a").addClass("spy");
    console.log("현재 섹션 활성화, 스크롤:", scroll);
  } else if (scroll >= h2 && scroll < h3) {
    $(".his_navbox li:eq(2)").find("a").addClass("spy");
    console.log("2019 섹션 활성화, 스크롤:", scroll);
  } else if (scroll >= h3 && scroll < h4) {
    $(".his_navbox li:eq(3)").find("a").addClass("spy");
    console.log("2009 섹션 활성화, 스크롤:", scroll);
  } else if (scroll >= h4 && scroll < h5) {
    $(".his_navbox li:eq(4)").find("a").addClass("spy");
    console.log("1989 섹션 활성화, 스크롤:", scroll);
  } else if (scroll >= h5) {
    $(".his_navbox li:eq(5)").find("a").addClass("spy");
    console.log("1979 섹션 활성화, 스크롤:", scroll);
  }
});

$(".his_navbox ul li a").click(function (e) {
  e.preventDefault();

  $(".title").css("fontSize", "").css("lineHeight", "").css("fontWeight", "");

  var value = 0;
  var targetClass = "";
  var clickOffset = 100; // 스크롤 감지와 동일한 오프셋

  //메뉴 클릭 시 해당 연도로 이동
  if ($(this).hasClass("year1")) {
    value = $(".now").offset().top - clickOffset;
    targetClass = ".now";
  } else if ($(this).hasClass("year2")) {
    value = $(".2019").offset().top - clickOffset;
    targetClass = ".2019";
  } else if ($(this).hasClass("year3")) {
    value = $(".2009").offset().top - clickOffset;
    targetClass = ".2009";
  } else if ($(this).hasClass("year4")) {
    value = $(".1989").offset().top - clickOffset;
    targetClass = ".1989";
  } else if ($(this).hasClass("year5")) {
    value = $(".1979").offset().top - clickOffset;
    targetClass = ".1979";
  }

  console.log("클릭 - 이동할 위치:", value);

  // 클릭한 메뉴에 해당하는 섹션의 title 클래스 css변경
  $(targetClass + " .title")
    .css("fontSize", "3.5rem")
    .css("lineHeight", "3rem")
    .css("fontWeight", "800");

  $("html,body")
    .stop()
    .animate({ scrollTop: value }, 1000, function () {
      console.log("애니메이션 완료 - 최종 스크롤 위치:", $(window).scrollTop());

      // 애니메이션 완료 후 강제로 spy 클래스 업데이트
      setTimeout(function () {
        $(window).trigger("scroll");
      }, 50);
    });
});
