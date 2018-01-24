<?php
	session_start();
	/*if ($_SESSION["fd_name"])   {
	header('location: index.php');
	}*/
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!--
	<link rel="shortcut icon" href="../bootstrap/images/favicon.ico" />
	-->
	
    <title>Foundation Design Section</title>
	<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">

	<style type="text/css">
		body{
			background-color:#efefef;
		}
	</style> 
	<script>
		function setFocus(){
			$("#username").focus();
		}
	</script>
</head>
<body onload="setFocus()">
	<div class="container-fluid" style="margin-top:15%;width:400px;">
		<center><img src="../../bootstrap/images/fdt_logo.png" style="height:80px;width:170px;"></center>
		<form method="POST" action="">
		<div class="panel panel-info" style="border-radius:0px;box-shadow: 0 6px 6px -6px black;">
			
			<div class="panel-heading">
				<strong>Login form</strong>
			</div>
			<div class="panel-body">
				<div class="input-group input-group-md">
					<span class="input-group-addon">
						<span class="glyphicon glyphicon-user"></span>
					</span>
					<input type="text" id="username" name="username" placeholder="Username" class="form-control" autocomplete="off"/>
				</div> <br/>
				<div class="input-group input-group-md">
					<span class="input-group-addon">	
						<span class="glyphicon glyphicon-lock"></span>
					</span>
					<input type="password"  id="password" name="password" placeholder="Password" class="form-control" autocomplete="off"/><br/>
				</div>
			</div>
			<div class="panel-footer" >
					<label id="label_load" style="display:none">Loading...</label>
					<button type="submit" name="submit" class="btn btn-primary btn-md" id="login">Login <span class="glyphicon glyphicon-log-in" style="color:white;"></span></button>
					<button type="button" class="btn btn-link pull-right" onClick="location.href='register.php'">Not yet registered?</button> <br/>
				<center>
				</center>
			</div>
			
			<?php
			if( $_SERVER["REQUEST_METHOD"] === 'POST' ) {
		require_once 'check_user.php';
		if ( $cnt ) {
			$_SESSION["fd_name"] = $_REQUEST["username"];
			$_SESSION["name"] = $name;
			$_SESSION["pic"] = $pic;
			$_SESSION["j_pos"] = $j_pos;
			header('location: index.php');		
		} else {
			echo "<script>alert('Invalid Username and Password!');</script>";
			echo "<script>$('#username').focus();</script>";
		}
	}
			/*	
				if (isset($_POST['submit'])) {

						$username = $_POST['username'];
						$password = md5($_POST['password']);
						
					if($username != "" && $password){
						try{
							require_once '../code/config.php';
							$pdo = new PDO( DSN, DB_USR, DB_PWD );
							$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
							$pdo->query('SET NAMES UTF8');
							
							$stmt = $pdo->prepare("SELECT team,f_name,username,password,account_type FROM `add_staff` ");
							$stmt->execute();
							
								while( $row = $stmt->fetch(PDO::FETCH_ASSOC)){
									if($row['username'] == $username && $row['password'] == $password ){
										//$_SESSION['user'] = $username;
										$_SESSION['team_log'] = $row['team'];
										$user = $row['username'];
										$_SESSION['account_type'] = $row['account_type'];
										$_SESSION['name_log'] = $row['f_name'];
										break;
									}		
								}

								$flag = $stmt->execute();
								
								if(!$flag){
									$info = $stmt->errorInfo();
									exit($info[2]);
								}
								
						}catch(PDOException $e){
							var_dump($e->getMessage());
						}
							if($username == $user){
								echo "<script>$(#label_load).removeAttr('style');$(#image_load).removeAttr('style');</script>";
								//header('Refresh: 1;url=../index.php');
								header('location: ../index.php');
								echo "<script>alert('Welcome ".$_SESSION['name_log']."');</script>";
							}else{
								echo "<script>alert('Invalid Username and Password!');</script>";
								echo "<script>$('#username').focus();</script>";
							}
							$pdo = null;
					}else{
						echo "<script>alert('Please fill up all the fields!');</script>";
						echo "<script>$('#username').focus();</script>";
					}
						
				}
			*/
			?>
			</form>
		</div>
	</div>
	
	<script src="../bootstrap/js/jquery-1.11.3.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
</body>
</html>


