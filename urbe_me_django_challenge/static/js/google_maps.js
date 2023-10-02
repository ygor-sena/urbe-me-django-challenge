/**
 * @brief This jQuery method loads Google Maps JavaScript API and call
 * configureMap() to set default values.
 */
$.getScript(`https://maps.googleapis.com/maps/api/js?` + 
      `key=${google_api_key}&libraries=places&callback=configureMap`)

let map;

/**
 * @brief This function sets up the map to id="map-route" and renders the route.
 * 
 * According to Maps JavaScript API, "the API made up of libraries that are not
 * loaded until you specifically request them". To load additional libraries,
 * libraries at run time, we must use await from within an async function.
 * 
 * Reference:
 * https://developers.google.com/maps/documentation/javascript/libraries
 */
async function configureMap() {
  const { Map } = await google.maps.importLibrary("maps");

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  map = new google.maps.Map(document.getElementById('map-route'), {
      zoom: 7,
      center: {lat: lat_a, lng: long_a}
  });
  directionsDisplay.setMap(map);
  setRoute(directionsService, directionsDisplay);
}

/**
 * @brief Calcules and displays the driving route between two points.
 * 
 * The function calls Directions API with directionsService.route() method.
 * If successful, the response is set to the directionsDisplay object, which
 * automatically displays the route on the map. Otherwise, an alert is displayed
 * with an error message.
 * 
 * Reference:
 * https://developers.google.com/maps/documentation/javascript/directions?hl=pt
 */
function setRoute(directionsService, directionsDisplay) {
  directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
  }, handleDirectionAPIResponse);

  function handleDirectionAPIResponse(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
        alert(`Directions request failed due to ${status}`);
        window.location.assign("/route")
    }
  }
}
