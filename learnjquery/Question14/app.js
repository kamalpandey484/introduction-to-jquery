$(document).ready(function(){
	$("td").each(function(){ //condition to check if it is greater than 10
			if($(this).text() > 10){
			$(this).css({'color':'red'});
		}
	});
});