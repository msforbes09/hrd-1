$(function(){
	
//load_table
	function load_table() {
		$.ajax({
			type: 'post',
			url: 'leader_tbody.php',
			data: {}
		}).done(function(data){
			$("#task_content").html(data)
		}).fail(function(data){
			alert('Failed.')
		})
	}

//function
	load_table()

//date picker	
	$('#date_filter').datepicker(
    {
      format: 'yyyy-mm-dd',
      startDate: '-3m',
      autoclose: true,
      orientation: 'top'
    })
//date change
	$(document).on('click','#search',function(){
		alert("Sorry function finished not yet!")
	})
//add new	
	$(document).on('click','#add_new',function(){
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
			url: 'leader_insert.php',
			data: {
				task_name: task_name,
				task_cate: $("#task_cate").val(),
				task_level: $("#task_level").val()
			}
		}).done(function(data){
			$(".modal").modal('hide')
			load_table()
		}).fail(function(data){
			alert('fail')
		})
	})
//update
	$(document).on('click','#update',function(){
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
						'<button id="add_new" class="btn btn-sm btn-danger">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
	


})