function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 38.9108,
            lng: -121.3308
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 38.9108, lng: -121.3308 },
        { lat: 39.9108, lng: -121.3308 },
        { lat: 40.9108, lng: -121.3308 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
