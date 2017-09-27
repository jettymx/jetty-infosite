
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>

<script type="text/javascript">
  $(function(){
    $('.text-fadein h2:gt(0)').hide();
    setInterval(function(){$('.text-fadein :first-child').fadeOut(1500).next('h2').fadeIn(1500).end().appendTo('.text-fadein');}, 5000);
  });
</script>

<!-- TypeForm Organizaciones -->
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm_share',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()</script>

<!-- Animated AOS -->
<script src="js/aos.js"></script>
<script>
  AOS.init();
</script>

<!-- SVG Animated -->
<script src="js/vivus.js"></script>
<script>
  obt1 = new Vivus('asiento', {type: 'delayed', duration: 100}),
  obt2 = new Vivus('rutas', {type: 'delayed', duration: 100}),
  obt3 = new Vivus('zzz', {type: 'delayed', duration: 100}),
  obt4 = new Vivus('cartera', {type: 'delayed', duration: 100}),
  obt5 = new Vivus('laptop', {type: 'delayed', duration: 100}),
  obt6 = new Vivus('chofer', {type: 'delayed', duration: 100}),
  obt7 = new Vivus('rocket', {type: 'delayed', duration: 100});
</script>

<script type="text/javascript">
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

                var mapOptions = {
                    zoom: 12,
                    center: new google.maps.LatLng(19.4700, -99.2300),
                    styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

                var mapElement = document.getElementById('map_canvas');
                var map = new google.maps.Map(mapElement, mapOptions);
                for (var city in citymap) {
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
            google.maps.event.addDomListener(window, 'load', init);

            var citymap2 = {
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

                var mapOptions2 = {
                    zoom: 12,
                    center: new google.maps.LatLng(19.4100, -99.2500),
                    styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

                var mapElement = document.getElementById('map_canvas_2');
                var map = new google.maps.Map(mapElement, mapOptions2);
                for (var city in citymap2) {
                  var cityCircle = new google.maps.Circle({
                    strokeColor: '#49bda7',
                    strokeOpacity: 0.0,
                    strokeWeight: 0,
                    fillColor: '#49bda7',
                    fillOpacity: 0.5,
                    map: map,
                    center: citymap2[city].center,
                    radius: Math.sqrt(citymap2[city].population) * 100
                  });
                }

            }
        </script>

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtWd5YkzOiLMhJRd-nUQo8ZfvRyB5nRmU&callback=initMap"
    async defer></script>