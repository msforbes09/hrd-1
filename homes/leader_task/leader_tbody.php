<?php
session_start();
//print_r($_REQUEST);

try {
	//Make class intance object...
	$pdo = new PDO( 'mysql:host=hrdapps40;dbname=forbes;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	//ASC/DESC
	$stmt = $pdo->prepare(
		"SELECT id,task_name,task_cate,task_level 
		
		FROM leader_task
		
		WHERE
		
		id_num = :fd_name
		
		and
		
		date_update = :date"
	);
	$stmt->bindValue(':fd_name', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->bindValue(':date', date("Y-m-d"), PDO::PARAM_STR);
	$stmt->execute();
	//echo '<h3 class="pull-right">'. $stmt->rowCount() .' record/s found.</h3>';
	$tbody = '';
	$cate = array('D','P','O');
	$level = array('A','B','C');
	$cate_title = array('Task that is being done on a daily basis.','Task that is being done periodically.','Task that is being done ocassionally.');
	$level_title = array('Task that only SH/DH can do.','Task that can be done by a representative.','Task that can be delegated to TL/TIC in the future.');
	
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
		
		$tbody .= '<tr>';
		$tbody .= '<td class="button edit" id="task-'.$row["id"].'">'.$row["task_name"].'</td>';
		$tbody .= '<td title="'.$cate_title[($row["task_cate"]-1)].'">'.$cate[($row["task_cate"]-1)].'</td>';
		$tbody .= '<td title="'.$level_title[($row["task_level"]-1)].'">'.$level[($row["task_level"]-1)].'</td>';
		}
 
} catch( PDOException $e ) {
	echo $e->getMessage();
}

$pdo = null;
/*
*/
?>
<center>
<table class="table table-condensed table-hover table-striped" style="width:85%;">
	<thead>
		<tr>
			<th style="width:70%">Tasks</th>
			<th style="width:15%">Tasks Category</th>
			<th style="width:15%">Tasks Level</th>
		</tr>
	</thead>
	<tbody>
		<?php echo $tbody; ?>
	</tbody>
</table>
</center>