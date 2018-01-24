<?php
	require_once '../../homes/home/control.php';
	require_once 'control.php';
	//echo $_SESSION["time"][4]
?>

<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Leaders Task</title>
		<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet">
	</head>
	<body>
		<input type="hidden" />
		<?php require_once 'nav.php';?>
		<div class="container-fluid" style="margin-top:80px;">
		<div id="time_content"></div>
		<hr>
		<div id="task_content"></div>
			<div class="modal fade">
				<div id="modal_content"></div>
			</div>
		</div>
		
		<script src="../bootstrap/js/jquery-1.11.3.js"></script>
		<script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="../bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
		<script src="index.js"></script>
		<script src="time.js"></script>
		<script src="back.js"></script>
		<script src="edit.js"></script>
	</body>
</html>