$(document).ready(function(){
	$(".team-col").each(function(){
		$(this).click(function (e) {
			$('.team-col').removeClass('active');
			$(this).addClass('active');
		});
	});
});