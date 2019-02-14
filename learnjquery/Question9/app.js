$(document).ready(function(){
	$(function(){
		$('select').on('change',function(){
			$('div').append(this.value);
		});
	});
});