

<!DOCTYPE html>
<!@copyright:Pogi>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php
	require_once '../../homes/home/control.php';
	echo  $_SESSION["name"]
?></title>

    <!-- Bootstrap -->
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<script src="../bootstrap/js/jquery-1.11.3.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
		<link href="../bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<style>
	body {
			margin: 0;
			font-family:'Lato', sans-serif;
	}
	.overlay {
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: rgb(3,5,0);
		background-color: rgba(15,30,50,0.9);
		overflow-x: hidden;
		transition: 0.5s;
	}
	
	.overlay-content {
		position: relative;
		top: 10%;
		width: 50%;
		text-align: left;
		margin-top: 0px;
	}
	
	.overlay a{
		padding: 8px;
		text-decoration: none;
		font-size: 36px
		color: #818181;
		display: block;
		transition: 0.3s;
	}
	
	.overlay a:hover,.overlay a:focus {
		color: purple;
	}
	
	.overlay .closebtn {
		position: absolute;
		top: 10px;
		right: 30px;
		font-size: 30px;
	}
	
	@media screen and (max-height: 450px)
	{
		.overlay a {font-size: 20px}
		.overlay .closebtn {
			font-size: 30px;
			top: 5px;
			right: 40px:
		}
	}
</style>

</head>
<body>
  <br>
  <div class="container-fluid bg-primary">
  <font size="72px"><i><b><u>Foundation Design</u></b></i></font><br>
  <h2>Welcome&nbsp;
<?php
	require_once '../../homes/home/control.php';
	echo  $_SESSION["name"];
?></h2>
  </div><br><br><br>
  <div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
			<li><h1><img src="../pics/<?php echo $_SESSION["pic"]; ?>" style="height:250px;width:250px;">&nbsp;&nbsp;&nbsp;<font color="#336699"><?php
	require_once '../../homes/home/control.php';
	echo  $_SESSION["name"]
?></font></h1></li><br>
			  <br><li class="btn-lg" id="encode" role="presentation"><a href="../../forbes/chat">FD Message  <span class="glyphicon glyphicon-user"></span></a></li>
			  <br><li class="btn-lg" id="check" role="presentation"><a href="../../forbes/supply_request">Supply Request  <span class="glyphicon glyphicon-user"></span></a></li>
			  <br><li class="btn-lg" id="encode" role="presentation"><a href="../../dyames/fd_comp">FD Comp  <span class="glyphicon glyphicon-user"></span></a></li>
			  <br><li class="btn-lg" id="encode" role="presentation"><a href="log_out.php">Log-out  <span class="glyphicon glyphicon-user"></span></a></li>
	</div>
	</div>
	<div class="container-fluid">
	<div class="bg-default" title="Open"><span align="left" style="font-size:30px;cursor:pointer" onclick="openNav()"><font color="#336699">&#9776;User's Tool</font></span></div>
	<br>
	
	<div  class="dropdown">
		<span style="font-size:30px;color:#336699;cursor:pointer;" class="button dropdown-toggle"id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">&#9776;Leader's Tool</span>
			<ul  style="background-color:#336699;" class="dropdown-menu" aria-labelledby="dropdownMenu1">
				<li><a style="color:yellow;" href="../leader_task">Task Organizer<span class="glyphicon glyphicon-list-alt pull-right"></span></a></li>
				<li ><a style="color:yellow;"  href="../leader_task_view">Task Viewer<span class="glyphicon glyphicon-leaf pull-right"></span></a></li>
				<li><a style="color:yellow;"  href="log_out.php">Log-Out<span class="glyphicon glyphicon-off pull-right"></span></a></li>
				</ul>
			</div>
	</div>
	
			  
	
		<script src="../bootstrap/js/jquery-1.11.3.js"></script>	
		<script src="../bootstrap/js/loading.js"></script>
	
	<script>
function openNav(){

document.getElementById("myNav").style.width="100%";
}

function closeNav() {

document.getElementById("myNav").style.width="0%";
}
</script>
  </body>
  </html>