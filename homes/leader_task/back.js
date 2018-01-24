$(function(){
//back	
	$(document).on('click','#back_button',function(){
			load_time_1()
		
	})
//load time 1
	function load_time_1(){
		$.ajax({
			type: 'post',
			url: 'leader_time-1.php',
			data: {}
		}).done(function(data){
			$("#time_content").html(data)
			console.log ($("#task_date").text())
			load_table_1()
		}).fail(function(data){
			alert('Failed.')
		})
	}
//load table 1
	function load_table_1(){
		$.ajax({
			type: 'post',
			url: 'leader_tbody-1.php',
			data: {
				task_date: $("#task_date").text()
			}
		}).done(function(data){
			$("#task_content").html(data)
			//console.log(data)
		}).fail(function(data){
			alert('Failed.')
		})
	}
//today
	$(document).on('click','#today',function(){
		console.log('today')
		location.href = './'
	})
//in fits
	$(document).on('dblclick','.in_f_1',function(){
		var time = $(this).text()
		var hr = time.split(':')[0]
		var mn = time.split(':')[1]
		var mn = mn.split(' ')[0]
		$("#modal_content").html(
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
					'<div class="modal-header bg-danger">'+
						'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
						'<h4 class="modal-title">Log In (FITS Machine)</h4>'+
					'</div>'+
					'<div class="modal-body">'+
						'<div class="form-inline">'+
						'<input type="text" id="txt_hr" class="form-control input-sm" value="'+hr+'" style="width:33%;">'+
						'<input type="text" id="txt_mn" class="form-control input-sm" value="'+mn+'" style="width:33%;">'+
						'<select class="form-control input-sm" id="txt_hf" style="width:33%;">'+
									'<option value="AM">AM</option>'+
									'<option value="PM">PM</option>'+
								'</select>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_in_f_1">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
//in fits save
	$(document).on('click','.save_in_f_1',function(){
		var time = $("#txt_hr").val() + ':' + $("#txt_mn").val() + ' ' + $("#txt_hf").val()
		var id = $(this).attr('id').split('-')[1]
		console.log(time + id)
		
		if(!confirm('Do you want to save?')){
			return false
		}
		
		$.ajax({
			type: 'post',
			url: 'in_fits.php',
			data: {
				fits_in: time,
				id: id
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_time_1()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
//in office
	$(document).on('dblclick','.in_o_1',function(){
		var time = $(this).text()
		var hr = time.split(':')[0]
		var mn = time.split(':')[1]
		var mn = mn.split(' ')[0]
		$("#modal_content").html(
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
					'<div class="modal-header bg-danger">'+
						'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
						'<h4 class="modal-title">Time In (Office)</h4>'+
					'</div>'+
					'<div class="modal-body">'+
						'<div class="form-inline">'+
						'<input type="text" id="txt_hr" class="form-control input-sm" value="'+hr+'" style="width:33%;">'+
						'<input type="text" id="txt_mn" class="form-control input-sm" value="'+mn+'" style="width:33%;">'+
						'<select class="form-control input-sm" id="txt_hf" style="width:33%;">'+
							'<option value="AM">AM</option>'+
							'<option value="PM">PM</option>'+
						'</select>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_in_o_1">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
//in office save
	$(document).on('click','.save_in_o_1',function(){
		var time = $("#txt_hr").val() + ':' + $("#txt_mn").val() + ' ' + $("#txt_hf").val()
		var id = $(this).attr('id').split('-')[1]
		console.log(time + id)
		
		if(!confirm('Do you want to save?')){
			return false
		}
		
		$.ajax({
			type: 'post',
			url: 'in_office.php',
			data: {
				off_in: time,
				id: id
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_time_1()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
//out office
	$(document).on('dblclick','.out_o_1',function(){
		var time = $(this).text()
		var hr = time.split(':')[0]
		var mn = time.split(':')[1]
		var mn = mn.split(' ')[0]
		$("#modal_content").html(
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
					'<div class="modal-header bg-danger">'+
						'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
						'<h4 class="modal-title">Time Out (Office)</h4>'+
					'</div>'+
					'<div class="modal-body">'+
						'<div class="form-inline">'+
						'<input type="text" id="txt_hr" class="form-control input-sm" value="'+hr+'" style="width:33%;">'+
						'<input type="text" id="txt_mn" class="form-control input-sm" value="'+mn+'" style="width:33%;">'+
						'<select class="form-control input-sm" id="txt_hf" style="width:33%;">'+
							'<option value="PM">PM</option>'+
							'<option value="AM">AM</option>'+
						'</select>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_out_o_1">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})	
//out office save
	$(document).on('click','.save_out_o_1',function(){
		var time = $("#txt_hr").val() + ':' + $("#txt_mn").val() + ' ' + $("#txt_hf").val()
		var id = $(this).attr('id').split('-')[1]
		console.log(time + id)
		
		if(!confirm('Do you want to save?')){
			return false
		}
		
		$.ajax({
			type: 'post',
			url: 'out_office.php',
			data: {
				off_out: time,
				id: id
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_time_1()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})	
//out fits
	$(document).on('dblclick','.out_f_1',function(){
		var time = $(this).text()
		var hr = time.split(':')[0]
		var mn = time.split(':')[1]
		var mn = mn.split(' ')[0]
		$("#modal_content").html(
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
					'<div class="modal-header bg-danger">'+
						'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
						'<h4 class="modal-title">Time Out (FITS)</h4>'+
					'</div>'+
					'<div class="modal-body">'+
						'<div class="form-inline">'+
						'<input type="text" id="txt_hr" class="form-control input-sm" value="'+hr+'" style="width:33%;">'+
						'<input type="text" id="txt_mn" class="form-control input-sm" value="'+mn+'" style="width:33%;">'+
						'<select class="form-control input-sm" id="txt_hf" style="width:33%;">'+
							'<option value="PM">PM</option>'+
							'<option value="AM">AM</option>'+
						'</select>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_out_f_1">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})	
//out fits save
	$(document).on('click','.save_out_f_1',function(){
		var time = $("#txt_hr").val() + ':' + $("#txt_mn").val() + ' ' + $("#txt_hf").val()
		var id = $(this).attr('id').split('-')[1]
		console.log(time + id)
		
		if(!confirm('Do you want to save?')){
			return false
		}
		
		$.ajax({
			type: 'post',
			url: 'out_fits.php',
			data: {
				fits_out: time,
				id: id
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_time_1()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})	
//overtime
	$(document).on('dblclick','.o_time_1',function(){
		var time = $(this).text()
		var hr = time.split(':')[0]
		var mn = time.split(':')[1]
		var mn = mn.split(' ')[0]
		$("#modal_content").html(
			'<div class="modal-dialog modal-sm">'+
				'<div class="modal-content">'+
					'<div class="modal-header bg-danger">'+
						'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
						'<h4 class="modal-title">Overtime</h4>'+
					'</div>'+
					'<div class="modal-body">'+
						'<div class="form-inline">'+
						'<select class="form-control input-sm" id="txt_hr" style="width:50%;">'+
							'<option value="00">00</option>'+
							'<option value="01">01</option>'+
							'<option value="02">02</option>'+
							'<option value="03">03</option>'+
							'<option value="04">04</option>'+
						'</select>'+
						'<select class="form-control input-sm" id="txt_mn" style="width:50%;">'+
							'<option value="00">00</option>'+
							'<option value="30">30</option>'+
						'</select>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_o_time_1">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
		
		
	})	
//overtime save
	$(document).on('click','.save_o_time_1',function(){
		var time = $("#txt_hr").val() + ':' + $("#txt_mn").val()
		var id = $(this).attr('id').split('-')[1]
		console.log(time + id)
		
		if(!confirm('Do you want to save?')){
			return false
		}
		
		$.ajax({
			type: 'post',
			url: 'overtime.php',
			data: {
				o_time: time,
				id: id
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_time_1()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
//edit task
	$(document).on('dblclick','.edit_1',function(){
		$("#modal_content").html(
				'<div class="modal-dialog modal-lg">'+
					'<div class="modal-content">'+
						'<div class="modal-header bg-danger">'+
							'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
							'<h4>Update Task</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<textarea rows="5" id="task_name" class="form-control input-lg">'+$(this).text()+'</textarea>'+
							'<input type="hidden" id="data_id" value="' + $(this).attr('id').split('-')[1] + '">' +
							'<div class="modal-footer">'+
							'<button id="save_1" class="btn btn-sm btn-danger">Update<span class= "glyphicon glyphicon-download-alt"></span></button>' +
							'<button id="delete_1" class="btn btn-sm btn-danger">Delete<span class= "glyphicon glyphicon-trash"></span></button>' +
							'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
						'</div>'+
					'</div>'+
				'</div>'
			
		)

		$(".modal").modal('show')
	})
//delete
	$(document).on('click','#delete_1',function(){
		if(!confirm('Are you sure you want to delete data?')){
			return false
		}
		$.ajax({
			type: 'post',
			url: 'leader_delete.php',
			data: {
				id: $("#data_id").val()
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_table_1()
		}).fail(function(data){
			alert('fail')
		})
	})
//save
	$(document).on('click','#save_1',function(){
		
		if( !$("#task_name").val() ){
				alert('Please input complete data.')
				return false
		}
		
		if(!confirm('Are you sure you want to update data?')){
			return false
		}
		$.ajax({
			type: 'post',
			url: 'leader_edit.php',
			data: {
				id: $("#data_id").val(),
				task_name: $("#task_name").val()
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_table_1()
		}).fail(function(data){
			alert('fail')
		})
	})
//update
	$(document).on('click','#update_1',function(){
		$("#modal_content").html(
			'<div class="modal-dialog modal-lg">'+
				'<div class="modal-content">'+
					'<div class="modal-header bg-danger">'+
						'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
						'<h4 class="modal-title">Add new task</h4>'+
					'</div>'+
					'<div class="modal-body">'+
						'<div>'+
							'<textarea rows="2" id="task_name" class="form-control input-lg" placeholder="Type new task here..."></textarea>'+
							'<h4 style="color:gray;">or select task here...</h4>'+
							'<select class="form-control input-lg pull-right" id="task_option">'+
								'<option value="0"> </option>'+
								'<option value="Sign on AMS and OT forms.">Sign on AMS and OT forms.</option>'+
								'<option value="Check and reply on IP and E-mail concerns.">Check and reply on IP and E-mail concerns.</option>'+
								'<option value="Check/Update Monitoring Sheet and Attendance.">Check/Update Monitoring Sheet and Attendance.</option>'+
							'</select>'+
						'</div>'+
						'<div style="margin-top:80px;" class="row">' +
							'<div class="col-sm-1">'+
							'</div>'+
							'<div class="col-sm-2">'+
							'<b>CATEGORY:</b>'+
							'</div>'+
							'<div class="col-sm-2">'+
								'<select class="form-control input-sm pull-right" id="task_cate">'+
									'<option value="0"> </option>'+
									'<option value="1">D</option>'+
									'<option value="2">P</option>'+
									'<option value="3">O</option>'+
								'</select>'+
							'</div>'+
							'<div class="col-sm-1">'+
							'</div>'+
							'<div class="col-sm-2">'+
							'<b>LEVEL:</b>'+
							'</div>'+
							'<div class="col-sm-2">'+
								'<select class="form-control input-sm pull-right" id="task_level">'+
									'<option value="0"> </option>'+
									'<option value="1">A</option>'+
									'<option value="2">B</option>'+
									'<option value="3">C</option>'+
								'</select>'+
							'</div>'+
							
						'</div>'+
						'<div class="row">'+
							'<div class="col-sm-6">'+
								'<h4>LEGEND:</h4>'+
							'</div>'+
						'</div>'+
						'<div class="row">'+
							'<div class="col-sm-1">'+
								''+
							'</div>'+
							'<div class="col-sm-5">'+
								'<b>D</b> - Task that is being done on a <i>daily</i> basis.'+
							'</div>'+
							'<div class="col-sm-6">'+
								'<b>A</b> - Task that only SH/DH can do.'+
							'</div>'+
						'</div>'+
						'<div class="row">'+
							'<div class="col-sm-1">'+
								''+
							'</div>'+
							'<div class="col-sm-5">'+
								'<b>P</b> - Task that is being done <i>periodically</i>.'+
							'</div>'+
							'<div class="col-sm-6">'+
								'<b>B</b> - Task that can be done by a representative.'+
							'</div>'+
						'</div>'+
						'<div class="row">'+
							'<div class="col-sm-1">'+
								''+
							'</div>'+
							'<div class="col-sm-5">'+
								'<b>O</b> - Task that is being done <i>ocassionally</i>.'+
							'</div>'+
							'<div class="col-sm-6">'+
								'<b>C</b> - Task that can be delegated to TL/TIC in the future.'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button id="add_new_1" class="btn btn-sm btn-danger">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
//add new	
	$(document).on('click','#add_new_1',function(){
		console.log($("#task_date").text())
		var task_name = $("#task_name").val() + $("#task_option").val()
		
		
		if( task_name == '0' ){
				alert('Please input complete data.')
				return false
		}
		
		if( $("#task_cate").val() == '0'){
				alert('Please input complete data.')
				return false
		}
		
		if( $("#task_level").val() == '0'){
				alert('Please input complete data.')
				return false
		}
		
		task_name = $("#task_name").val()
		
		if( !task_name ){
				task_name = $("#task_option").val()
		}
		
		if(!confirm('Do you want to save?')){
			return false
		}
		
		/*
		*/
		
		$.ajax({
			type: 'post',
			url: 'leader_insert_1.php',
			data: {
				task_name: task_name,
				task_cate: $("#task_cate").val(),
				task_level: $("#task_level").val(),
				task_date: $("#task_date").text()
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_table_1()
		}).fail(function(data){
			alert('fail')
		})
	})
})