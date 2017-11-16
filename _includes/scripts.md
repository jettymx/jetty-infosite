
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
  obt0 = new Vivus('automovile', {type: 'delayed', duration: 100});
  obt1 = new Vivus('asiento', {type: 'delayed', duration: 100});
  obt2 = new Vivus('rutas', {type: 'delayed', duration: 100});
  obt3 = new Vivus('zzz', {type: 'delayed', duration: 100});
  obt4 = new Vivus('cartera', {type: 'delayed', duration: 100});
  obt5 = new Vivus('laptop', {type: 'delayed', duration: 100});
  obt6 = new Vivus('chofer', {type: 'delayed', duration: 100});
  obt7 = new Vivus('rocket', {type: 'delayed', duration: 100});
  obt8 = new Vivus('flexible', {type: 'delayed', duration: 100});
  obt9 = new Vivus('conductor', {type: 'delayed', duration: 100});
</script>

<script type="text/javascript">
    google.maps.event.addDomListener(window, 'load', initMap);

    function initMap() {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(19.4800, -99.2200),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        // var mapOptions2 = {
        //     zoom: 12,
        //     center: new google.maps.LatLng(19.4100, -99.2400),
        //     styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptions3 = {
            zoom: 11,
            center: new google.maps.LatLng(19.4000, -99.2250),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptions4 = {
            zoom: 11,
            center: new google.maps.LatLng(19.4600, -99.2500),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapElement = document.getElementById('map_canvas');
        var map = new google.maps.Map(mapElement, mapOptions);

        // var mapElement2 = document.getElementById('map_canvas_2');
        // var map2 = new google.maps.Map(mapElement2, mapOptions2);

        var mapElement3 = document.getElementById('map_canvas_3');
        var map3 = new google.maps.Map(mapElement3, mapOptions3);

        var mapElement4 = document.getElementById('map_canvas_4');
        var map4 = new google.maps.Map(mapElement4, mapOptions4);

         // Marker points
        var image = {
            url: 'http://www.jetty.mx/img/origin-pin-@3.png',
            scaledSize: new google.maps.Size(20, 28) // scaled size
        };

        // Satélite > Polanco
        // Satelite
        var Marker = new google.maps.Marker({
          position: {lat: 19.5517, lng: -99.2073},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5369, lng: -99.2172},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5246, lng: -99.2265},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5136, lng: -99.2374},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5026, lng: -99.2370},
          map: map,
          icon: image
        });


        // Polanco
        var Marker = new google.maps.Marker({
          position: {lat: 19.4548, lng: -99.2196},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.4403, lng: -99.2054},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.4380, lng: -99.1902},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.4415, lng: -99.1822},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.4332, lng: -99.2100},
          map: map,
          icon: image
        });

        // Roma
        var Marker = new google.maps.Marker({
          position: {lat: 19.4223, lng: -99.1747},
          map: map,
          icon: image
        });


        // Santa Fe > Chapultepec
        // Santa fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.3872, lng: -99.2532},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.3653, lng: -99.2648},
          map: map3,
          icon: image
        });

        //Polanco
        // var Marker = new google.maps.Marker({
        //   position: {lat: 19.4548, lng: -99.2196},
        //   map: map3,
        //   icon: image
        // });

        // var Marker = new google.maps.Marker({
        //   position: {lat: 19.4403, lng: -99.2054},
        //   map: map3,
        //   icon: image
        // });

        // var Marker = new google.maps.Marker({
        //   position: {lat: 19.4380, lng: -99.1902},
        //   map: map3,
        //   icon: image
        // });

        // var Marker = new google.maps.Marker({
        //   position: {lat: 19.4415, lng: -99.1822},
        //   map: map3,
        //   icon: image
        // });

        // var Marker = new google.maps.Marker({
        //   position: {lat: 19.4332, lng: -99.2100},
        //   map: map3,
        //   icon: image
        // });

        // Roma
        var Marker = new google.maps.Marker({
          position: {lat: 19.4223, lng: -99.1747},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.4107, lng: -99.1907},
          map: map3,
          icon: image
        });



        // Norte > Santa Fe Express
        // Satelite
        var Marker = new google.maps.Marker({
          position: {lat: 19.5517, lng: -99.2073},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5369, lng: -99.2172},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5246, lng: -99.2265},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5136, lng: -99.2374},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5026, lng: -99.2370},
          map: map4,
          icon: image
        });

        // Santa fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.3872, lng: -99.2532},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.3653, lng: -99.2648},
          map: map4,
          icon: image
        });


        //Polygons
        var norte = [
          {lat: 19.5578, lng: -99.2052},
          {lat: 19.5575, lng: -99.2104},
          {lat: 19.5554, lng: -99.2149},
          {lat: 19.5393, lng: -99.2285},
          {lat: 19.5216, lng: -99.2391},
          {lat: 19.5085, lng: -99.2439},
          {lat: 19.4979, lng: -99.2487},
          {lat: 19.4918, lng: -99.2473},
          {lat: 19.4875, lng: -99.2401},
          {lat: 19.4870, lng: -99.2330},
          {lat: 19.4889, lng: -99.2290},
          {lat: 19.4949, lng: -99.2274},
          {lat: 19.5044, lng: -99.2275},
          {lat: 19.5138, lng: -99.2236},
          {lat: 19.5183, lng: -99.2186},
          {lat: 19.5369, lng: -99.2070},
          {lat: 19.5472, lng: -99.2012},
          {lat: 19.5561, lng: -99.2029}
        ];

        var polanco = [
          {lat: 19.4605, lng: -99.2220},
          {lat: 19.4557, lng: -99.2238},
          {lat: 19.4460, lng: -99.2194},
          {lat: 19.4421, lng: -99.2152},
          {lat: 19.4377, lng: -99.2185},
          {lat: 19.4322, lng: -99.2182},
          {lat: 19.4281, lng: -99.2171},
          {lat: 19.4231, lng: -99.2133},
          {lat: 19.4256, lng: -99.1998},
          {lat: 19.4302, lng: -99.1955},
          {lat: 19.4311, lng: -99.1809},
          {lat: 19.4197, lng: -99.1773},
          {lat: 19.4158, lng: -99.1718},
          {lat: 19.4200, lng: -99.1667},
          {lat: 19.4274, lng: -99.1679},
          {lat: 19.4374, lng: -99.1732},
          {lat: 19.4437, lng: -99.1745},
          {lat: 19.4475, lng: -99.1786},
          {lat: 19.4460, lng: -99.1876},
          {lat: 19.4457, lng: -99.1974},
          {lat: 19.4490, lng: -99.2045},
          {lat: 19.4514, lng: -99.2097},
          {lat: 19.4576, lng: -99.2125},
          {lat: 19.4618, lng: -99.2188}
        ];

        var santafe = [
          {lat: 19.3740, lng: -99.2677},
          {lat: 19.3723, lng: -99.2743},
          {lat: 19.3684, lng: -99.2817},
          {lat: 19.3644, lng: -99.2846},
          {lat: 19.3610, lng: -99.2855},
          {lat: 19.3559, lng: -99.2835},
          {lat: 19.3538, lng: -99.2785},
          {lat: 19.3529, lng: -99.2717},
          {lat: 19.3565, lng: -99.2674},
          {lat: 19.3571, lng: -99.2602},
          {lat: 19.3611, lng: -99.2550},
          {lat: 19.3676, lng: -99.2561},
          {lat: 19.3712, lng: -99.2652}
        ];

        var bosques = [
          {lat: 19.3938, lng: -99.2534},
          {lat: 19.3902, lng: -99.2599},
          {lat: 19.3837, lng: -99.2656},
          {lat: 19.3837, lng: -99.2656},
          {lat: 19.3790, lng: -99.2653},
          {lat: 19.3808, lng: -99.2591},
          {lat: 19.3872, lng: -99.2497},
          {lat: 19.3907, lng: -99.2481},
          {lat: 19.3940, lng: -99.2478},
          {lat: 19.3943, lng: -99.2540}
        ];

        var chapultepec = [
          {lat: 19.4205, lng: -99.1982},
          {lat: 19.4160, lng: -99.2014},
          {lat: 19.4066, lng: -99.2018},
          {lat: 19.4032, lng: -99.1987},
          {lat: 19.4008, lng: -99.1947},
          {lat: 19.4025, lng: -99.1877},
          {lat: 19.4076, lng: -99.1831},
          {lat: 19.4128, lng: -99.1828},
          {lat: 19.4147, lng: -99.1810},
          {lat: 19.4131, lng: -99.1762},
          {lat: 19.4131, lng: -99.1714},
          {lat: 19.4157, lng: -99.1645},
          {lat: 19.4238, lng: -99.1619},
          {lat: 19.4289, lng: -99.1655},
          {lat: 19.4308, lng: -99.1713},
          {lat: 19.4301, lng: -99.1752},
          {lat: 19.4274, lng: -99.1814},
          {lat: 19.4224, lng: -99.1786},
          {lat: 19.4178, lng: -99.1819},
          {lat: 19.4169, lng: -99.1898},
          {lat: 19.4198, lng: -99.1925},
          {lat: 19.4212, lng: -99.1938}
        ];


        // MAPA Satélite <-> Polanco
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

        // Line Norte - Santa fé
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


        // MAPA 2 Polanco <-> Santa Fé
        // new google.maps.Polygon({
        //   map: map2,
        //   paths: polanco,
        //   strokeColor: '#49bda7',
        //   strokeOpacity: 0.8,
        //   strokeWeight: 2,
        //   fillColor: '#49bda7',
        //   fillOpacity: 0.5,
        //   draggable: false,
        //   geodesic: true
        // });

        // new google.maps.Polygon({
        //   map: map2,
        //   paths: santafe,
        //   strokeColor: '#49bda7',
        //   strokeOpacity: 0.8,
        //   strokeWeight: 2,
        //   fillColor: '#49bda7',
        //   fillOpacity: 0.5,
        //   draggable: false,
        //   geodesic: true
        // });

        // Dot line 2
        // var lineSymbol2 = {
        //   path: 'M 0,-1 0,1',
        //   strokeOpacity: 0.5,
        //   scale: 4
        // };

        // var line = new google.maps.Polyline({
        //   path: [{lat: 19.3712, lng: -99.2652}, {lat: 19.4281, lng: -99.2171}],
        //   strokeOpacity: 0,
        //   icons: [{
        //     icon: lineSymbol2,
        //     offset: '0',
        //     repeat: '20px'
        //   }],
        //   map: map2
        // });


        // MAPA 3 Santa Fe <-> Chapultepec/Polanco
        // new google.maps.Polygon({
        //   map: map3,
        //   paths: polanco,
        //   strokeColor: '#49bda7',
        //   strokeOpacity: 0.8,
        //   strokeWeight: 2,
        //   fillColor: '#49bda7',
        //   fillOpacity: 0.5,
        //   draggable: false,
        //   geodesic: true
        // });

        new google.maps.Polygon({
          map: map3,
          paths: chapultepec,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map3,
          paths: santafe,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map3,
          paths: bosques,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Dot line 3
        var lineSymbol3 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        // Line Norte - Chapultepec
        var line = new google.maps.Polyline({
          path: [{lat: 19.3712, lng: -99.2652}, {lat: 19.4066, lng: -99.2018}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol3,
            offset: '0',
            repeat: '20px'
          }],
          map: map3
        });

        // Line Polanco - Chapultepec
        // var line = new google.maps.Polyline({
        //   path: [{lat: 19.4271, lng: -99.1794}, {lat: 19.4323, lng: -99.1816}],
        //   strokeOpacity: 0,
        //   icons: [{
        //     icon: lineSymbol3,
        //     offset: '0',
        //     repeat: '20px'
        //   }],
        //   map: map3
        // });

        // MAPA 4 Satéite <-> Santa Fe Express
        new google.maps.Polygon({
          map: map4,
          paths: norte,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map4,
          paths: santafe,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map4,
          paths: bosques,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line 4 Norte - Santa fé
        var lineSymbol4 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.3740, lng: -99.2677}, {lat: 19.4879, lng: -99.2371}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol4,
            offset: '0',
            repeat: '20px'
          }],
          map: map4
        });

    }

    $("#collapseOne").on("shown.bs.collapse", function(){
      initMap()
    });

    $("#collapseTwo").on("shown.bs.collapse", function(){
      initMap()
    });
</script>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.scrollTo.js"></script>


