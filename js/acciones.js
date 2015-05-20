// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	if ($('#divjuego'))
	{
		$('#colormorado').on('click', function(){
			$('#resul').append('1')
		});
		$('#colorazul').on('click', function(){
			$('#resul').append('2')
		});
		$('#colorrosa').on('click', function(){
			$('#resul').append('3')
		});
		$('#colorcafe').on('click', function(){
			
			$('#resul').append('4')
		});
	}
	
//}); 
});

