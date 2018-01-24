<?php
try {
	$pdo = new PDO( 'mysql:host=hrdapps40;dbname=forbes;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare(
		"SELECT * FROM fd_staff
		WHERE
		id_num = :username
		AND
		password = :password"
	);
	$stmt->bindValue( ':username', $_REQUEST["username"], PDO::PARAM_STR );
	$stmt->bindValue( ':password', md5($_REQUEST["password"]), PDO::PARAM_STR );
	$stmt->execute(); 
	$cnt = $stmt->rowCount();
	if ( $cnt ) {
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		$name = $row["f_name"]. ' ' .$row["l_name"];
		$pic = $row["picture"];
		$j_pos = $row["j_pos"];
	}
} catch( PDOException $e ) {
	echo $e->getMessage();
}