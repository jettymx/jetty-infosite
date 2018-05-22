
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

        var mapOptions5 = {
          zoom: 11,
          center: new google.maps.LatLng(19.4200, -99.1600),
          styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "offsetf"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptions6 = {
            zoom: 11,
            center: new google.maps.LatLng(19.3800, -99.2200),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

         var mapOptions7 = {
            zoom: 12,
            center: new google.maps.LatLng(19.4200, -99.1900),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptions8 = {
            zoom: 12,
            center: new google.maps.LatLng(19.4100, -99.2300),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptionsSVBus1 = {
            zoom: 11,
            center: new google.maps.LatLng(19.3300, -99.2000),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapOptionsSVBus2 = {
            zoom: 11,
            center: new google.maps.LatLng(19.3700, -99.1700),
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

        var mapElement = document.getElementById('map_canvas');
        var map = new google.maps.Map(mapElement, mapOptions);

        // var mapElement2 = document.getElementById('map_canvas_2');
        // var map2 = new google.maps.Map(mapElement2, mapOptions2);

        var mapElement3 = document.getElementById('map_canvas_3');
        var map3 = new google.maps.Map(mapElement3, mapOptions3);

        var mapElement4 = document.getElementById('map_canvas_4');
        var map4 = new google.maps.Map(mapElement4, mapOptions4);

        var mapElement5 = document.getElementById('map_canvas_5');
        var map5 = new google.maps.Map(mapElement5, mapOptions5);

        var mapElement6 = document.getElementById('map_canvas_6');
        var map6 = new google.maps.Map(mapElement6, mapOptions6);

        var mapElement7 = document.getElementById('map_canvas_7');
        var map7 = new google.maps.Map(mapElement7, mapOptions7);

        var mapElement8 = document.getElementById('map_canvas_8');
        var map8 = new google.maps.Map(mapElement8, mapOptions8);

        var mapElementSVBus1 = document.getElementById('map_canvas_SVBus1');
        var mapSVBus1 = new google.maps.Map(mapElementSVBus1, mapOptionsSVBus1);

        var mapElementSVBus2 = document.getElementById('map_canvas_SVBus2');
        var mapSVBus2 = new google.maps.Map(mapElementSVBus2, mapOptionsSVBus2);

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

        // Aragón - Santa Fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.468581, lng: -99.049511},
          map: map5,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.458216, lng: -99.069365},
          map: map5,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.388281, lng: -99.250929},
          map: map5,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.373289, lng: -99.259612},
          map: map5,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.3675155, lng: -99.2636825},
          map: map5,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.357265, lng: -99.274824},
          map: map5,
          icon: image
        });

        // Narvarte - Santa Fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.372277, lng: -99.157134},
          map: map6,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.389093, lng: -99.177963},
          map: map6,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.385228, lng: -99.186931},
          map: map6,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.3675155, lng: -99.2636825},
          map: map6,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.357265, lng: -99.274824},
          map: map6,
          icon: image
        });

        // Narvarte - Polanco
        var Marker = new google.maps.Marker({
          position: {lat: 19.372277, lng: -99.157134},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.389093, lng: -99.177963},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.40349, lng: -99.17858},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.420166, lng: -99.177038},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.432371, lng: -99.182103},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.43237, lng: -99.1821},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.43546, lng: -99.19027},
          map: map7,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.4398308, lng: -99.2008781},
          map: map7,
          icon: image
        });

        // Polanco Santa Fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.443522, lng: -99.183125},
          map: map8,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.434285, lng: -99.197447},
          map: map8,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.42996, lng: -99.21135},
          map: map8,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.387198, lng: -99.253095},
          map: map8,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.373289, lng: -99.259612},
          map: map8,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.3675155, lng: -99.2636825},
          map: map8,
          icon: image
        });

        var Marker = new google.maps.Marker({
          position: {lat: 19.357265, lng: -99.274824},
          map: map8,
          icon: image
        });

        // SVBus Acoxpa
        var Marker = new google.maps.Marker({
          position: {lat: 19.298683, lng: -99.138151},
          map: mapSVBus1,
          icon: image
        });

        // SVBus Santa Fe
        var Marker = new google.maps.Marker({
          position: {lat: 19.361202, lng: -99.261200},
          map: mapSVBus1,
          icon: image
        });

        // SVBus Auditorio
        var Marker = new google.maps.Marker({
          position: {lat: 19.425002, lng: -99.193348},
          map: mapSVBus2,
          icon: image
        });

        // SVBus Acoxpa
        var Marker = new google.maps.Marker({
          position: {lat: 19.298683, lng: -99.138151},
          map: mapSVBus2,
          icon: image
        });


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

        var polancoNEW = [
          {lat: 19.444033, lng: -99.210193},
          {lat: 19.434523, lng: -99.206460},
          {lat: 19.4302, lng: -99.1955},
          {lat: 19.428047, lng: -99.183157},
          {lat: 19.415919, lng: -99.180612},
          {lat: 19.4158, lng: -99.1718},
          {lat: 19.4200, lng: -99.1667},
          {lat: 19.4274, lng: -99.1679},
          {lat: 19.4374, lng: -99.1732},
          {lat: 19.443217, lng: -99.178595},
          {lat: 19.445721, lng: -99.182986},
          {lat: 19.4460, lng: -99.1876},
          {lat: 19.4457, lng: -99.1974},
          {lat: 19.4490, lng: -99.2045}
        ];

        var polancoTRES = [
          {lat: 19.448968, lng: -99.181592},
          {lat: 19.446418, lng: -99.188544},
          {lat: 19.441117, lng: -99.191720},
          {lat: 19.436706, lng: -99.200947},
          {lat: 19.433468, lng: -99.209315},
          {lat: 19.430352, lng: -99.216096},
          {lat: 19.426993, lng: -99.215280},
          {lat: 19.428369, lng: -99.204165},
          {lat: 19.430716, lng: -99.196913},
          {lat: 19.436463, lng: -99.181592},
          {lat: 19.443707, lng: -99.177687}
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

        var santafeSMALL = [
          {lat: 19.377748, lng: -99.259405},
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
          {lat: 19.375855, lng: -99.255135}
        ];

        var aragon = [
          {lat: 19.474689, lng: -99.052102},
          {lat: 19.469834, lng: -99.057939},
          {lat: 19.464493, lng: -99.063518},
          {lat: 19.459637, lng: -99.073217},
          {lat: 19.452839, lng: -99.076564},
          {lat: 19.451382, lng: -99.067552},
          {lat: 19.457695, lng: -99.061200},
          {lat: 19.461255, lng: -99.048240},
          {lat: 19.468782, lng: -99.040773},
          {lat: 19.474770, lng: -99.045579}
        ];

        var narvarte = [
          {lat: 19.377859, lng: -99.158918},
          {lat: 19.373325, lng: -99.161880},
          {lat: 19.368426, lng: -99.160120},
          {lat: 19.366685, lng: -99.155786},
          {lat: 19.369033, lng: -99.151752},
          {lat: 19.374175, lng: -99.151880},
          {lat: 19.377738, lng: -99.156172},
        ];

        var napoles = [
          {lat: 19.393465, lng: -99.177651},
          {lat: 19.390996, lng: -99.181041},
          {lat: 19.388304, lng: -99.184174},
          {lat: 19.385697, lng: -99.188907},
          {lat: 19.383106, lng: -99.189336},
          {lat: 19.382230, lng: -99.186084},
          {lat: 19.384740, lng: -99.180483},
          {lat: 19.387473, lng: -99.177329},
          {lat: 19.389861, lng: -99.174668},
          {lat: 19.392674, lng: -99.174346}
        ];

        var roma = [
          {lat: 19.410257, lng: -99.175283},
          {lat: 19.408739, lng: -99.179789},
          {lat: 19.405764, lng: -99.184253},
          {lat: 19.396089, lng: -99.186012},
          {lat: 19.386738, lng: -99.182922},
          {lat: 19.385322, lng: -99.175712},
          {lat: 19.390685, lng: -99.173695},
          {lat: 19.398458, lng: -99.175927},
          {lat: 19.403700, lng: -99.174854},
          {lat: 19.403700, lng: -99.174854}
        ];

        //SVBus
        var acoxpa = [
          {lat: 19.305113, lng: -99.137336},
          {lat: 19.303067, lng: -99.143451},
          {lat: 19.297388, lng: -99.144319},
          {lat: 19.293945, lng: -99.138804},
          {lat: 19.295605, lng: -99.132281},
          {lat: 19.300729, lng: -99.133032}
        ];

        var santafeSVBus = [
          {lat: 19.368905, lng: -99.261179},
          {lat: 19.365119, lng: -99.266243},
          {lat: 19.359896, lng: -99.265921},
          {lat: 19.356374, lng: -99.260277},
          {lat: 19.360220, lng: -99.254269},
          {lat: 19.366233, lng: -99.256050}
        ];

        var auditorio = [
          {lat: 19.432621, lng: -99.192833},
          {lat: 19.430577, lng: -99.199893},
          {lat: 19.425255, lng: -99.200343},
          {lat: 19.421167, lng: -99.195687},
          {lat: 19.421430, lng: -99.188627},
          {lat: 19.425012, lng: -99.185967},
          {lat: 19.430537, lng: -99.187855}
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

        // Mapa 5
        new google.maps.Polygon({
          map: map5,
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
          map: map5,
          paths: aragon,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line 5 Aragon - Santa fé
        var lineSymbol5 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.452839, lng: -99.076564}, {lat: 19.3940, lng: -99.2478}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol5,
            offset: '0',
            repeat: '20px'
          }],
          map: map5
        });


        // Mapa 6
        new google.maps.Polygon({
          map: map6,
          paths: santafeSMALL,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map6,
          paths: narvarte,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map6,
          paths: napoles,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line 6 Narvarte - Santa fé
        var lineSymbol6 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.377859, lng: -99.158918}, {lat: 19.392674, lng: -99.174346}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol6,
            offset: '0',
            repeat: '20px'
          }],
          map: map6
        });

        var line = new google.maps.Polyline({
          path: [{lat: 19.383106, lng: -99.189336}, {lat: 19.375855, lng: -99.255135}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol6,
            offset: '0',
            repeat: '20px'
          }],
          map: map6
        });


        // Mapa 7
        new google.maps.Polygon({
          map: map7,
          paths: narvarte,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map7,
          paths: polancoNEW,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: map7,
          paths: roma,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line 7 Narvarte - Polanco
        var lineSymbol7 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.4158, lng: -99.1718}, {lat: 19.410257, lng: -99.175283}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol7,
            offset: '0',
            repeat: '20px'
          }],
          map: map7
        });

        var line = new google.maps.Polyline({
          path: [{lat: 19.385322, lng: -99.175712}, {lat: 19.377859, lng: -99.158918}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol7,
            offset: '0',
            repeat: '20px'
          }],
          map: map7
        });

        // Mapa 8
        new google.maps.Polygon({
          map: map8,
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
          map: map8,
          paths: polancoTRES,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line 7 Polanco - Santa Fe
        var lineSymbol8 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.426993, lng: -99.215280}, {lat: 19.3940, lng: -99.2478}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol8,
            offset: '0',
            repeat: '20px'
          }],
          map: map8
        });

        // Mapa SVBus1 Acoxpa - Santa Fe
        new google.maps.Polygon({
          map: mapSVBus1,
          paths: acoxpa,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: mapSVBus1,
          paths: santafeSVBus,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line SVBus1 Acoxpa - Santa Fe
        var lineSymbolSVBus1 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.303067, lng: -99.143451}, {lat: 19.356374, lng: -99.260277}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbolSVBus1,
            offset: '0',
            repeat: '20px'
          }],
          map: mapSVBus1
        });

        // Mapa SVBus2 Auditorio - Santa Fe
        new google.maps.Polygon({
          map: mapSVBus2,
          paths: acoxpa,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        new google.maps.Polygon({
          map: mapSVBus2,
          paths: auditorio,
          strokeColor: '#49bda7',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#49bda7',
          fillOpacity: 0.5,
          draggable: false,
          geodesic: true
        });

        // Line SVBus1 Acoxpa - Santa Fe
        var lineSymbolSVBus2 = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 0.5,
          scale: 4
        };

        var line = new google.maps.Polyline({
          path: [{lat: 19.421167, lng: -99.195687}, {lat: 19.303067, lng: -99.143451}],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbolSVBus2,
            offset: '0',
            repeat: '20px'
          }],
          map: mapSVBus2
        });

    }

    $("#collapseOne").on("shown.bs.collapse", function(){
      initMap()
    });

    $("#collapseTwo").on("shown.bs.collapse", function(){
      initMap()
    });
</script>


<!-- SGMNT -->
<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("ConqY6qh0tPXUytdyE6Tl69McgJ55J2U");
  analytics.page();
  }}();
</script>


<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js"></script>
<script type="text/javascript" src="js/forms.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/locale/es.js"></script>
<script type="text/javascript" src="/js/bootstrap-datetimepicker.min.js"></script>

<script type="text/javascript">

  //Wrapper for scrollTo.js
  function scroll(id, time) {
    $.scrollTo(id, time)
  }

  $(function () {



    $('#datetimepicker-event-1').datetimepicker({
      locale: 'es',
      format: 'DD/MM/YYYY',
      minDate: new Date(),
      disabledDates: [new Date()]
    });


    $('#timepicker-event-1').datetimepicker({
      locale: 'es',
      format: 'LT'
    });


    $('#datetimepicker-event-2').datetimepicker({
      locale: 'es',
      format: 'DD/MM/YYYY',
      minDate: new Date(),
      disabledDates: [new Date()]
    });

    $('#timepicker-event-2').datetimepicker({
      locale: 'es',
      format: 'LT'
    });

    $('#datetimepicker-org-1').datetimepicker({
      locale: 'es',
      minDate: new Date(),
      sideBySide: true
    })
  });
</script>

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
