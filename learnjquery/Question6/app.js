$(document).ready(function(){
	$(function(){
		if(document.readyState==='complete')
			{
				var p=$("<p/>",{class:'class1',id:'id1',text:'To the new!'});
				$("div").html(p);
			}
		});
});