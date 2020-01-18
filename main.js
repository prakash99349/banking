$(document).ready(function() {
	"use strict";
	$('#customers-testimonials').owlCarousel({ loop: true, center: false, items: 2, margin: 5, autoplay: true, dots:true, autoWidth:true, autoplayTimeout: 8500, smartSpeed: 450,
			responsive: {
				0: {items: 1, margin: 0},
				327: {items: 1, margin:20,},
				512: {items: 1, margin:30,},
				768: {items: 2,},
				992: {items: 2},
				1170: {items: 2}
			}
		});
	MobileShow = document.getElementById("MobileShow");
			var myScrollFunc = function () {
				var y = window.scrollY;
				if (y >= 150) {
					MobileShow.className = "calltoactionmobiledisplay show"
				} else {
					MobileShow.className = "calltoactionmobiledisplay hide"
				}
			};

});
window.addEventListener("scroll", myScrollFunc);
			var modal = document.getElementById("myModal");
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			btn.onclick = function() {
				modal.style.display = "block";
				}
			span.onclick = function() {
				modal.style.display = "none";
				}
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};
			
			