
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
    google.maps.event.addDomListener(window, 'load', initMap);

    function initMap() {

        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(19.4700, -99.2300),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptions2 = {
            zoom: 12,
            center: new google.maps.LatLng(19.4100, -99.2500),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapElement = document.getElementById('map_canvas');

        var map = new google.maps.Map(mapElement, mapOptions);

        var mapElement2 = document.getElementById('map_canvas_2');

        var map2 = new google.maps.Map(mapElement2, mapOptions2);

        var polanco = [
          {lat: 19.4601, lng: -99.2214},
          {lat: 19.4560, lng: -99.2247},
          {lat: 19.4452, lng: -99.2218},
          {lat: 19.4338, lng: -99.2193},
          {lat: 19.4268, lng: -99.2261},
          {lat: 19.4172, lng: -99.2333},
          {lat: 19.4104, lng: -99.2316},
          {lat: 19.4075, lng: -99.2258},
          {lat: 19.4204, lng: -99.2188},
          {lat: 19.4284, lng: -99.2047},
          {lat: 19.4360, lng: -99.1968},
          {lat: 19.4470, lng: -99.2017},
          {lat: 19.4592, lng: -99.2124},
          {lat: 19.4619, lng: -99.2153}
        ];

        var norte = [
          {lat: 19.5325, lng: -99.2203},
          {lat: 19.5317, lng: -99.2322},
          {lat: 19.5226, lng: -99.2372},
          {lat: 19.5085, lng: -99.2434},
          {lat: 19.4978, lng: -99.2491},
          {lat: 19.4913, lng: -99.2468},
          {lat: 19.4879, lng: -99.2371},
          {lat: 19.4886, lng: -99.2299},
          {lat: 19.4948, lng: -99.2273},
          {lat: 19.5050, lng: -99.2273},
          {lat: 19.5142, lng: -99.2253},
          {lat: 19.5274, lng: -99.2170}
        ];

        var poniente = [
          {lat: 19.4085, lng: -99.2791},
          {lat: 19.4027, lng: -99.2847},
          {lat: 19.3965, lng: -99.2897},
          {lat: 19.3888, lng: -99.2844},
          {lat: 19.3760, lng: -99.2828},
          {lat: 19.3719, lng: -99.2810},
          {lat: 19.3633, lng: -99.2854},
          {lat: 19.3558, lng: -99.2859},
          {lat: 19.3534, lng: -99.2762},
          {lat: 19.3568, lng: -99.2668},
          {lat: 19.3589, lng: -99.2578},
          {lat: 19.3680, lng: -99.2562},
          {lat: 19.3778, lng: -99.2589},
          {lat: 19.3890, lng: -99.2446},
          {lat: 19.3951, lng: -99.2477},
          {lat: 19.3954, lng: -99.2572},
          {lat: 19.4017, lng: -99.2562},
          {lat: 19.4048, lng: -99.2664}
        ];

        new google.maps.Polygon({
          map: map,
          paths: polanco,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map,
          paths: norte,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Dot line
        var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.4601, lng: -99.2214}, {lat: 19.4879, lng: -99.2371}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
          map: map
        });

        new google.maps.Polygon({
          map: map2,
          paths: polanco,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map2,
          paths: poniente,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Dot line
        var lineSymbol2 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.3954, lng: -99.2572}, {lat: 19.4104, lng: -99.2316}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol2,
            offset: '0',
            repeat: '20px'
          }],
          map: map2
        });

    }

    $("#collapseOne").on("shown.bs.collapse", function(){
      initMap()
    });

    $("#collapseTwo").on("shown.bs.collapse", function(){
      initMap()
    });
</script>


