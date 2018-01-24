<?php
session_start();
try{
	$pdo = new PDO( 'mysql:host=hrdapps40;dbname=forbes;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare(
		"SELECT id,fits_in,off_in,off_out,fits_out,o_time,date_update
		
		FROM leader_time
		
		WHERE
		
		id_num = :fd_name
		
		order by id DESC
		
		LIMIT 1,1"
	);
	$stmt->bindValue(':fd_name', $_SESSION["fd_name"], PDO::PARAM_STR);
	$stmt->execute();
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	$time = array($row["fits_in"],$row["off_in"],$row["off_out"],$row["fits_out"],$row["o_time"]);
	$data_id = $row["id"];
	$task_date = $row["date_update"];
	
} catch( PDOException $e){
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
				<td style="width:20%;" id="task_date"><b><?php echo $task_date; ?></b></td>
				<td style="width:20%;"></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Log In (Fits)</td>
				<td class="button in_f_1" id="if-<?php echo $data_id; ?>"><?php echo $time[0]; ?></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time In (Office)</td>
				<td class="button in_o_1" id="io-<?php echo $data_id; ?>"><?php echo $time[1]; ?></td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time Out (Office)</td>
				<td class="button out_o_1" id="to-<?php echo $data_id; ?>"><?php echo $time[2]; ?></td>
			</tr style="height:40px;">
			<tr>
				<td rowspan="2"><center>
					<button class="btn btn-danger btn-sm" id="today">Today</button>
					<button class="btn btn-danger btn-sm" id="update_1">Update</button>
				<center></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Time Out (FITS)</td>
				<td class="button out_f_1" id="tf-<?php echo $data_id; ?>"><?php echo $time[3]; ?></div>
				</td>
			</tr>
			<tr style="height:40px;">
				<td></td>
				<td></td>
				<td></td>
				<td>Over Time</td>
				<td class="button o_time_1" id="ot-<?php echo $data_id; ?>"><?php echo $time[4]; ?></td>
			</tr>
		</tbody>
	</table>
</center>