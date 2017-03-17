var slider = (function(){
	
	return function(props){

		if (props) {
			$("#pictures_sumbnails li.current").css("border", "3px solid " + props.color);
		}
		
		var currentSlidePosition = 0;

		$("#navigation").on("click", "a", function(e) {

			e.preventDefault();
			switchPicture( $("a").index( $(this) ) );
			switchSumb();
			switchClasses();

		});

		$("#pictures_sumbnails").on("click", "li", function(e) {

			e.preventDefault();

			if ( $(this).hasClass("next") ) {
				currentSlidePosition++;
				switchPicture(currentSlidePosition);
				switchSumb();
				switchClasses();
			}

			if ( $(this).hasClass("prev") ) {
				currentSlidePosition--;
				switchPicture(currentSlidePosition);
				switchSumb();
				switchClasses();
			}

		});

		function switchPicture(position) {

			currentSlidePosition = position;
			$("#pictures_main-pic").css("margin-left", -450 * currentSlidePosition);
			
		}

		function switchSumb() {
			$("#pictures_sumbnails ul").css("margin-left", -150 * (currentSlidePosition - 1));
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