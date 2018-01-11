
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
            center: new google.maps.LatLng(19.5300, -99.2200),
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
            zoom: 10,
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

        // Zona Norte > Polanco
        // Zona Norte
        var Marker = new google.maps.Marker({
          position: {lat: 19.6449249, lng: -99.194490},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.6058121, lng: -99.1895497},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.551745, lng: -99.208275},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.537401, lng: -99.216884},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.526326, lng: -99.225349},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5141411, lng: -99.2375744},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5026133, lng: -99.2370427},
          map: map,
          icon: image
        });

        // Polanco
        var Marker = new google.maps.Marker({
          position: {lat: 19.4398308, lng: -99.2008781},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.437806, lng: -99.190349},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.432371, lng: -99.182103},
          map: map,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.422768, lng: -99.172115},
          map: map,
          icon: image
        });


        // Santa Fe > Chapultepec
        // Santa fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.387198, lng: -99.253095},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.373289, lng: -99.259612},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.367439, lng: -99.2637558},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.357265, lng: -99.274824},
          map: map3,
          icon: image
        });

        // Polanco
        var Marker = new google.maps.Marker({
          position: {lat: 19.4398308, lng: -99.2008781},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.437806, lng: -99.190349},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.432371, lng: -99.182103},
          map: map3,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.422768, lng: -99.172115},
          map: map3,
          icon: image
        });



        // Zona Norte > Santa Fe Express
        // Zona Norte
        var Marker = new google.maps.Marker({
          position: {lat: 19.6449249, lng: -99.194490},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.6058121, lng: -99.1895497},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.551745, lng: -99.208275},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.537401, lng: -99.216884},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.526326, lng: -99.225349},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5141411, lng: -99.2375744},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.5026133, lng: -99.2370427},
          map: map4,
          icon: image
        });

        // Santa fe
        // Santa fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.387198, lng: -99.253095},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.373289, lng: -99.259612},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.367439, lng: -99.2637558},
          map: map4,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.357265, lng: -99.274824},
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

        var ford = [
          {lat: 19.652398, lng: -99.197132},
          {lat: 19.650094, lng: -99.202368},
          {lat: 19.646820, lng: -99.204342},
          {lat: 19.643344, lng: -99.204084},
          {lat: 19.637928, lng: -99.202926},
          {lat: 19.635341, lng: -99.200179},
          {lat: 19.634695, lng: -99.194815},
          {lat: 19.636352, lng: -99.190094},
          {lat: 19.639989, lng: -99.188249},
          {lat: 19.646416, lng: -99.188635},
          {lat: 19.649973, lng: -99.190180},
          {lat: 19.652155, lng: -99.193184}
        ];

        var perinorte = [
          {lat: 19.612908, lng: -99.191858},
          {lat: 19.609350, lng: -99.193403},
          {lat: 19.606520, lng: -99.193875},
          {lat: 19.603407, lng: -99.193403},
          {lat: 19.600982, lng: -99.190528},
          {lat: 19.600739, lng: -99.187352},
          {lat: 19.601709, lng: -99.183275},
          {lat: 19.606439, lng: -99.181043},
          {lat: 19.610644, lng: -99.181988},
          {lat: 19.612423, lng: -99.184477},
          {lat: 19.613231, lng: -99.188124}
        ];

        var polanco = [
          {lat: 19.444033, lng: -99.210193},
          {lat: 19.434523, lng: -99.206460},
          {lat: 19.4302, lng: -99.1955},
          {lat: 19.428047, lng: -99.183157},
          {lat: 19.4197, lng: -99.1773},
          {lat: 19.4158, lng: -99.1718},
          {lat: 19.4200, lng: -99.1667},
          {lat: 19.4274, lng: -99.1679},
          {lat: 19.4374, lng: -99.1732},
          {lat: 19.4437, lng: -99.1745},
          {lat: 19.4475, lng: -99.1786},
          {lat: 19.4460, lng: -99.1876},
          {lat: 19.4457, lng: -99.1974},
          {lat: 19.4490, lng: -99.2045}
        ];


        var santafe = [
          {lat: 19.3938, lng: -99.2534},
          {lat: 19.3902, lng: -99.2599},
          {lat: 19.3837, lng: -99.2656},
          {lat: 19.3740, lng: -99.2677},
          {lat: 19.3723, lng: -99.2743},
          {lat: 19.3684, lng: -99.2817},
          {lat: 19.3644, lng: -99.2846},
          {lat: 19.3610, lng: -99.2855},
          {lat: 19.3559, lng: -99.2835},
          {lat: 19.3538, lng: -99.2785},
          {lat: 19.3529, lng: -99.2717},
          {lat: 19.3565, lng: -99.2674},
          {lat: 19.370336, lng: -99.257261},
          {lat: 19.374223, lng: -99.252583},
          {lat: 19.3872, lng: -99.2497},
          {lat: 19.3907, lng: -99.2481},
          {lat: 19.3940, lng: -99.2478}
        ];


        // MAPA Zona Norte <-> Polanco
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

        new google.maps.Polygon({
          map: map,
          paths: ford,
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
          paths: perinorte,
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
          path: [{lat: 19.447779, lng: -99.205983}, {lat: 19.4879, lng: -99.2371}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
          map: map
        });

        var line = new google.maps.Polyline({
          path: [{lat: 19.634695, lng: -99.194815}, {lat: 19.613150, lng: -99.190528}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
          map: map
        });

        var line = new google.maps.Polyline({
          path: [{lat: 19.600941, lng: -99.188639}, {lat: 19.5578, lng: -99.2052}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
          map: map
        });


        // MAPA 3 Santa Fe <-> Polanco
        new google.maps.Polygon({
          map: map3,
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

        // Dot line 3
        var lineSymbol3 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        // Line Reforma - Santa fe
        var line = new google.maps.Polyline({
          path: [{lat: 19.4197, lng: -99.1773}, {lat: 19.3940, lng: -99.2478}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol3,
            offset: '0',
            repeat: '20px'
          }],
          map: map3
        });


        // MAPA 4 Zona Norte <-> Santa Fe Express
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
          paths: ford,
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
          paths: perinorte,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line 4 Zona Norte - Santa fé
        var lineSymbol4 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.3940, lng: -99.2478}, {lat: 19.4879, lng: -99.2371}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol4,
            offset: '0',
            repeat: '20px'
          }],
          map: map4
        });

        var line = new google.maps.Polyline({
          path: [{lat: 19.634695, lng: -99.194815}, {lat: 19.613150, lng: -99.190528}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
          map: map4
        });

        var line = new google.maps.Polyline({
          path: [{lat: 19.600941, lng: -99.188639}, {lat: 19.5578, lng: -99.2052}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
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

<script type="text/javascript">
  //Set your APP_ID
  var APP_ID = "aij161lx";
  // APP_ID prod aij161lx
  // APP_ID test k86qldbk

  window.intercomSettings = {
    app_id: APP_ID
  };

  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
</script>

<script>
  window.intercomSettings = {
    app_id: "aij161lx",
    name: <%= current_user.name %>, // Full name
    email: <%= current_user.email %>, // Email address
    created_at: <%= current_user.created_at.to_i %> // Signup date as a Unix timestamp
  };

  Intercom('update', {"name": "Usuario Web"});
</script>
