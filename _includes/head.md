<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KN843XQ');</script>
  <!-- End Google Tag Manager -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="title" content="{{ site.title }}">
  <title>Jetty, Soluciona tu transporte diario.</title>
  <meta name="description" content="{{ site.description }}">
  <meta name="keywords" content="transporte, personal, organizaciones, movilidad, urbana, traslado">
  <link rel="shortcut icon" type="image/png" href="favicon.png">
  <link rel="shortcut icon" type="image/png" href="favicon.ico">
  <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/aos.css">
  <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/site.css">
  <link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
  <script type="text/javascript">
      // When the window has finished loading create our google map below
      google.maps.event.addDomListener(window, 'load', init);

      function init() {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 13,

              // The latitude and longitude to center the map (always required)
             center: new google.maps.LatLng(19.4785507,-99.2432664), // New York

              // How you would like to style the map.
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#a4a4a4"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };
          // Get the HTML DOM element that will contain your map
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('map');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);

          var image = 'http://www.jetty.mx/img/origin-pin-@3.png';
          var beachMarker = new google.maps.Marker({
            position: {lat: 19.5073283, lng: -99.2642386},
            map: map,
            icon: image
          });

          var image = 'http://www.jetty.mx/img/destination-pin-@3.png';
          var beachMarker = new google.maps.Marker({
            position: {lat: 19.4408291, lng: -99.2067633},
            map: map,
            icon: image
          });

          var flightPlanCoordinates = [
                {lat: 19.5073283, lng: -99.2642386},
                {lat: 19.4408291, lng: -99.2067633}
              ];
              var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#4abfa8',
                strokeOpacity: 1.0,
                strokeWeight: 2
              });

              flightPath.setMap(map);

            }
  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2rZT3SKTyj6EDFQWDFiWfB8G6i_RdmiA&callback=initMap"
    async defer></script>

</head>
