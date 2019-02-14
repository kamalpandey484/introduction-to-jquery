$(document).ready(function(){
	$('#p1').hover(function() {
			$('#p1').children('ul').slideDown('medium');
		},
		function(){
						$('#p1').children('ul').slideUp('medium');
        });
});