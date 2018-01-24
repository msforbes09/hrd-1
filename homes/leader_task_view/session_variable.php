<?php
//print_r($_REQUEST);
session_start();
try{
	$pdo = new PDO('mysql:host=hrdapps40;dbname=forbes;charset=utf8;','root','admin');
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	$stmt = $pdo->prepare(
		"select id_num, f_name, l_name,picture

		from fd_staff
		
		WHERE id_num = :id_num"
	);
	$stmt->bindValue(':id_num', $_REQUEST["id_num"], PDO::PARAM_STR);
	$stmt->execute();
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	//echo implode(',',$row);
	$_SESSION["leader_id"] = $row["id_num"];
	$_SESSION["leader_name"] = $row["f_name"].' '.$row["l_name"];
	$_SESSION["leader_pic"] = $row["picture"];
	echo $_SESSION["leader_id"];
}catch(PDOException $e){
	echo $e->getMessage();
}
/*
*/
?>