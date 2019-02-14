$(document).ready(function(){
	$.ajax({url: 'https://api.myjson.com/bins/cr6wu', method: 'Get', success: function(result){
		console.log(result);
		$('div').text(JSON.stringify(result));
	}});	
});

