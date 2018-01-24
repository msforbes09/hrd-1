<?php
session_start();
$day = date("Y-m-d",strtotime(date("Y-m-d").' +'.$_SESSION["day"].' day'));
	try{
		$pdo = new PDO('mysql:host=hrdapps40;dbname=forbes;charset=utf8','root','admin');
		$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$stmt = $pdo->prepare(
			"SELECT leader_time.id_num as id_num,
			f_name,
			l_name
			from fd_staff,leader_time
			where
			fd_staff.id_num = leader_time.id_num
			and
			date_update = :date
			and
			fd_staff.id_num <> 'syscom'
			and
			fd_staff.id_num <> '1'"
			);
		$stmt->bindValue(':date',$day,PDO::PARAM_STR);
		$stmt->execute();
		$p_list = '';
		while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		//echo implode(',',$row).'<br>' ;
				$p_list .= '<a href="main.php" target="main_frame"><button type="button" class="btn btn-link btn-sm change_id" id="lead-'.$row["id_num"].'"><h5>' .$row["f_name"]. ' ' .$row["l_name"]. '</h5></button></a><br>';
		};
	echo $p_list;
	}catch(PDOException $e){
		echo $e->getMessage();
	}
?>