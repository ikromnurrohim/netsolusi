		var scrollPos = window.pageYOffset;
		window.onscroll = function(){
			var pos = window.pageYOffset;
			if(scrollPos > pos){
				document.getElementById("navbar").style.top = "0";
			} else {
				document.getElementById("navbar").style.top = "-100px";
			}

			scrollPos = pos;
		}
