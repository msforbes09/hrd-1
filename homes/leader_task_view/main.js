$(function(){
	
//load_table
	function load_table() {
		$.ajax({
			type: 'post',
			url: 'main_tbody.php',
			data: {}
		}).done(function(data){
			$("#task_content").html(data)
		}).fail(function(data){
			alert('Failed.')
		})
	}
//load_time
	function load_time() {
		$.ajax({
			type: 'post',
			url: 'main_time.php',
			data: {}
		}).done(function(data){
			$("#time_content").html(data)
		}).fail(function(data){
			alert('Failed.')
		})
	}
//function
	load_time()
	load_table()

})