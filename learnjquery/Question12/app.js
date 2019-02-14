$(document).ready(function() {
	    $("#d1").click(function(e){
	        if(e.target.id != this.id) return;
	        $("#d1").append("<p>click event fired</p>");
	    });
    	$('ul').hide();
    	$('p').click(function(){
    	$('ul').show();
    });
 });