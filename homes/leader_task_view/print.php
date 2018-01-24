<?php
session_start();
$cate = array('D','P','O');
$level = array('A','B','C');
$day = date("Y-m-d",strtotime(date("Y-m-d").' +'.$_SESSION["day"].' day'));
$print = '';
	try{
		$pdo = new PDO('mysql:host=hrdapps40;dbname=forbes;charset=utf8','root','admin');
		$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$stmt = $pdo->prepare(
			"SELECT leader_time.id_num as id_num,
			f_name,
			l_name,
			fits_in,
			off_in,
			off_out,
			fits_out,
			o_time
			from fd_staff,leader_time
			where
			fd_staff.id_num = leader_time.id_num
			and
			date_update = :date
			and
			fd_staff.id_num <> 'syscom'"
			);
		$stmt->bindValue(':date',$day,PDO::PARAM_STR);
		$stmt->execute();
		while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		//echo implode(',',$row).'<br>' ;
			$p_list = '<table class="table table-bordered table-condensed table-striped table-hover table-responsive">';
			$p_list .=	'<thead>';
			$p_list .=	'<tr>';
			$p_list .= '<th colspan="6"><h3>'.$row["f_name"]. ' ' .$row["l_name"].'</h3></th>';
			$p_list .= '</tr>';
			$p_list .= '</thead>';
			$p_list .= '<tbody>';
			$p_list .= '<tr>';
			$p_list .= '<td style="width:20%">Log In(Fits):'.$row["fits_in"].'</td>';
			$p_list .= '<td style="width:20%">Time In(Office):'.$row["off_in"].'</td>';
			$p_list .= '<td style="width:20%">Time Out(Office):'.$row["off_out"].'</td>';
			$p_list .= '<td style="width:20%">Time Out(Fits):'.$row["fits_out"].'</td>';
			$p_list .= '<td style="width:20%" colspan="2">Over Time:'.$row["o_time"].'</td>';
			$p_list .= '</tr>';
			$p_list .= '<tr>';
			$p_list .= '<th colspan="4">Tasks</th>';
			$p_list .= '<th style="width:10%">Category</th>';
			$p_list .= '<th style="width:10%">Level</th>';
			$p_list .= '</tr>';
			$print .= $p_list;
			
			
			/*
			'<p><b>'.$row["f_name"]. ' ' .$row["l_name"].' ' .$row["fits_in"].' ' .$row["off_in"].' ' .$row["off_out"].' ' .$row["fits_out"].' ' .$row["o_time"].'</b></p>';*/
				$stmt1 = $pdo->prepare(
					"SELECT task_name,task_cate,task_level 
					
					FROM leader_task
					
					WHERE
					
					id_num = :fd_name
					
					and
					
					date_update = :date"
				);
				$stmt1->bindValue(':fd_name', $row["id_num"], PDO::PARAM_STR);
				$stmt1->bindValue(':date', $day, PDO::PARAM_STR);
				$stmt1->execute();
				$tbody = '';
				while( $row1 = $stmt1->fetch(PDO::FETCH_ASSOC) ) {
		
					$tbody .= '<tr>';
					$tbody .= '<td colspan="4">'.$row1["task_name"].'</th>';
					$tbody .= '<td>'.$cate[$row1["task_cate"]-1].'</th>';
					$tbody .= '<td>'.$level[$row1["task_level"]-1].'</th>';
					$tbody .= '</tr>';
				}
					$tbody .= '</tbody>';
					$tbody .= '</table>';
					$print .= $tbody;
		};
	}catch(PDOException $e){
		echo $e->getMessage();
	}
	
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
	<body onload="window.print()">
		<div class="container-fluid">
			<?php echo $print; ?>
		</div>
		
		<script src="../bootstrap/js/jquery-1.11.3.js"></script>
		<script src="../bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>