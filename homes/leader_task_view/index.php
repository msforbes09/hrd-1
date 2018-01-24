<?php
	require_once '../../homes/home/control.php';
	require_once 'control.php';
?>

<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Leaders Task View</title>
	</head>
	<frameset rows="18%,*" frameborder="NO" border="0" framespacing="1">
	  <frame src="header.php" name="top_frame" scrolling="NO" noresize >
	  <frameset rows="*" cols="18%,*" framespacing="2" frameborder="yes" border="1">
		<frame src="panel.php" name="left_frame" scrolling="NO" noresize>
		<frame src="blank.php" name="main_frame" scrolling="yes" noresize>
	  </frameset>
	<body></body>
</frameset>
</html>