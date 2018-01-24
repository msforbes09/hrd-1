$(function(){
//function
	//console.log('test')
	load_date()
	load_list()
//test
	$(document).on('click','#test',function(){
		console.log($(this).attr("id"))
	})
//load date
	function load_date(){
		$.ajax({
			type: 'post',
			url: 'set_date.php',
			data: {}
		}).done(function(data){
			console.log('ok')
			$("#set_date").html(data)
		}).fail(function(data){
			alert('Failed.')
			console.log(data)
		})
	}
	
//change_id
	$(document).on('click','.change_id',function(){
		var id_num = $(this).attr("id").split('-')[1]
		//console.log(id_num)
		$.ajax({
			type: 'post',
			url: 'session_variable.php',
			data: {
				id_num :id_num
			}
		}).done(function(data){
			console.log('ok')
			console.log(data)
		}).fail(function(data){
			alert('Failed.')
			console.log(data)
		})
	})
//add day
	$(document).on('click','#t_day',function(){
		$.ajax({
			type: 'post',
			url: 'change_date.php',
			data: {
				day : 1
			}
		}).done(function(data){
			//console.log(data)
			load_date()
			load_list()
		}).fail(function(data){
			alert('Failed.')
			console.log(data)
		})
	})
//back day
	$(document).on('click','#y_day',function(){
		$.ajax({
			type: 'post',
			url: 'change_date.php',
			data: {
				day : -1
			}
		}).done(function(data){
			//console.log(data)
			load_date()
			load_list()
		}).fail(function(data){
			alert('Failed.')
			console.log(data)
		})
	})
	
//load list
	function load_list(){
		var task_date = $("#task_date").text()
		$.ajax({
			type: 'post',
			url: 'panel_list.php',
			data: {
				task_date :task_date
			}
		}).done(function(data){
			$("#leader_list").html(data)
		}).fail(function(data){
			alert('Failed.')
			console.log(data)
		})
	}
	
	
})