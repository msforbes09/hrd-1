<?php
	try{
	$pdo = new PDO('mysql:host=hrdapps40;dbname=forbes;charset=utf8;','root','admin');
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	
	$stmt = $pdo->prepare(
		"UPDATE leader_task 
			Set
			task_name = :task_name
			where 
			id = :id
		"
	);
	$stmt->bindValue(':id', $_REQUEST["id"], PDO::PARAM_STR);
	$stmt->bindValue(':task_name', $_REQUEST["task_name"], PDO::PARAM_STR);
	
	
	
	$stmt->execute();
	
}catch( PDOException $e ){
	echo $e->getMessage();
	
}
$pdo = null; 
/*
*/