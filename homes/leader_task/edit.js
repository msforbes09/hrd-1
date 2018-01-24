$(function(){

//load
	function load() {
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

//edit	
	$(document).on('dblclick','.edit',function(){
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
							'<button id="save" class="btn btn-sm btn-danger">Update<span class= "glyphicon glyphicon-download-alt"></span></button>' +
							'<button id="delete" class="btn btn-sm btn-danger">Delete<span class= "glyphicon glyphicon-trash"></span></button>' +
							'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
						'</div>'+
					'</div>'+
				'</div>'
			
		)

		$(".modal").modal('show')
	})

//delete
	$(document).on('click','#delete',function(){
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
			load()
		}).fail(function(data){
			alert('fail')
		})
	})
	
//save
	$(document).on('click','#save',function(){
		
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
			load()
		}).fail(function(data){
			alert('fail')
		})
	})


})