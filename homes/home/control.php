<?php
session_start();
if( is_null($_SESSION["fd_name"]) )  {
	header('location: ../../homes/home/log_in.php');
	
}
?>