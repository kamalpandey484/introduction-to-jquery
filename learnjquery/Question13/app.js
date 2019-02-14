$(document).ready(function(){
	$(function(){
		var max = -1;
		$("div").each(function() {
			var h = $(this).height();
			max = h > max ? h : max; // maximum height
		});
		alert(max);
	});
});