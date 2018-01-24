<?php
//print_r($_REQUEST);
session_start();
$_SESSION["task_date"] = date("Y-m-d",strtotime(date("Y-m-d").' +'.$_SESSION["day"].' day'));
?>

<label class="form-control input-md" id="task_date"><center><?php echo $_SESSION["task_date"] ?></center></label>