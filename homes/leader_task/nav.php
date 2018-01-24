<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="">Task Manager</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<div class="form-inline">
		<ul class="nav navbar-nav navbar-right">
			<button class="btn btn-success"><span class="glyphicon glyphicon-search" id="search"></span></button>
			<input class="form-control" type="text" id="date_filter" value="<?php echo date("Y-m-d"); ?>" style="text-align:center;" >
			<div class="btn-group">
				<a class="btn navbar-btn btn-primary btn-sm" href="../home">Home <span class="glyphicon glyphicon-home"></span></a>
				<a class="btn navbar-btn btn-primary btn-sm" href="../home/log_out.php">Logout <span class="glyphicon glyphicon-off"></span></a>
			</div>
				<a href="../leader_task/about.txt" target="_blank"><button type="button" class="btn btn-link btn-sm">About</button></a>
			
		</ul>
		</div>
  	</div>
  </div>
</nav>