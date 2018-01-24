<?php
session_start();
//print_r($_REQUEST);

try {
	$pdo = new PDO( 'mysql:host=hrdapps40;dbname=forbes;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare(
		"SELECT id,fits_in,off_in,off_out,fits_out,o_time
		
		FROM leader_time
		
		WHERE
		
		id_num = :fd_name
		
		and
		
		date_update = :date"
	);
	$stmt->bindValue(':fd_name', $_SESSION["leader_id"], PDO::PARAM_STR);
	$stmt->bindValue(':date', $_SESSION["task_date"], PDO::PARAM_STR);
	$stmt->execute();
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	$time = array($row["fits_in"],$row["off_in"],$row["off_out"],$row["fits_out"],$row["o_time"]);
	$data_id = $row["id"];
 
} catch( PDOException $e ) {
	echo $e->getMessage();
}

$pdo = null;
/*
*/
?>

<center>
	<table class="table" style="width:95%;">
		<tbody>
			<tr>
				<td rowspan="6" colspan="2" style="width:20%;">
				<center><img src="../pics/<?php echo $_SESSION["leader_pic"]; ?>" style="height:180px;width:180px;"></center>
				</td>
				<td colspan="4" style="width:40%;height:40px;"><b><?php
					echo $_SESSION["leader_name"];
				?></b></td>
				<td style="width:20%;"></td>
				<td style="width:20%;"></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Log In (Fits)</td>
				<td><?php echo $time[0]; ?></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time In (Office)</td>
				<td><?php echo $time[1]; ?></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time Out (Office)</td>
				<td><?php echo $time[2]; ?></td>
			</tr style="height:40px;">
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time Out (FITS)</td>
				<td><?php echo $time[3]; ?></div>
				</td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Over Time</td>
				<td><?php echo $time[4]; ?></td>
			</tr>
		</tbody>
	</table>
</center>
