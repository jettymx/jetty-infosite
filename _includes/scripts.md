
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

              var NortePolanco = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.4900, -99.2200),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var CuautiReformaXpress = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.5400, -99.2200),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var CuautiSantafeXpress = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.5000, -99.2200),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var ReformaSantaFe = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.4000, -99.2250),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var NorteSantaFe = {
                  zoom: 10,
                  center: new google.maps.LatLng(19.5100, -99.2500),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var AragonSantaFe = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.4200, -99.1600),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var NarvarteSantaFe = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.3800, -99.2200),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var PolancoSantaFe = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.4100, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var ChabacanoSantaFe = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.3900, -99.2050),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var AtizapanSantaFe = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.4700, -99.2800),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var AzcapoSantaFe = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.4250, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var CoacalcoPolancoReforma = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.5300, -99.1700),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              // var AguilasSantafe = {
              //     zoom: 13,
              //     center: new google.maps.LatLng(19.3600, -99.2600),
              //     styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c1c9cd"}, {"visibility": "on"} ] } ] };

              var TacubayaSantafe = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3800, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var MixcoacSantafe = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3800, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var JuanacatlanSantafe = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3800, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var CibelesSantafe = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3800, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus1 = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.3300, -99.2000),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus2 = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.3700, -99.1700),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus3 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.4200, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus4 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3200, -99.2100),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus5 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3200, -99.2100),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus6 = {
                  zoom: 11,
                  center: new google.maps.LatLng(19.3500, -99.1800),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus7 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.4000, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus8 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3200, -99.2200),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus9 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3300, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var mapOptionsSVBus10 = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3350, -99.2100),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};

              var RutasViverosSanta = {
                  zoom: 12,
                  center: new google.maps.LatLng(19.3500, -99.2300),
                  styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": "-100"}]}]};


              var mapElement = document.getElementById('map_canvas');
              var mapNortePolanco = new google.maps.Map(mapElement, NortePolanco);

              var mapElement2 = document.getElementById('map_canvas_2');
              var mapCuautiReformaXpress = new google.maps.Map(mapElement2, CuautiReformaXpress);

              var mapElement3 = document.getElementById('map_canvas_3');
              var mapReformaSantaFe = new google.maps.Map(mapElement3, ReformaSantaFe);

              var mapElement4 = document.getElementById('map_canvas_4');
              var mapNorteSantaFe = new google.maps.Map(mapElement4, NorteSantaFe);

              var mapElement5 = document.getElementById('map_canvas_5');
              var mapAragonSantaFe = new google.maps.Map(mapElement5, AragonSantaFe);

              var mapElement6 = document.getElementById('map_canvas_6');
              var mapNarvarteSantaFe = new google.maps.Map(mapElement6, NarvarteSantaFe);

              var mapElement7 = document.getElementById('map_canvas_7');
              var mapCuautiSantafeXpress = new google.maps.Map(mapElement7, CuautiSantafeXpress);

              var mapElement8 = document.getElementById('map_canvas_8');
              var mapPolancoSantaFe = new google.maps.Map(mapElement8, PolancoSantaFe);

              var mapElement9 = document.getElementById('map_canvas_9');
              var mapChabacanoSantaFe = new google.maps.Map(mapElement9, ChabacanoSantaFe);

              var mapElement10 = document.getElementById('map_canvas_10');
              var mapAtizapanSantaFe = new google.maps.Map(mapElement10, AtizapanSantaFe);

              var mapElement11 = document.getElementById('map_canvas_11');
              var mapAzcapoSantaFe = new google.maps.Map(mapElement11, AzcapoSantaFe);

              var mapElement12 = document.getElementById('map_canvas_12');
              var mapCoacalcoPolancoReforma = new google.maps.Map(mapElement12, CoacalcoPolancoReforma);

              var mapElement14 = document.getElementById('map_canvas_14');
              var mapTacubayaSantafe = new google.maps.Map(mapElement14, TacubayaSantafe);

              var mapElement15 = document.getElementById('map_canvas_15');
              var mapMixcoacSantafe = new google.maps.Map(mapElement15, MixcoacSantafe);

              var mapElement16 = document.getElementById('map_canvas_16');
              var mapJuanacatlanSantafe = new google.maps.Map(mapElement16, JuanacatlanSantafe);;

              var mapElementSVBus1 = document.getElementById('map_canvas_SVBus1');
              var mapSVBus1 = new google.maps.Map(mapElementSVBus1, mapOptionsSVBus1);

              var mapElementSVBus2 = document.getElementById('map_canvas_SVBus2');
              var mapSVBus2 = new google.maps.Map(mapElementSVBus2, mapOptionsSVBus2);

              var mapElementSVBus3 = document.getElementById('map_canvas_SVBus3');
              var mapSVBus3 = new google.maps.Map(mapElementSVBus3, mapOptionsSVBus3);

              var mapElementSVBus4 = document.getElementById('map_canvas_SVBus4');
              var mapSVBus4 = new google.maps.Map(mapElementSVBus4, mapOptionsSVBus4);

              var mapElementSVBus5 = document.getElementById('map_canvas_SVBus5');
              var mapSVBus5 = new google.maps.Map(mapElementSVBus5, mapOptionsSVBus5);

              var mapElementSVBus6 = document.getElementById('map_canvas_SVBus6');
              var mapSVBus6 = new google.maps.Map(mapElementSVBus6, mapOptionsSVBus6);

              var mapElementSVBus7 = document.getElementById('map_canvas_SVBus7');
              var mapSVBus7 = new google.maps.Map(mapElementSVBus7, mapOptionsSVBus7);

              var mapElementSVBus8 = document.getElementById('map_canvas_SVBus8');
              var mapSVBus8 = new google.maps.Map(mapElementSVBus8, mapOptionsSVBus8);

              var mapElementSVBus9 = document.getElementById('map_canvas_SVBus9');
              var mapSVBus9 = new google.maps.Map(mapElementSVBus9, mapOptionsSVBus9);

              var mapElementSVBus10 = document.getElementById('map_canvas_SVBus10');
              var mapSVBus10 = new google.maps.Map(mapElementSVBus10, mapOptionsSVBus10);

              var mapElementRutasUnidas1 = document.getElementById('map_canvas_Rutas1');
              var mapRutasUnidas1 = new google.maps.Map(mapElementRutasUnidas1, RutasViverosSanta);

              var mapElementTaxiElectrico1 = document.getElementById('map_canvas_TaxiElectrico1');
              var mapCibelesSantafe = new google.maps.Map(mapElementTaxiElectrico1, CibelesSantafe);

              // Marker points
              var image = {
                url: 'https://www.jetty.mx/img/icon-ascenso.png',
                scaledSize: new google.maps.Size(20, 23) // scaled size
              };

              var destiny = {
                url: 'https://www.jetty.mx/img/icon-descenso.png',
                scaledSize: new google.maps.Size(20, 23) // scaled size
              };

              // Mapa 1 Norte > Polanco
              var Marker = new google.maps.Marker({
                position: {lat: 19.551745, lng: -99.208275},
                map: mapNortePolanco,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.537401, lng: -99.216884},
                map: mapNortePolanco,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.526326, lng: -99.225349},
                map: mapNortePolanco,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.5141411, lng: -99.2375744},
                map: mapNortePolanco,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.5026133, lng: -99.2370427},
                map: mapNortePolanco,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4398308, lng: -99.2008781},
                map: mapNortePolanco,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.437806, lng: -99.190349},
                map: mapNortePolanco,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.432371, lng: -99.182103},
                map: mapNortePolanco,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.422768, lng: -99.172115},
                map: mapNortePolanco,
                icon: destiny
              });


              // Mapa 2 Cuautitlan > Reforma Xpress
              var Marker = new google.maps.Marker({
                position: {lat: 19.6449249, lng: -99.194490},
                map: mapCuautiReformaXpress,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.6058121, lng: -99.1895497},
                map: mapCuautiReformaXpress,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4398308, lng: -99.2008781},
                map: mapCuautiReformaXpress,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.437806, lng: -99.190349},
                map: mapCuautiReformaXpress,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.432371, lng: -99.182103},
                map: mapCuautiReformaXpress,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.422768, lng: -99.172115},
                map: mapCuautiReformaXpress,
                icon: destiny
              });

              // Mapa 7 Cuautitlan > Santa Fe Xpress
              var Marker = new google.maps.Marker({
                position: {lat: 19.6449249, lng: -99.194490},
                map: mapCuautiSantafeXpress,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.6058121, lng: -99.1895497},
                map: mapCuautiSantafeXpress,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.387198, lng: -99.253095},
                map: mapCuautiSantafeXpress,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.373289, lng: -99.259612},
                map: mapCuautiSantafeXpress,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.367439, lng: -99.2637558},
                map: mapCuautiSantafeXpress,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265, lng: -99.274824},
                map: mapCuautiSantafeXpress,
                icon: destiny
              });

              // Mapa 3 Reforma Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.387198, lng: -99.253095},
                map: mapReformaSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.373289, lng: -99.259612},
                map: mapReformaSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.367439, lng: -99.2637558},
                map: mapReformaSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265, lng: -99.274824},
                map: mapReformaSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4398308, lng: -99.2008781},
                map: mapReformaSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.437806, lng: -99.190349},
                map: mapReformaSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.432371, lng: -99.182103},
                map: mapReformaSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.422768, lng: -99.172115},
                map: mapReformaSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.42920796, lng: -99.16189231},
                map: mapReformaSantaFe,
                icon: image
              });


              // Mapa 3 Norte > Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.6449249, lng: -99.194490},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.6058121, lng: -99.1895497},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.551745, lng: -99.208275},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.537401, lng: -99.216884},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.526326, lng: -99.225349},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.5141411, lng: -99.2375744},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.5026133, lng: -99.2370427},
                map: mapNorteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.387198, lng: -99.253095},
                map: mapNorteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.373289, lng: -99.259612},
                map: mapNorteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.367439, lng: -99.2637558},
                map: mapNorteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265, lng: -99.274824},
                map: mapNorteSantaFe,
                icon: destiny
              });


              // Mapa 4 Aragón - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.46858, lng: -99.049511},
                map: mapAragonSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.45819, lng: -99.069337},
                map: mapAragonSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4514, lng: -99.0789173},
                map: mapAragonSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3872, lng: -99.253095},
                map: mapAragonSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.37329, lng: -99.259612},
                map: mapAragonSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.36783, lng: -99.2637924},
                map: mapAragonSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35755, lng: -99.277629},
                map: mapAragonSantaFe,
                icon: destiny
              });


              // Mapa 5 Parque de los venados/Del Valle - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.372277, lng: -99.157134},
                map: mapNarvarteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3803211, lng: -99.1659588},
                map: mapNarvarteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.385919, lng: -99.176877},
                map: mapNarvarteSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.365662, lng: -99.259239},
                map: mapNarvarteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3678265, lng: -99.2637924},
                map: mapNarvarteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265, lng: -99.274824},
                map: mapNarvarteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35749292, lng: -99.27764941},
                map: mapNarvarteSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35748561, lng: -99.27381145},
                map: mapNarvarteSantaFe,
                icon: destiny
              });

              // Mapa 6 Polanco Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.434904, lng: -99.189715},
                map: mapPolancoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.434285, lng: -99.197447},
                map: mapPolancoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.42996, lng: -99.21135},
                map: mapPolancoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4075304, lng: -99.2407992},
                map: mapPolancoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.387198, lng: -99.253095},
                map: mapPolancoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.373289, lng: -99.259612},
                map: mapPolancoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3678265, lng: -99.2637924},
                map: mapPolancoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3653525, lng: -99.2673518},
                map: mapPolancoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265, lng: -99.274824},
                map: mapPolancoSantaFe,
                icon: destiny
              });


              // Mapa 7 M. Chabacano Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.408694, lng: -99.133556},
                map: mapChabacanoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.406626, lng: -99.155575},
                map: mapChabacanoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.405931, lng: -99.169361},
                map: mapChabacanoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.405995, lng: -99.177985},
                map: mapChabacanoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3678265, lng: -99.2637924},
                map: mapChabacanoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3653525, lng: -99.2673518},
                map: mapChabacanoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3574929, lng: -99.2776494},
                map: mapChabacanoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265, lng: -99.274824},
                map: mapChabacanoSantaFe,
                icon: destiny
              });

              // Mapa 8 Atizapan Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.555202, lng: -99.244014},
                map: mapAtizapanSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.552101, lng: -99.271061},
                map: mapAtizapanSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.387198, lng: -99.253095},
                map: mapAtizapanSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3678265, lng: -99.2637924},
                map: mapAtizapanSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3653525, lng: -99.2673518},
                map: mapAtizapanSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35749292, lng: -99.27764941},
                map: mapAtizapanSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35741982, lng: -99.27386394},
                map: mapAtizapanSantaFe,
                icon: destiny
              });

              // Mapa 9 Azcapotzalco Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.482572000000000, lng: -99.174392999999900},
                map: mapAzcapoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.468073000000000, lng: -99.176563000000000},
                map: mapAzcapoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.456292000000000, lng: -99.180745999999900},
                map: mapAzcapoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.443522000000000, lng: -99.183125000000000},
                map: mapAzcapoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.434284999999900, lng: -99.197446999999900},
                map: mapAzcapoSantaFe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.387198000000000, lng: -99.253095000000000},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.373289000000000, lng: -99.259612000000000},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.367826500000000, lng: -99.263792400000000},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.365352500000000, lng: -99.267351800000000},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.362805099999900, lng: -99.265796899999900},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357265000000000, lng: -99.274823999999900},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357554000000000, lng: -99.277629000000000},
                map: mapAzcapoSantaFe,
                icon: destiny
              });

              // Mapa 12 Coacalco/Polanco - Reforma
              var Marker = new google.maps.Marker({
                position: {lat: 19.6310751, lng: -99.1246583},
                map: mapCoacalcoPolancoReforma,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.55128648, lng: -99.20787063},
                map: mapCoacalcoPolancoReforma,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.526326, lng: -99.225349},
                map: mapCoacalcoPolancoReforma,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.513591, lng: -99.236829},
                map: mapCoacalcoPolancoReforma,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4398308, lng: -99.2008781},
                map: mapCoacalcoPolancoReforma,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.4377816, lng: -99.1903213},
                map: mapCoacalcoPolancoReforma,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.432371, lng: -99.182103},
                map: mapCoacalcoPolancoReforma,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.428951, lng: -99.164615},
                map: mapCoacalcoPolancoReforma,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.422768, lng: -99.172115},
                map: mapCoacalcoPolancoReforma,
                icon: destiny
              });


              // Mapa 14 Tacubaya - SantaFe
              var Marker = new google.maps.Marker({
                position: {lat: 19.402404, lng: -99.189056},
                map: mapTacubayaSantafe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3765502, lng: -99.25444751},
                map: mapTacubayaSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3678265, lng: -99.2637924},
                map: mapTacubayaSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.36530197, lng: -99.26742812},
                map: mapTacubayaSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35748561, lng: -99.27381145},
                map: mapTacubayaSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.365662, lng: -99.259239},
                map: mapTacubayaSantafe,
                icon: destiny
              });

              // Mapa 15 Mixcoac - SantaFe
              var Marker = new google.maps.Marker({
                position: {lat: 19.37504886, lng: -99.18689793},
                map: mapMixcoacSantafe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.365662, lng: -99.259239},
                map: mapMixcoacSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.36652044, lng: -99.2636891},
                map: mapMixcoacSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.36530197, lng: -99.26742812},
                map: mapMixcoacSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35749292, lng: -99.27764941},
                map: mapMixcoacSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35748561, lng: -99.27381145},
                map: mapMixcoacSantafe,
                icon: destiny
              });

              // Mapa 16 Juanacatlan - SantaFe
              var Marker = new google.maps.Marker({
                position: {lat: 19.412303, lng: -99.182379},
                map: mapJuanacatlanSantafe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.379889, lng: -99.248893},
                map: mapJuanacatlanSantafe,
                icon: destiny
              });



              // Mapa Taxi Electrico 1 Cibeles - SantaFe
              var Marker = new google.maps.Marker({
                position: {lat: 19.419539, lng: -99.166215},
                map: mapCibelesSantafe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.422264, lng: -99.171778},
                map: mapCibelesSantafe,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357492, lng: -99.277649},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.365662, lng: -99.259239},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.373289, lng: -99.259612},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.376714, lng: -99.254265},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.364160, lng: -99.270787},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.366406, lng: -99.263557},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357419, lng: -99.273788},
                map: mapCibelesSantafe,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.367731, lng: -99.260733},
                map: mapCibelesSantafe,
                icon: destiny
              });



              // SVBus1 Acoxpa - SantaFe
              var Marker = new google.maps.Marker({
                position: {lat: 19.2991912, lng: -99.1380766},
                map: mapSVBus1,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapSVBus1,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3580063, lng: -99.2769693},
                map: mapSVBus1,
                icon: destiny
              });


              // SVBus2 Acoxpa - Auditorio
              var Marker = new google.maps.Marker({
                position: {lat: 19.2991912, lng: -99.1380766},
                map: mapSVBus2,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.425265, lng: -99.193348},
                map: mapSVBus2,
                icon: destiny
              });


              // SVBus3 Toreo - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.456510, lng: -99.214495},
                map: mapSVBus3,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.379889, lng: -99.248893},
                map: mapSVBus3,
                icon: destiny
              });


              // SVBus4 Cotsco Coapa - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.284413, lng: -99.137613},
                map: mapSVBus4,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapSVBus4,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3580063, lng: -99.276414},
                map: mapSVBus4,
                icon: destiny
              });


              // SVBus5 Cotsco Coapa - Centro Comercial Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.284413, lng: -99.137613},
                map: mapSVBus5,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapSVBus5,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.364139, lng: -99.270859},
                map: mapSVBus5,
                icon: destiny
              });


              // SVBus6 Cotsco Coapa - Auditorio
              var Marker = new google.maps.Marker({
                position: {lat: 19.425265, lng: -99.193348},
                map: mapSVBus6,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.284413, lng: -99.137613},
                map: mapSVBus6,
                icon: image
              });


              // SVBus7 Auditorio - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.425265, lng: -99.193348},
                map: mapSVBus7,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapSVBus7,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3580063, lng: -99.276414},
                map: mapSVBus7,
                icon: destiny
              });

              // SVBus8 La Joya - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.280023, lng: -99.169638},
                map: mapSVBus8,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapSVBus8,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.360060, lng: -99.270017},
                map: mapSVBus8,
                icon: destiny
              });

              // SVBus9 Pedregal - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.306550, lng: -99.204709},
                map: mapSVBus9,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.303500, lng: -99.193251},
                map: mapSVBus9,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapSVBus9,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.360060, lng: -99.270017},
                map: mapSVBus9,
                icon: destiny
              });

              // SVBus10 Huipulco - Santa Fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.300575, lng: -99.147373},
                map: mapSVBus10,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.284435, lng: -99.137572},
                map: mapSVBus10,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.357905, lng: -99.276368},
                map: mapSVBus10,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.361343, lng: -99.261317},
                map: mapSVBus10,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368102, lng: -99.260246},
                map: mapSVBus10,
                icon: destiny
              });


              // RutasUnidas Viveros - Santa fe
              var Marker = new google.maps.Marker({
                position: {lat: 19.353294, lng: -99.176412},
                map: mapRutasUnidas1,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.3441511, lng: -99.18130439},
                map: mapRutasUnidas1,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.328829, lng: -99.21192},
                map: mapRutasUnidas1,
                icon: image
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.368098, lng: -99.26025},
                map: mapRutasUnidas1,
                icon: destiny
              });

              var Marker = new google.maps.Marker({
                position: {lat: 19.35790509, lng: -99.27636846},
                map: mapRutasUnidas1,
                icon: destiny
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

              var polancoReforma = [
                {lat: 19.444033, lng: -99.210193},
                {lat: 19.434523, lng: -99.206460},
                {lat: 19.4302, lng: -99.1955},
                {lat: 19.428047, lng: -99.183157},
                {lat: 19.4197, lng: -99.1773},
                {lat: 19.4158, lng: -99.1718},
                {lat: 19.4200, lng: -99.1667},
                {lat: 19.426752, lng: -99.157488},
                {lat: 19.431325, lng: -99.157229},
                {lat: 19.435130, lng: -99.165469},
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
                {lat: 19.438346, lng: -99.184782},
                {lat: 19.438752, lng: -99.191048},
                {lat: 19.438510, lng: -99.205467},
                {lat: 19.434544, lng: -99.212763},
                {lat: 19.431427, lng: -99.214651},
                {lat: 19.427704, lng: -99.212591},
                {lat: 19.427664, lng: -99.206669},
                {lat: 19.433409, lng: -99.186327},
                {lat: 19.434542, lng: -99.183151}
              ];

              var bosques = [
                {lat: 19.413235, lng: -99.242546},
                {lat: 19.410320, lng: -99.246923},
                {lat: 19.407042, lng: -99.247567},
                {lat: 19.402913, lng: -99.246065},
                {lat: 19.401334, lng: -99.241516},
                {lat: 19.402144, lng: -99.236710},
                {lat: 19.405503, lng: -99.233190},
                {lat: 19.410968, lng: -99.233962},
                {lat: 19.414570, lng: -99.238898}
              ];

              var reformaXpress = [
                {lat: 19.433001, lng: -99.171009},
                {lat: 19.427901, lng: -99.178391},
                {lat: 19.422639, lng: -99.178305},
                {lat: 19.418673, lng: -99.172340},
                {lat: 19.419806, lng: -99.165516},
                {lat: 19.426767, lng: -99.158563},
                {lat: 19.431624, lng: -99.159765},
                {lat: 19.433244, lng: -99.166117}
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

              var santafeReforma = [
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
                {lat: 19.365181, lng: -99.255244},
                {lat: 19.375855, lng: -99.255135}
              ];

              var santafeAragon = [
                {lat: 19.394091, lng: -99.247960},
                {lat: 19.392978, lng: -99.252677},
                {lat: 19.387068, lng: -99.260404},
                {lat: 19.380509, lng: -99.266327},
                {lat: 19.374194, lng: -99.271220},
                {lat: 19.365530, lng: -99.276456},
                {lat: 19.360660, lng: -99.281048},
                {lat: 19.354263, lng: -99.284224},
                {lat: 19.352643, lng: -99.276757},
                {lat: 19.357028, lng: -99.265900},
                {lat: 19.366258, lng: -99.256372},
                {lat: 19.371723, lng: -99.250896},
                {lat: 19.376985, lng: -99.245144},
                {lat: 19.382106, lng: -99.243010},
                {lat: 19.386085, lng: -99.241367},
                {lat: 19.392421, lng: -99.244243}
              ];

              var pradosAragon = [
                {lat: 19.476714, lng: -99.052051},
                {lat: 19.474732, lng: -99.056043},
                {lat: 19.470241, lng: -99.058918},
                {lat: 19.464738, lng: -99.056515},
                {lat: 19.463038, lng: -99.052610},
                {lat: 19.462593, lng: -99.047632},
                {lat: 19.465223, lng: -99.043125},
                {lat: 19.469309, lng: -99.041280},
                {lat: 19.474407, lng: -99.042395},
                {lat: 19.477119, lng: -99.045613},
              ];

              var aragon = [
                {lat: 19.462391, lng: -99.067028},
                {lat: 19.460853, lng: -99.071406},
                {lat: 19.454824, lng: -99.079217},
                {lat: 19.451992, lng: -99.083122},
                {lat: 19.449240, lng: -99.084024},
                {lat: 19.447460, lng: -99.081277},
                {lat: 19.448633, lng: -99.075655},
                {lat: 19.452275, lng: -99.070033},
                {lat: 19.457008, lng: -99.062866},
                {lat: 19.460569, lng: -99.063981}
              ];

              var delvalle = [
                {lat: 19.367316, lng: -99.156132},
                {lat: 19.369542, lng: -99.152484},
                {lat: 19.374157, lng: -99.152655},
                {lat: 19.379502, lng: -99.158191},
                {lat: 19.384603, lng: -99.163341},
                {lat: 19.388490, lng: -99.168534},
                {lat: 19.390554, lng: -99.175315},
                {lat: 19.388773, lng: -99.179650},
                {lat: 19.386141, lng: -99.181495},
                {lat: 19.383267, lng: -99.178748},
                {lat: 19.382376, lng: -99.174628},
                {lat: 19.379745, lng: -99.169950},
                {lat: 19.376992, lng: -99.166431},
                {lat: 19.372943, lng: -99.162183},
                {lat: 19.368733, lng: -99.158921}
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

              var chabacano = [
                {lat: 19.413441, lng: -99.132892},
                {lat: 19.412389, lng: -99.136626},
                {lat: 19.410952, lng: -99.138857},
                {lat: 19.408726, lng: -99.139544},
                {lat: 19.405042, lng: -99.139051},
                {lat: 19.402937, lng: -99.134952},
                {lat: 19.402775, lng: -99.131905},
                {lat: 19.405386, lng: -99.129266},
                {lat: 19.408462, lng: -99.128794},
                {lat: 19.410871, lng: -99.129180},
                {lat: 19.412652, lng: -99.130875}
              ];

              var romaChabacano = [
                {lat: 19.407144, lng: -99.149801},
                {lat: 19.409330, lng: -99.154179},
                {lat: 19.408804, lng: -99.161946},
                {lat: 19.408561, lng: -99.168040},
                {lat: 19.409606, lng: -99.179176},
                {lat: 19.407663, lng: -99.182009},
                {lat: 19.406416, lng: -99.180743},
                {lat: 19.404149, lng: -99.179413},
                {lat: 19.403056, lng: -99.173147},
                {lat: 19.403421, lng: -99.164950},
                {lat: 19.403582, lng: -99.158384},
                {lat: 19.404392, lng: -99.151303}
              ];

              var santafeChabacano = [
                {lat: 19.371675, lng: -99.260839},
                {lat: 19.370057, lng: -99.267325},
                {lat: 19.366494, lng: -99.271145},
                {lat: 19.363215, lng: -99.278097},
                {lat: 19.357708, lng: -99.280457},
                {lat: 19.356026, lng: -99.278027},
                {lat: 19.355642, lng: -99.275130},
                {lat: 19.356371, lng: -99.272384},
                {lat: 19.358476, lng: -99.267920},
                {lat: 19.362039, lng: -99.263629},
                {lat: 19.365723, lng: -99.261226},
                {lat: 19.368234, lng: -99.259337}
              ];

              // Mapa Aztizapan Santa Fe
              var atizapanWalmart = [
                {lat: 19.560924, lng: -99.244368},
                {lat: 19.558296, lng: -99.247801},
                {lat: 19.554818, lng: -99.248703},
                {lat: 19.551704, lng: -99.246857},
                {lat: 19.550774, lng: -99.242137},
                {lat: 19.552876, lng: -99.238103},
                {lat: 19.556071, lng: -99.238059},
                {lat: 19.559589, lng: -99.238875}
              ];

              var atizapan = [
                {lat: 19.559241, lng: -99.272905},
                {lat: 19.556395, lng: -99.277540},
                {lat: 19.550369, lng: -99.279686},
                {lat: 19.544061, lng: -99.276167},
                {lat: 19.542564, lng: -99.271188},
                {lat: 19.544344, lng: -99.265910},
                {lat: 19.548914, lng: -99.262133},
                {lat: 19.553928, lng: -99.262906},
                {lat: 19.558943, lng: -99.266554}
              ];

              var Azcapotzalco = [
                {lat: 19.490921, lng: -99.173286},
                {lat: 19.487361, lng: -99.178608},
                {lat: 19.478744, lng: -99.181698},
                {lat: 19.468892, lng: -99.182469},
                {lat: 19.459342, lng: -99.185131},
                {lat: 19.449712, lng: -99.187192},
                {lat: 19.441295, lng: -99.190024},
                {lat: 19.436682, lng: -99.201525},
                {lat: 19.432068, lng: -99.201095},
                {lat: 19.429559, lng: -99.191655},
                {lat: 19.434658, lng: -99.179983},
                {lat: 19.442508, lng: -99.173975},
                {lat: 19.457885, lng: -99.172685},
                {lat: 19.468406, lng: -99.170625},
                {lat: 19.479411, lng: -99.168478},
                {lat: 19.488314, lng: -99.169850}
              ];

              //Coacalco polanco Reforma
              var coacalco = [
                {lat: 19.640438, lng: -99.125645},
                {lat: 19.637285, lng: -99.130709},
                {lat: 19.631585, lng: -99.132641},
                {lat: 19.624027, lng: -99.127062},
                {lat: 19.624835, lng: -99.120796},
                {lat: 19.628513, lng: -99.117663},
                {lat: 19.633929, lng: -99.117534},
                {lat: 19.638578, lng: -99.120495}
              ];

              var coacalcoTlane = [
                {lat: 19.558024, lng: -99.206020},
                {lat: 19.553981, lng: -99.212887},
                {lat: 19.542980, lng: -99.221387},
                {lat: 19.531574, lng: -99.231002},
                {lat: 19.520411, lng: -99.238469},
                {lat: 19.510704, lng: -99.244305},
                {lat: 19.502938, lng: -99.239241},
                {lat: 19.504637, lng: -99.230487},
                {lat: 19.512240, lng: -99.223879},
                {lat: 19.522594, lng: -99.215810},
                {lat: 19.532462, lng: -99.209200},
                {lat: 19.544515, lng: -99.202330},
                {lat: 19.553980, lng: -99.201040}
              ];

              var reforma = [
                {lat: 19.446922, lng: -99.205686},
                {lat: 19.438180, lng: -99.206458},
                {lat: 19.433972, lng: -99.201222},
                {lat: 19.431543, lng: -99.191180},
                {lat: 19.427981, lng: -99.184399},
                {lat: 19.421181, lng: -99.176847},
                {lat: 19.419642, lng: -99.170067},
                {lat: 19.426682, lng: -99.157190},
                {lat: 19.433239, lng: -99.158819},
                {lat: 19.432675, lng: -99.172039},
                {lat: 19.443441, lng: -99.183368},
                {lat: 19.444170, lng: -99.192553},
                {lat: 19.447003, lng: -99.202338}
              ];

              var aguilas = [
                {lat: 19.347608, lng: -99.240115},
                {lat: 19.345077, lng: -99.243441},
                {lat: 19.343194, lng: -99.245265},
                {lat: 19.341453, lng: -99.244149},
                {lat: 19.340218, lng: -99.241167},
                {lat: 19.340360, lng: -99.236854},
                {lat: 19.342546, lng: -99.232004},
                {lat: 19.344348, lng: -99.228421},
                {lat: 19.346433, lng: -99.227777},
                {lat: 19.348741, lng: -99.228399},
                {lat: 19.350159, lng: -99.231253},
                {lat: 19.350240, lng: -99.235502}
              ];

              var tacubaya = [
                {lat: 19.408247, lng: -99.190607},
                {lat: 19.406244, lng: -99.193911},
                {lat: 19.403815, lng: -99.194469},
                {lat: 19.401366, lng: -99.193654},
                {lat: 19.400111, lng: -99.190607},
                {lat: 19.400395, lng: -99.187259},
                {lat: 19.402762, lng: -99.185156},
                {lat: 19.404908, lng: -99.184362},
                {lat: 19.407984, lng: -99.186465}
              ];

              var tacubayasantafe = [
                {lat: 19.386649, lng: -99.247981},
                {lat: 19.385516, lng: -99.258195},
                {lat: 19.374099, lng: -99.269869},
                {lat: 19.361143, lng: -99.279739},
                {lat: 19.352276, lng: -99.274760},
                {lat: 19.356932, lng: -99.260984},
                {lat: 19.369241, lng: -99.248625},
                {lat: 19.374990, lng: -99.245878},
                {lat: 19.379605, lng: -99.245362}
              ];

              var mixcoac = [
                {lat: 19.381409, lng: -99.189184},
                {lat: 19.379546, lng: -99.194120},
                {lat: 19.375538, lng: -99.196008},
                {lat: 19.370964, lng: -99.194721},
                {lat: 19.367725, lng: -99.190430},
                {lat: 19.367845, lng: -99.183006},
                {lat: 19.371084, lng: -99.179786},
                {lat: 19.374485, lng: -99.179185},
                {lat: 19.379100, lng: -99.182661}
              ];

              var mixcoacsantafe = [
                {lat: 19.372824, lng: -99.258663},
                {lat: 19.372177, lng: -99.267505},
                {lat: 19.365619, lng: -99.272398},
                {lat: 19.360761, lng: -99.280466},
                {lat: 19.353797, lng: -99.281410},
                {lat: 19.353958, lng: -99.272055},
                {lat: 19.359464, lng: -99.264245},
                {lat: 19.364483, lng: -99.255918},
                {lat: 19.370232, lng: -99.254029}
              ];

              var juanacatlan = [
                {lat: 19.415968, lng: -99.183024},
                {lat: 19.414592, lng: -99.185213},
                {lat: 19.412811, lng: -99.185986},
                {lat: 19.410747, lng: -99.184762},
                {lat: 19.409553, lng: -99.182059},
                {lat: 19.409674, lng: -99.179205},
                {lat: 19.411860, lng: -99.177724},
                {lat: 19.414248, lng: -99.177274},
                {lat: 19.416090, lng: -99.179505}
              ];



              //SVBus
              var acoxpa = [
                {lat: 19.303945, lng: -99.138205},
                {lat: 19.302447, lng: -99.140888},
                {lat: 19.299733, lng: -99.142411},
                {lat: 19.297141, lng: -99.142003},
                {lat: 19.295237, lng: -99.139858},
                {lat: 19.295399, lng: -99.135008},
                {lat: 19.300907, lng: -99.133635},
                {lat: 19.303135, lng: -99.136231}
              ];

              var cotsco = [
                {lat: 19.291281, lng: -99.139233},
                {lat: 19.287555, lng: -99.142537},
                {lat: 19.283707, lng: -99.142709},
                {lat: 19.279939, lng: -99.140821},
                {lat: 19.279048, lng: -99.136744},
                {lat: 19.281559, lng: -99.132624},
                {lat: 19.285529, lng: -99.131465},
                {lat: 19.288041, lng: -99.133525},
                {lat: 19.290350, lng: -99.136443},
              ];

              var santafeSVBus = [
                {lat: 19.376220, lng: -99.254327},
                {lat: 19.376099, lng: -99.261838},
                {lat: 19.368852, lng: -99.270636},
                {lat: 19.360674, lng: -99.281236},
                {lat: 19.355370, lng: -99.284583},
                {lat: 19.351078, lng: -99.282351},
                {lat: 19.351847, lng: -99.275828},
                {lat: 19.358376, lng: -99.266022},
                {lat: 19.363517, lng: -99.259112},
                {lat: 19.370359, lng: -99.252760},
                {lat: 19.373842, lng: -99.252587}
              ];

              var centrocomercialsantafe = [
                {lat: 19.376220, lng: -99.254327},
                {lat: 19.376099, lng: -99.261838},
                {lat: 19.368852, lng: -99.270636},
                {lat: 19.362911, lng: -99.275335},
                {lat: 19.359348, lng: -99.275249},
                {lat: 19.357445, lng: -99.271988},
                {lat: 19.358376, lng: -99.266022},
                {lat: 19.363517, lng: -99.259112},
                {lat: 19.370359, lng: -99.252760},
                {lat: 19.373842, lng: -99.252587}
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

              var santafeSVBus2 = [
                {lat: 19.381750, lng: -99.249116},
                {lat: 19.380748, lng: -99.250521},
                {lat: 19.379351, lng: -99.250746},
                {lat: 19.377934, lng: -99.249749},
                {lat: 19.377499, lng: -99.247860},
                {lat: 19.378471, lng: -99.246401},
                {lat: 19.380161, lng: -99.245843},
                {lat: 19.381851, lng: -99.248129}
              ];

              var toreoSVBus = [
                {lat: 19.459069, lng: -99.215075},
                {lat: 19.457906, lng: -99.216566},
                {lat: 19.456277, lng: -99.217124},
                {lat: 19.454669, lng: -99.216072},
                {lat: 19.454436, lng: -99.213852},
                {lat: 19.455569, lng: -99.212049},
                {lat: 19.457390, lng: -99.212242},
                {lat: 19.458574, lng: -99.213498}
              ];

              var lajoyaSVBus = [
                {lat: 19.285680, lng: -99.167974},
                {lat: 19.286085, lng: -99.171450},
                {lat: 19.283857, lng: -99.174927},
                {lat: 19.280049, lng: -99.176085},
                {lat: 19.276930, lng: -99.174541},
                {lat: 19.275593, lng: -99.170764},
                {lat: 19.275391, lng: -99.166859},
                {lat: 19.276282, lng: -99.163211},
                {lat: 19.281912, lng: -99.163511},
                {lat: 19.284505, lng: -99.166043}
              ];

              var pedregalSVBus = [
                {lat: 19.308951, lng: -99.208589},
                {lat: 19.305549, lng: -99.210605},
                {lat: 19.302228, lng: -99.208846},
                {lat: 19.300324, lng: -99.204339},
                {lat: 19.298624, lng: -99.198203},
                {lat: 19.298259, lng: -99.190349},
                {lat: 19.300486, lng: -99.185543},
                {lat: 19.303848, lng: -99.184899},
                {lat: 19.305630, lng: -99.187560},
                {lat: 19.306967, lng: -99.193782},
                {lat: 19.307615, lng: -99.199619},
                {lat: 19.308060, lng: -99.205499}
              ];

              var cuautliarcoslSVBus = [
                {lat: 19.650639, lng: -99.202779},
                {lat: 19.650639, lng: -99.207887},
                {lat: 19.644859, lng: -99.208788},
                {lat: 19.641019, lng: -99.209603},
                {lat: 19.636856, lng: -99.207887},
                {lat: 19.633299, lng: -99.203166},
                {lat: 19.633824, lng: -99.197888},
                {lat: 19.636289, lng: -99.192008},
                {lat: 19.641948, lng: -99.189475},
                {lat: 19.646313, lng: -99.190247},
                {lat: 19.648263, lng: -99.196020},
                {lat: 19.650557, lng: -99.196985}
              ];

              var cuautlilecherialSVBus = [
                {lat: 19.612552, lng: -99.192520},
                {lat: 19.610328, lng: -99.197499},
                {lat: 19.605518, lng: -99.199731},
                {lat: 19.600141, lng: -99.199001},
                {lat: 19.597391, lng: -99.192393},
                {lat: 19.598523, lng: -99.186127},
                {lat: 19.603414, lng: -99.182607},
                {lat: 19.608427, lng: -99.181620},
                {lat: 19.612309, lng: -99.184023},
                {lat: 19.612956, lng: -99.188314}
              ];

              var HuipulcoSVBus = [
                {lat: 19.304990, lng: -99.147673},
                {lat: 19.304058, lng: -99.150034},
                {lat: 19.302600, lng: -99.151665},
                {lat: 19.300514, lng: -99.151922},
                {lat: 19.298347, lng: -99.150785},
                {lat: 19.296666, lng: -99.148661},
                {lat: 19.296747, lng: -99.145227},
                {lat: 19.298387, lng: -99.142717},
                {lat: 19.301101, lng: -99.141772},
                {lat: 19.302823, lng: -99.142717},
                {lat: 19.304159, lng: -99.144326}
              ];

              var TecMTYSVBus = [
                {lat: 19.287017, lng: -99.138538},
                {lat: 19.286076, lng: -99.140018},
                {lat: 19.284475, lng: -99.140598},
                {lat: 19.282946, lng: -99.140029},
                {lat: 19.282025, lng: -99.138205},
                {lat: 19.282167, lng: -99.136285},
                {lat: 19.283382, lng: -99.134772},
                {lat: 19.284627, lng: -99.134557},
                {lat: 19.285964, lng: -99.135297},
                {lat: 19.287058, lng: -99.137250}
              ];

              var SantaFeHuipulcoBus = [
                {lat: 19.374671, lng: -99.257369},
                {lat: 19.372728, lng: -99.263893},
                {lat: 19.366736, lng: -99.270416},
                {lat: 19.361796, lng: -99.277626},
                {lat: 19.354152, lng: -99.281298},
                {lat: 19.353262, lng: -99.275633},
                {lat: 19.355692, lng: -99.266965},
                {lat: 19.357716, lng: -99.262330},
                {lat: 19.362899, lng: -99.255979},
                {lat: 19.369862, lng: -99.253919}
              ];


              var viverosRuta = [
                {lat: 19.359587, lng: -99.172836},
                {lat: 19.358171, lng: -99.178200},
                {lat: 19.354364, lng: -99.182535},
                {lat: 19.348250, lng: -99.184766},
                {lat: 19.342177, lng: -99.186139},
                {lat: 19.339180, lng: -99.185496},
                {lat: 19.337277, lng: -99.182878},
                {lat: 19.338046, lng: -99.178544},
                {lat: 19.342703, lng: -99.177042},
                {lat: 19.346873, lng: -99.175754},
                {lat: 19.350315, lng: -99.172664},
                {lat: 19.357765, lng: -99.170518}
              ];

              var sanjeronimoRuta = [
                {lat: 19.335060, lng: -99.212554},
                {lat: 19.332468, lng: -99.216545},
                {lat: 19.329593, lng: -99.218262},
                {lat: 19.325745, lng: -99.217103},
                {lat: 19.323802, lng: -99.213584},
                {lat: 19.323518, lng: -99.210365},
                {lat: 19.325259, lng: -99.206975},
                {lat: 19.328296, lng: -99.205859},
                {lat: 19.331617, lng: -99.207061},
                {lat: 19.334331, lng: -99.209335}
              ];

              var santafeRuta = [
                {lat: 19.376210, lng: -99.253960},
                {lat: 19.374510, lng: -99.263789},
                {lat: 19.364955, lng: -99.272888},
                {lat: 19.356574, lng: -99.281256},
                {lat: 19.352242, lng: -99.279110},
                {lat: 19.361108, lng: -99.264305},
                {lat: 19.367100, lng: -99.256966},
                {lat: 19.372323, lng: -99.252415}
              ];


              var CibelesTaxi = [
                {lat: 19.425864, lng: -99.168283},
                {lat: 19.426957, lng: -99.173433},
                {lat: 19.426228, lng: -99.175793},
                {lat: 19.423436, lng: -99.176866}, //punto linea
                {lat: 19.420198, lng: -99.176609},
                {lat: 19.417769, lng: -99.171673},
                {lat: 19.415462, lng: -99.166996},
                {lat: 19.415219, lng: -99.162833},
                {lat: 19.416393, lng: -99.160473},
                {lat: 19.418457, lng: -99.159528},
                {lat: 19.421250, lng: -99.160901},
                {lat: 19.423476, lng: -99.165236}
              ];

              var SantafeTaxi = [
                {lat: 19.379272, lng: -99.247115}, //punto linea
                {lat: 19.381378, lng: -99.251664},
                {lat: 19.378302, lng: -99.259305},
                {lat: 19.373120, lng: -99.268490},
                {lat: 19.365752, lng: -99.275271},
                {lat: 19.360164, lng: -99.279734},
                {lat: 19.355225, lng: -99.285313},
                {lat: 19.352067, lng: -99.283339},
                {lat: 19.353120, lng: -99.276559},
                {lat: 19.356844, lng: -99.267804},
                {lat: 19.362188, lng: -99.260079},
                {lat: 19.370203, lng: -99.250722},
                {lat: 19.376195, lng: -99.247888}
              ];


              // MAPA Zona Norte <-> Polanco
              new google.maps.Polygon({
                map: mapNortePolanco,
                paths: polanco,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapNortePolanco,
                paths: norte,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
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
                map: mapNortePolanco
              });

              // MAPA Cuautitlan - Reforma Xpress
              new google.maps.Polygon({
                map: mapCuautiReformaXpress,
                paths: polanco,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCuautiReformaXpress,
                paths: ford,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCuautiReformaXpress,
                paths: perinorte,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line Cuautitlan - Reforma Xpress
              var lineSymbol = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.634695, lng: -99.194815}, {lat: 19.613150, lng: -99.190528}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCuautiReformaXpress
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.600941, lng: -99.188639}, {lat: 19.447779, lng: -99.205983}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCuautiReformaXpress
              });

              // MAPA Cuautitlan - Santa Fe Xpress
              new google.maps.Polygon({
                map: mapCuautiSantafeXpress,
                paths: santafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCuautiSantafeXpress,
                paths: ford,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCuautiSantafeXpress,
                paths: perinorte,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line Cuautitlan - Reforma Xpress
              var lineSymbol = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.634695, lng: -99.194815}, {lat: 19.613150, lng: -99.190528}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCuautiSantafeXpress
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.600941, lng: -99.188639}, {lat: 19.3938, lng: -99.2534}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCuautiSantafeXpress
              });


              //Mapa Reforma Polanco - Santa Fe
              new google.maps.Polygon({
                map: mapReformaSantaFe,
                paths: polancoReforma,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapReformaSantaFe,
                paths: santafeReforma,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
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
                map: mapReformaSantaFe
              });


              // MAPA 4 Zona Norte <-> Santa Fe Express
              new google.maps.Polygon({
                map: mapNorteSantaFe,
                paths: norte,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapNorteSantaFe,
                paths: santafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapNorteSantaFe,
                paths: ford,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapNorteSantaFe,
                paths: perinorte,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
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
                map: mapNorteSantaFe
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.634695, lng: -99.194815}, {lat: 19.613150, lng: -99.190528}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapNorteSantaFe
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.600941, lng: -99.188639}, {lat: 19.5578, lng: -99.2052}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapNorteSantaFe
              });


              // Mapa Aragon Santa Fe
              new google.maps.Polygon({
                map: mapAragonSantaFe,
                paths: santafeAragon,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapAragonSantaFe,
                paths: aragon,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapAragonSantaFe,
                paths: pradosAragon,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
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
                path: [{lat: 19.449240, lng: -99.084024}, {lat: 19.3940, lng: -99.2478}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol5,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapAragonSantaFe
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.464738, lng: -99.056515}, {lat: 19.460569, lng: -99.063981}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol5,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapAragonSantaFe
              });


              // Mapa Narvarte - Santa Fe
              new google.maps.Polygon({
                map: mapNarvarteSantaFe,
                paths: santafeSMALL,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapNarvarteSantaFe,
                paths: delvalle,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });


              // Line 6 Del Valle - Santa fé
              var lineSymbol6 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.386141, lng: -99.181495}, {lat: 19.375855, lng: -99.255135}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol6,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapNarvarteSantaFe
              });

              // Mapa 8 Polanco - Santa Fe
              new google.maps.Polygon({
                map: mapPolancoSantaFe,
                paths: santafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapPolancoSantaFe,
                paths: polancoTRES,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapPolancoSantaFe,
                paths: bosques,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line 8 Polanco - Santa Fe
              var lineSymbol8 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.426993, lng: -99.215280}, {lat: 19.414570, lng: -99.238898}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol8,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapPolancoSantaFe
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.401334, lng: -99.241516}, {lat: 19.3940, lng: -99.2478}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol8,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapPolancoSantaFe
              });

              // Mapa 9 M. Chabacano - Santa Fe
              new google.maps.Polygon({
                map: mapChabacanoSantaFe,
                paths: santafeChabacano,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapChabacanoSantaFe,
                paths: romaChabacano,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapChabacanoSantaFe,
                paths: chabacano,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line 9 M. Chabacano - Santa Fe
              var lineSymbol9 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.408685, lng: -99.138831}, {lat: 19.404392, lng: -99.151303}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol9,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapChabacanoSantaFe
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.406416, lng: -99.180743}, {lat: 19.371675, lng: -99.260839}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol9,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapChabacanoSantaFe
              });

              // Mapa 10 Atizapan Santa Fe
              new google.maps.Polygon({
                map: mapAtizapanSantaFe,
                paths: atizapanWalmart,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapAtizapanSantaFe,
                paths: atizapan,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapAtizapanSantaFe,
                paths: santafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              // Line 10 Atizapan - Polanco
              var lineSymbol10 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.554818, lng: -99.248703}, {lat: 19.553928, lng: -99.262906}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol9,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapAtizapanSantaFe
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.542564, lng: -99.271188}, {lat: 19.3940, lng: -99.2478}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol9,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapAtizapanSantaFe
              });

              // Mapa 11 Azcapotzalco Santa Fe
              new google.maps.Polygon({
                map: mapAzcapoSantaFe,
                paths: Azcapotzalco,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapAzcapoSantaFe,
                paths: santafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              // Line 11 Azcapotzalco - Santa Fe
              var lineSymbol11 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.432068, lng: -99.201095}, {lat: 19.3940, lng: -99.2478}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol9,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapAzcapoSantaFe
              });

              // Mapa 12 Coacalco - Reforma
              new google.maps.Polygon({
                map: mapCoacalcoPolancoReforma,
                paths: coacalco,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCoacalcoPolancoReforma,
                paths: coacalcoTlane,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCoacalcoPolancoReforma,
                paths: reforma,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.3,
                draggable: false,
                geodesic: true
              });

              // Line Coacalco - Reforma
              var lineSymbol12 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.624027, lng: -99.127062}, {lat: 19.558024, lng: -99.206020}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol12,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCoacalcoPolancoReforma
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.502938, lng: -99.239241}, {lat: 19.446922, lng: -99.205686}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol12,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCoacalcoPolancoReforma
              });


              // Mapa 14 Tacubaya - Santa Fe
              new google.maps.Polygon({
                map: mapTacubayaSantafe,
                paths: tacubaya,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapTacubayaSantafe,
                paths: tacubayasantafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line Tacubaya - Santa Fe
              var lineSymbol14 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.401366, lng: -99.193654}, {lat: 19.386649, lng: -99.247981}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol14,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapTacubayaSantafe
              });

              // Mapa 15 Mixcoac - Santa Fe
              new google.maps.Polygon({
                map: mapMixcoacSantafe,
                paths: mixcoac,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapMixcoacSantafe,
                paths: mixcoacsantafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line Mixcoac - Santa Fe
              var lineSymbol15 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.375538, lng: -99.196008}, {lat: 19.370232, lng: -99.254029}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol15,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapMixcoacSantafe
              });

              // Mapa 16 Juanacatlan - Santa Fe
              new google.maps.Polygon({
                map: mapJuanacatlanSantafe,
                paths: juanacatlan,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapJuanacatlanSantafe,
                paths: santafeSVBus2,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line Juanacatlan - Santa Fe
              var lineSymbol16 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.410747, lng: -99.184762}, {lat: 19.380161, lng: -99.245843}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbol16,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapJuanacatlanSantafe
              });



              // Mapa Taxi Electrico 1 Cibeles - Santa Fe
              new google.maps.Polygon({
                map: mapCibelesSantafe,
                paths: CibelesTaxi,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapCibelesSantafe,
                paths: SantafeTaxi,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus1 Acoxpa - Santa Fe
              var lineSymbolTaxi1 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.423436, lng: -99.176866}, {lat: 19.379272, lng: -99.247115}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolTaxi1,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapCibelesSantafe
              });




              // Mapa SVBus1 Acoxpa - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus1,
                paths: acoxpa,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus1,
                paths: santafeSVBus,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
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
                path: [{lat: 19.299733, lng: -99.142411}, {lat: 19.376220, lng: -99.254327}],
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
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus2,
                paths: auditorio,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus2 Acoxpa - Auditorio
              var lineSymbolSVBus2 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.421167, lng: -99.195687}, {lat: 19.299733, lng: -99.142411}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus2,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus2
              });

              // Mapa SVBus3 Toreo - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus3,
                paths: toreoSVBus,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus3,
                paths: santafeSVBus2,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus3 Toreo - Santa Fe
              var lineSymbolSVBus3 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat:  19.381851, lng: -99.248129}, {lat: 19.454669, lng: -99.216072}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus3,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus3
              });

              // Mapa SVBus4 Cotsco - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus4,
                paths: cotsco,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus4,
                paths: santafeSVBus,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus4 Cotsco - Santa Fe
              var lineSymbolSVBus4 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.291281, lng: -99.139233}, {lat: 19.376220, lng: -99.254327}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus4,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus4
              });

              // Mapa SVBus5 Cotsco - Centro Comercial Santa Fe
              new google.maps.Polygon({
                map: mapSVBus5,
                paths: cotsco,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus5,
                paths: centrocomercialsantafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus5 Cotsco - Centro Comercial Santa Fe
              var lineSymbolSVBus5 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.291281, lng: -99.139233}, {lat: 19.376220, lng: -99.254327}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus5,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus5
              });

              // Mapa SVBus6 Cotsco - Auditorio
              new google.maps.Polygon({
                map: mapSVBus6,
                paths: cotsco,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus6,
                paths: auditorio,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus6 Cotsco - Auditorio
              var lineSymbolSVBus6 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.291281, lng: -99.139233}, {lat: 19.421430, lng: -99.188627}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus6,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus6
              });


              // Mapa SVBus7 Auditorio - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus7,
                paths: auditorio,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus7,
                paths: santafeSVBus,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus7 Cotsco - Auditorio
              var lineSymbolSVBus7 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.421167, lng: -99.195687}, {lat: 19.376220, lng: -99.254327}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus7,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus7
              });

              // Mapa SVBus8 La Joya - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus8,
                paths: lajoyaSVBus,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus8,
                paths: centrocomercialsantafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus8 La Joya - Auditorio
              var lineSymbolSVBus8 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.283857, lng: -99.174927}, {lat: 19.359348, lng: -99.275249}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus8,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus8
              });

              // Mapa SVBus9 La Joya - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus9,
                paths: pedregalSVBus,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus9,
                paths: centrocomercialsantafe,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus9 Pedregal - Auditorio
              var lineSymbolSVBus9 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.305549, lng: -99.210605}, {lat: 19.359348, lng: -99.275249}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus9,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus9
              });

              // Mapa SVBus10 Huipulco - Santa Fe
              new google.maps.Polygon({
                map: mapSVBus10,
                paths: HuipulcoSVBus,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus10,
                paths: TecMTYSVBus,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapSVBus10,
                paths: SantaFeHuipulcoBus,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line SVBus10 Huipulco - Auditorio
              var lineSymbolSVBus10 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.298387, lng: -99.142717}, {lat: 19.287017, lng: -99.138538}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus10,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus10
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.282946, lng: -99.140029}, {lat: 19.354152, lng: -99.281298}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolSVBus10,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapSVBus10
              });


              // Mapa RutasUnidas1 Viveros - Santa Fe
              new google.maps.Polygon({
                map: mapRutasUnidas1,
                paths: viverosRuta,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapRutasUnidas1,
                paths: sanjeronimoRuta,
                strokeColor: '#49bda7',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#49bda7',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              new google.maps.Polygon({
                map: mapRutasUnidas1,
                paths: santafeRuta,
                strokeColor: '#768a96',
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#768a96',
                fillOpacity: 0.2,
                draggable: false,
                geodesic: true
              });

              // Line Rutas Viveros - Santa Fe
              var lineSymbolRutas1 = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
              };

              var line = new google.maps.Polyline({
                path: [{lat: 19.337277, lng: -99.182878}, {lat: 19.331617, lng: -99.207061}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolRutas1,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapRutasUnidas1
              });

              var line = new google.maps.Polyline({
                path: [{lat: 19.325745, lng: -99.217103}, {lat: 19.352242, lng: -99.279110}],
                strokeOpacity: 0,
                icons: [{
                  icon: lineSymbolRutas1,
                  offset: '0',
                  repeat: '20px'
                }],
                map: mapRutasUnidas1
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

    $('#timepicker-org-1').datetimepicker({
      locale: 'es',
      format: 'LT'
    });

    $('#timepicker-org-2').datetimepicker({
      locale: 'es',
      format: 'LT'
    });

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

<!-- /// NAV SCROLL /// -->
<script type="text/javascript">
  $(function() {
    var header = $(".nav-background");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 180) {
            header.removeClass('nav-background').addClass("nav-outback");
        } else {
            header.removeClass("nav-outback").addClass('nav-background');
        }
    });
  });
</script>
