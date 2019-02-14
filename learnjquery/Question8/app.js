$(document).ready(function(){
	$(function(){
			var append1=$("<p/>",{class:'class1',id:'id1',text:'hello world'});
			$("div").append(append1);
			});
			$(".class1").on("click", function(){
			alert("alert key working!");
		});
});