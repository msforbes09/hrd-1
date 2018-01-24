<?php
session_start(); 
$_SESSION["day"] = 0
?>

<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Leaders Task</title>
		<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body>
		<div class="container-fluid" style="margin-top:10%;">
			<div id="set_date"></div>
			
			<div class="form-inline">
			<a href="blank.php" target="main_frame"><button id="y_day" class="btn btn-md btn-default"><span class= "glyphicon glyphicon-backward"></span></button></a>
			<a href="blank.php" target="main_frame"><button id="t_day"class="btn btn-md btn-default pull-right"><span class= "glyphicon glyphicon-forward"></span></button></a>
			<hr>
			</div>
			
			<div id="leader_list"></div>
		</div>
		
		<script src="../bootstrap/js/jquery-1.11.3.js"></script>
		<script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="panel.js"></script>
		<script src="test.js"></script>
	</body>
</html>