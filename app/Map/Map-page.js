const SearchViewModel = require("./Map-view-model");
const mapsModule = require("nativescript-google-maps-sdk");
const geoJsonData = require("./map_data");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SearchViewModel();
}

function onMapReady(args){
    console.log("On map ready")
    const mapView = args.object;
    geoJsonData.map.geojson.features.forEach(markerData => {
        mapView.addMarker(getMarker(markerData));
    });
}

function getMarker(markerData)
{
    const marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(markerData.geometry.coordinates[1],markerData.geometry.coordinates[0]);
    marker.title = markerData.properties.evento;
    marker.color="green"
    marker.userData = {index:1};
    return marker;
/*
    const marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(13.764474391937254,45.64815837802974);
    marker.title="Colazione";
    marker.color="green"
    marker.userData = {index:1};
*/
}

exports.onNavigatingTo = onNavigatingTo;
exports.onMapReady = onMapReady;