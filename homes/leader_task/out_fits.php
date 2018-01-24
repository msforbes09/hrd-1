<?php
	//print_r($_REQUEST);
	
	
	try{
	// make class instance object
	$pdo = new PDO('mysql:host=hrdapps40;dbname=forbes;charset=utf8;','root','admin');
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	
	$stmt = $pdo->prepare(
		"UPDATE leader_time
			SET
			fits_out = :fits_out
			where
			id = :id"
	);
	$stmt->bindValue(':fits_out', $_REQUEST["fits_out"], PDO::PARAM_STR);
	$stmt->bindValue(':id', $_REQUEST["id"], PDO::PARAM_STR);
	$stmt->execute();
	
}catch( PDOException $e ){
	echo $e->getMessage();
	
}
//destroy object
$pdo = null; 
/*
*/