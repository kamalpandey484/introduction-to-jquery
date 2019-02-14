$('#para1').css('color', 'blue');

$(".para2").css('color', 'red');

$(":button").css('background-color', 'yellow');

$('[href]').css('color','green');

$.ajax({url: 'https://api.myjson.com/bins/cr6wu', method: 'Get', success: function(result){
	console.log(result);
	$("#demo").text(result);
}});