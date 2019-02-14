$(document).ready(function () {

var imageArray = ["https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"]

$("#slider"). click(function () {
	var image = $("#slide-img");
		image.animate({ opacity: 0 }, 500, function () {
		var random = imageArray[Math.floor(Math.random() * imageArray.length)];
		image.attr("src", random);
		image.css('opacity', 1);
		$("#slider").html(image);
		})
	})
});