<?php
if( $_SESSION["j_pos"] < 5 )  {
	header('location: ../../homes/home');
	//echo "<script>alert('You are not Allowed to Access this Site!');</script>";
}
?>