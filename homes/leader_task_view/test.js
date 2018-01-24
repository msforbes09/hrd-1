$(function(){
	$(document).on('click','#a',function(){
		var b = $(this).parent().parent().prev().text()
		console.log(b)
		//$("#test").html('test')
	})
})