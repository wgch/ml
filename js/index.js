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
        corporate: '#corporate',
        mediation: '#mediation'
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

function initMap() {
    var myLatLng = {lat: -1.2774, lng: 36.804866};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 17
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Musyimi & Company Advocates'
    });
}


