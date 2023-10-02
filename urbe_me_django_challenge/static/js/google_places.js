/**
 * @brief This jQuery method loads Google Places API and call
 * initAutocomplete() to give the user input address fields autocomplete.
 */
$.getScript(`https://maps.googleapis.com/maps/api/js?` + 
      `key=${google_api_key}&libraries=places&callback=initAutocomplete`)

ORIGIN = 'a'
DESTINATION = 'b'

var auto_fields = [ORIGIN, DESTINATION]

/**
 * @brief This function autocompletes the user input for the address fields.
 * 
 * The addresses are limited to Brazil. The database is provided by Places API.
 * If either address is changed, the function onPlaceChanged() is called.
 */
function initAutocomplete() {
  for (i = 0; i < auto_fields.length; i++) {
    var field = auto_fields[i]
    window['autocomplete_' + field] = new google.maps.places.Autocomplete(
      document.getElementById('id-google-address-' + field),
    {
       types: ['address'],
       componentRestrictions: { country: "br"},
    })
  }

  autocomplete_a.addListener('place_changed', function(){
          onPlaceChanged(ORIGIN)
  });
  autocomplete_b.addListener('place_changed', function(){
          onPlaceChanged(DESTINATION)
  });
}

/**
 * @brief This function gets the latitude and longitude from the user input address.
 * 
 * Once the address is selected, we use Geocoding API to get the latitude and longitude.
 * 
 * The latitude and longitude are used to calculate the route. The route will only
 * be calculated if both addresses are provided.
 */
function onPlaceChanged (field_name){
  var auto = window['autocomplete_'+ field_name]
  var element_id = 'id-google-address-'+ field_name
  var lat_id = 'id-lat-' + field_name
  var long_id = 'id-long-' + field_name

  var geocoder = new google.maps.Geocoder()
  var address = document.getElementById(element_id).value

  geocoder.geocode({'address': address}, handleGeocodingAPIResponse); 

  function handleGeocodingAPIResponse(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();

        $('#' + lat_id).val(latitude) 
        $('#' + long_id).val(longitude) 

        calculateRoute()
    } else {
        alert(`Geocoding API was not successful for the following reason: ${status}`);
    }
  }
}

/**
 * @brief This functions validates the latitude and longitude of origin and destination,
 * which are stored in hidden fields under the class name "geo".
 */
function validateUserInput() {
  var valid = true;
  $('.geo').each(function () {
    if ($(this).val() === '') {
      valid = false;
      return false;
    }
  });
  return valid
}

/**
 * @brief This function calculates the route between the origin and destination.
 * It creates a URL with the latitude and longitude of both addresses and redirects
 * the user to the map page.
 */
function calculateRoute(){
  if (validateUserInput() == true) {
    var params = {
        lat_a: $('#id-lat-a').val(),
        long_a: $('#id-long-a').val(),
        lat_b: $('#id-lat-b').val(),
        long_b: $('#id-long-b').val(),
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    url = '/map?' + query
    window.location.assign(url)
  }
}
