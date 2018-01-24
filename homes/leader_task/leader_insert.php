<?php
	session_start();
	//print_r($_REQUEST);
	
	
	try{
	// make class instance object
	$pdo = new PDO('mysql:host=hrdapps40;dbname=forbes;charset=utf8;','root','admin');
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	
	$stmt = $pdo->prepare(
		"INSERT INTO leader_task
			(id_num,task_name,task_cate,task_level,date_update)
			VALUES
			(:id_num,:task_name,:task_cate,:task_level,:date_update)"
	);
	$stmt->bindValue(':id_num', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->bindValue(':task_name', $_REQUEST["task_name"], PDO::PARAM_STR);
	$stmt->bindValue(':task_cate', $_REQUEST["task_cate"], PDO::PARAM_STR);
	$stmt->bindValue(':task_level', $_REQUEST["task_level"], PDO::PARAM_STR);
	$stmt->bindValue(':date_update', date("Y-m-d"), PDO::PARAM_STR);
	
	
	$stmt->execute();
	
}catch( PDOException $e ){
	echo $e->getMessage();
	
}
//destroy object
$pdo = null; 
/*
*/