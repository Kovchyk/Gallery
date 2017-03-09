var slider = (function(){
	
	return function(props){

		if (props) {
			$("#pictures_sumbnails li.current").css("border", "3px solid " + props.color);
		}
		
		var currentSlidePosition = 0;

		$("#navigation").on("click", "a", function(e) {

			e.preventDefault();
			switchPicture( $("a").index( $(this) ) );
			switchSumbNext();
			switchClasses();

		});

		$("#pictures_sumbnails").on("click", "li", function(e) {

			e.preventDefault();

			if ( $(this).hasClass("next") ) {
				currentSlidePosition++;
				switchPicture(currentSlidePosition);
				switchSumbNext();
				switchClasses();
			}

			if ( $(this).hasClass("prev") ) {
				currentSlidePosition--;
				switchPicture(currentSlidePosition);
				switchSumbPrev();
				switchClasses();
			}

		});

		function switchPicture(position) {

			currentSlidePosition = position;
			$("#pictures_main-pic").css("margin-left", -450 * currentSlidePosition);
			
		}

		function switchSumbNext() {
			$("#pictures_sumbnails ul").css("margin-left", -150 * (currentSlidePosition - 1));
		}

		function switchSumbPrev() {

			//if (currentSlidePosition == 0) {
				//$("#pictures_sumbnails ul").css("margin-left", 150);
			//} else {
				$("#pictures_sumbnails ul").css("margin-left", -150 * (currentSlidePosition - 1));
			//}

		}

		function switchClasses() {

			var sumbCurr = $("#pictures_sumbnails li.current");
			var navCurr = $("#navigation li.current");
			sumbCurr.removeClass("current");
			navCurr.removeClass("current");
			sumbCurr.prev().removeClass("prev");
			sumbCurr.next().removeClass("next");
			sumbCurr = $("#pictures_sumbnails li").eq(currentSlidePosition);
			navCurr = $("#navigation li").eq(currentSlidePosition);
			sumbCurr.addClass("current");
			navCurr.addClass("current");
			sumbCurr.prev().addClass("prev");
			sumbCurr.next().addClass("next");

		}
	}

})();