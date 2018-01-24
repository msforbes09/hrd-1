<?php
session_start();
//print_r($_REQUEST);
	$time_none = "00:00 __";
	//echo date("h:i:s");

try {
	//Make class intance object...
	$pdo = new PDO( 'mysql:host=hrdapps40;dbname=forbes;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	//ASC/DESC
	$stmt = $pdo->prepare(
		"SELECT id,fits_in,off_in,off_out,fits_out,o_time,date_update
		
		FROM leader_time
		
		WHERE
		
		id_num = :fd_name
		
		and
		
		date_update = :date"
	);
	$stmt->bindValue(':fd_name', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->bindValue(':date', date("Y-m-d"), PDO::PARAM_STR);
	$stmt->execute();
	$cnt = $stmt->rowCount();
	
	if ( !$cnt )
	{
		$stmt = $pdo->prepare(
		"INSERT INTO leader_time
			(id_num,fits_in,off_in,off_out,fits_out,o_time,date_update)
			VALUES
			(:fd_name,:fits_in,:off_in,:off_out,:fits_out,:o_time,:date)"
		);
	$stmt->bindValue(':fd_name', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->bindValue(':fits_in', $time_none, PDO::PARAM_STR);
	$stmt->bindValue(':off_in', $time_none, PDO::PARAM_STR);
	$stmt->bindValue(':off_out', $time_none, PDO::PARAM_STR);
	$stmt->bindValue(':fits_out', $time_none, PDO::PARAM_STR);
	$stmt->bindValue(':o_time', "00:00", PDO::PARAM_STR);
	$stmt->bindValue(':date', date("Y-m-d"), PDO::PARAM_STR);
	$stmt->execute();
	
	
	$stmt = $pdo->prepare(
		"SELECT id,fits_in,off_in,off_out,fits_out,o_time,date_update
		
		FROM leader_time
		
		WHERE
		
		id_num = :fd_name
		
		and
		
		date_update = :date"
	);
	$stmt->bindValue(':fd_name', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->bindValue(':date', date("Y-m-d"), PDO::PARAM_STR);
	$stmt->execute();
	}
	
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	$time = array($row["fits_in"],$row["off_in"],$row["off_out"],$row["fits_out"],$row["o_time"]);
	$data_id = $row["id"];
	$task_date = $row["date_update"];
	
	$stmt = $pdo->prepare(
		"SELECT date_update
		
		FROM leader_time
		
		WHERE
		
		id_num = :fd_name
		
		order by id DESC
		
		LIMIT 1,1"
	);
	$stmt->bindValue(':fd_name', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->execute();
	$cnt = $stmt->rowCount();
	$back_button = '';
	if ( $cnt ){
	$back_button = '<button class="btn btn-danger btn-sm" id="back_button">Back</button>';
	}
	//echo $time[4].'<br>';
	//echo $time_none;
/*
*/
 
} catch( PDOException $e ) {
	echo $e->getMessage();
}

$pdo = null;
?>

<center>
	<table class="table" style="width:95%;">
		<tbody>
			<tr>
				<td rowspan="6" colspan="2" style="width:20%;">
				<center><img src="../pics/<?php echo $_SESSION["pic"]; ?>" style="height:200px;width:200px;"></center>
				</td>
				<td colspan="2" style="width:20%;height:40px;"><b><?php
					echo $_SESSION["name"];
				?></b></td>
				<td style="width:10%;"></td>
				<td style="width:10%;"></td>
				<td style="width:20%;"><b><?php echo $task_date; ?></b></td>
				<td style="width:20%;"></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Log In (Fits)</td>
				<td class="button in_f" id="if-<?php echo $data_id; ?>"><?php echo $time[0]; ?></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time In (Office)</td>
				<td class="button in_o" id="io-<?php echo $data_id; ?>"><?php echo $time[1]; ?></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time Out (Office)</td>
				<td class="button out_o" id="to-<?php echo $data_id; ?>"><?php echo $time[2]; ?></td>
			</tr style="height:40px;">
			<tr>
				<td rowspan="2"><center>
					<?php echo $back_button; ?>
					<button class="btn btn-danger btn-sm" id="update">Update</button>
				<center></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time Out (FITS)</td>
				<td class="button out_f" id="tf-<?php echo $data_id; ?>"><?php echo $time[3]; ?></div>
				</td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td>Over Time</td>
				<td class="button o_time" id="ot-<?php echo $data_id; ?>"><?php echo $time[4]; ?></td>
			</tr>
		</tbody>
	</table>
</center>
