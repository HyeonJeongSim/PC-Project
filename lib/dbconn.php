<?
    $connect=mysqli_connect( "localhost", "hj3296000", "qweasd12!", "hj3296000") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "hj3296000");
?>