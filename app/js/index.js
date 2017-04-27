$(document).ready(function(){
	$(".team-col").each(function(){
		$(this).click(function (e) {
			$('.team-col').removeClass('active');
			$(this).addClass('active');
		});
	});

    var tabs = {
        litigation: '#litigation',
        realestate: '#realestate',
        corporate: '#corporate'
    };
    for (var key in tabs) {
        if (tabs.hasOwnProperty(key)) {
            var val = tabs[key];
            if (window.location.hash == val){
                $("a[href='" + val + "']").tab('show');
            }
        }
    }
});


