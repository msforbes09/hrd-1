$(function(){
//load_time
	function load_time() {
		$.ajax({
			type: 'post',
			url: 'leader_time.php',
			data: {}
		}).done(function(data){
			$("#time_content").html(data)
		}).fail(function(data){
			alert('Failed.')
		})
	}
//function
	load_time()

//in fits
	$(document).on('dblclick','.in_f',function(){
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
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_in_f">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
		
	})

//in fits save
	$(document).on('click','.save_in_f',function(){
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
			load_time()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
//in office
	$(document).on('dblclick','.in_o',function(){
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
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_in_o">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
	

//in office save
	$(document).on('click','.save_in_o',function(){
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
			load_time()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
	
//out office
	$(document).on('dblclick','.out_o',function(){
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
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_out_o">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
	
//out office save
	$(document).on('click','.save_out_o',function(){
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
			load_time()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
	
//out fits
	$(document).on('dblclick','.out_f',function(){
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
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_out_f">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
	
//out fits save
	$(document).on('click','.save_out_f',function(){
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
			load_time()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})
	
//overtime
	$(document).on('dblclick','.o_time',function(){
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
						'<button id="save-'+$(this).attr('id').split('-')[1]+'" class="btn btn-sm btn-danger save_o_time">Save<span class= "glyphicon glyphicon-download-alt"></span></button>' +
						'<button class="btn btn-sm btn-danger" data-dismiss="modal">Close<span class= "glyphicon glyphicon-remove"></span></button>'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$(".modal").modal('show')
		
		
	})
	
//out fits save
	$(document).on('click','.save_o_time',function(){
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
			load_time()
			console.log (data)
		}).fail(function(data){
			alert('fail')
		})
	})


	
})