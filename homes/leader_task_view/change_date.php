<?php
//print_r($_REQUEST);
session_start();
$_SESSION["day"] = $_SESSION["day"]+$_REQUEST["day"];
?>