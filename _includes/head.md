<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KN843XQ');</script>
  <!-- End Google Tag Manager -->
  <title>Jetty, Soluciona tu transporte diario.</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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

      var citymap = {
          // ZONA-NORTE
          znorte1: {
              center: {lat: 19.5280, lng: -99.2250},
              population: 70
            },
            znorte2: {
              center: {lat: 19.5170, lng: -99.2310},
              population: 70
            },
            znorte3: {
              center: {lat: 19.5050, lng: -99.2360},
              population: 70
            },
            znorte4: {
              center: {lat: 19.4940, lng: -99.2390},
              population: 110
            },

            // ZONA-TOREO
            ztoreopolanco1: {
              center: {lat: 19.4520, lng: -99.2191233},
              population: 100
            },
            ztoreopolanco2: {
              center: {lat: 19.4390, lng: -99.2100},
              population: 180
            },
            ztoreopolanco3: {
              center: {lat: 19.4250, lng: -99.2200},
              population: 50
            },
            ztoreopolanco4: {
              center: {lat: 19.4150, lng: -99.2270},
              population: 50
            }
          };

      function init() {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 13,

              // The latitude and longitude to center the map (always required)
             center: new google.maps.LatLng(19.4400, -99.2500),

              // How you would like to style the map.
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };
          // Get the HTML DOM element that will contain your map
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('mapauno');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);

          // Construct the circle for each value in citymap.
          // Note: We scale the area of the circle based on the population.
          for (var city in citymap) {
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
              strokeColor: '#49bda7',
              strokeOpacity: 0.0,
              strokeWeight: 0,
              fillColor: '#49bda7',
              fillOpacity: 0.5,
              map: map,
              center: citymap[city].center,
              radius: Math.sqrt(citymap[city].population) * 100
            });
          }

      }
  </script>
  <script type="text/javascript">
      // When the window has finished loading create our google map below
      google.maps.event.addDomListener(window, 'load', init);

      var citymap = {
            // ZONA-TOREO
            ztoreopolanco1: {
              center: {lat: 19.4520, lng: -99.2191233},
              population: 100
            },
            ztoreopolanco2: {
              center: {lat: 19.4390, lng: -99.2100},
              population: 180
            },
            ztoreopolanco3: {
              center: {lat: 19.4250, lng: -99.2200},
              population: 50
            },
            ztoreopolanco4: {
              center: {lat: 19.4150, lng: -99.2270},
              population: 50
            },

            // ZONA-PONIENTE
            zponiente1: {
              center: {lat: 19.3970, lng: -99.2730},
              population: 200
            },
            zponiente2: {
              center: {lat: 19.3800, lng: -99.2700},
              population: 200
            },
            zponiente3: {
              center: {lat: 19.3890, lng: -99.2550},
              population: 70
            },
            zponiente4: {
              center: {lat: 19.3650, lng: -99.2650},
              population: 50
            },
            zponiente5: {
              center: {lat: 19.3630, lng: -99.2750},
              population: 100
            }
          };

      function init() {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 13,

              // The latitude and longitude to center the map (always required)
             center: new google.maps.LatLng(19.4400, -99.2500),

              // How you would like to style the map.
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };
          // Get the HTML DOM element that will contain your map
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('mapados');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);

          // Construct the circle for each value in citymap.
          // Note: We scale the area of the circle based on the population.
          for (var city in citymap) {
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
              strokeColor: '#49bda7',
              strokeOpacity: 0.0,
              strokeWeight: 0,
              fillColor: '#49bda7',
              fillOpacity: 0.5,
              map: map,
              center: citymap[city].center,
              radius: Math.sqrt(citymap[city].population) * 100
            });
          }

      }
  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2rZT3SKTyj6EDFQWDFiWfB8G6i_RdmiA&callback=initMap"
  async defer></script>

</head>
