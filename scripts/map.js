/**
 * Created by dscott on 5/12/2016.
 */

var map;
var marker;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var currentLocation;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        currentLocation = new google.maps.LatLng( position.coords.latitude, position.coords.longitude);
    });
}
var church = new google.maps.LatLng( 41.132929, -74.130654 );
var mapCanvas = document.getElementById('map_canvas');
var directionsPanel = document.getElementById('directions');

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions;
    mapOptions = {
        zoom: 16,
        center: church,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(mapCanvas, mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(directionsPanel);

    marker = new google.maps.Marker({
        position: church,
        map: map,
        title: "Living Word Christian Fellowship"
    });
}

function calculateRoute() {
    var request = {
        origin: currentLocation,
        destination: church,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
        var steps = response.routes[0].legs[0].steps;
        var html = '';
        for (var i in steps) {
            html += steps[i].instructions + "<br />";
        }
        directionsPanel.innerHTML = html;
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

marker.setMap(map);