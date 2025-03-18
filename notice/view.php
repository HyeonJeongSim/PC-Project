<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
	// $table, $num, $page, $liststyle, 세션변수

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysqli_query( $connect, $sql);

 $row = mysqli_fetch_array($result);      
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
 $item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0]; //a1.jpg
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];	// 2022_02_22_10_43_01_0.jpg
	$image_copied[1] = $row[file_copied_1]; 
	$image_copied[2] = $row[file_copied_2];

   	$item_date    = $row[regist_day];
	
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	// for ($i=0; $i<3; $i++)
	// {
	// 	if ($image_copied[$i]) //업로드한 파일이 존재하면 0 1 2
	// 	{
	// 		$imageinfo = GetImageSize("./data/".$image_copied[$i]);
    //         //GetImageSize(서버에 업로드된 파일 경로 파일명)
    //           // => 파일의 너비와 높이값, 종류
	// 		$image_width[$i] = $imageinfo[0];  //파일너비
	// 		$image_height[$i] = $imageinfo[1]; //파일높이
	// 		$image_type[$i]  = $imageinfo[2];  //파일종류

    //     if ($image_width[$i] > 1200)
	// 			$image_width[$i] = 1200;
	// 	}
	// 	else
	// 	{
	// 		$image_width[$i] = "";
	// 		$image_height[$i] = "";
	// 		$image_type[$i]  = "";
	// 	}
	// }

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysqli_query( $connect, $sql);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>인재채용 | 채용공고</title>
	<link rel="shortcut icon" type="image/x-icon"  href="../common/images/favicon.ico">
	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="./common/css/aos.css">

	<link rel="stylesheet" href="../sub5/common/css/sub5common.css">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/notice.css">
</head>

<body>
<div class="skipNav">
	<a href="#content">본문 바로가기</a>
	<a href="gnb">글로벌네비게이션 바로가기</a>
</div>
<div class="wrap">
	<? include '../common/sub_header.html' ?>
	<div class="visual">
				<img src="../sub5/common/images/sub5_title.jpg" alt="">
				<span>인재채용</span>
	</div>

	<div class="sub_nav">
			<ul>
					<li><a href="../sub5/sub5_1.html">PEOPLE</a></li>
					<li><a class= "current" href="./list.php">채용공고</a></li>
			</ul>
	</div>

	  <article id="content">
				<div class="title_area">
								<div class="line_map">
									<a href="../index.html"><i class="fa-solid fa-house"></i><span class="hidden">home</span></a>&nbsp;&nbsp;
									<i class="fa-solid fa-angle-right"></i>
									&nbsp;&nbsp;인재채용&nbsp;&nbsp;<i class="fa-solid fa-angle-right">
									</i>&nbsp;&nbsp;<a href="./list.php"><strong>채용공고</strong></a>
								</div>

								<span data-aos="zoom-in">NOTICE</span>
								<h2 data-aos="zoom-in">채용공고</h2>
								<p data-aos="zoom-in">새로운 도전을 함께할 인재를 찾습니다. <br>한국마이콤과 함께 성장할 기회를 만나보세요.</p>
				</div>


				<div class="photo_bbs_wrap">
					<ul class="bbs_view_ttl">
						<li>
							<strong><?= $item_subject ?></strong>
						</li>
						<li>
							<span><?= $item_nick ?></span>
							<span><?= $item_date ?></span>
							<span><i class="fa-regular fa-eye"><i>조회수</i></i> <?= $item_hit ?></span>
						</li>
					</ul>

					
					<div class="bbs_view_cont">
						<?
							for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
							{
								if ($image_copied[$i])	// 첨부된 파일이 있으면
								{
									$img_name = $image_copied[$i];
									$img_name = "./data/".$img_name; 
									// ./data/2019_03_22_10_07_15_0.jpg
									// $img_width = $image_width[$i];
									
									// echo "<div class='img'><img src='$img_name' width='$img_width'></div>";
        	echo "<div class='img'><img src='$img_name' alt='첨부이미지'></div>";
								}
							}
						?>
						<?= $item_content ?>
					</div>

					<div class="btn_wrap">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
						<? 

					// 수정
							if($userlevel==1 || $userid=="admin")
							{
						?>
						<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">수정</a>
						<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>&liststyle=<?=$liststyle?>')">삭제</a>
						<?
							}
						?>
						<? 
							if($userlevel==1 || $userid=="admin")
							{
						?>
						<a href="write_form.php?table=<?=$table?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<?
							}
						?>
					</div>
				</div>
			</div>
		</article>
		
		<? include "../common/sub_footer.html" ?>
</div>

<script src="../common/js/aos.js"></script>
<script> AOS.init({easing: 'ease-in-out-sine'});</script>

<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="../common/js/jquery.easing.1.3.js"></script>
<script src="../common/js/common.js"></script>

<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
</script>
</body>
</html>