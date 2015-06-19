(function($){
    $(function(){
        $(".button-collapse").sideNav();
        $("pre, code").addClass("language-javascript");
        $(".page").addClass("hidden");
        $( window ).scroll(function(){
        	if(window.scrollY>100){
        		$("nav.top-nav").addClass("fixed");
        		$("main").addClass("scroll");
        		$(".page").removeClass("hidden");
        	}else{
        		$("nav.top-nav").removeClass("fixed");
        		$("main").removeClass("scroll");
        		$(".page").addClass("hidden");
        	}
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space