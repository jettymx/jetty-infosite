<script type="text/javascript">
  //Vista del mapa OSM
  var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  //Iconos Marcadores
  var ascenso = L.icon({
      iconUrl: 'https://www.jetty.mx/img/icon-ascenso.png',
      iconSize: [32, 36]
  });

  var descenso = L.icon({
      iconUrl: 'https://www.jetty.mx/img/icon-descenso.png',
      iconSize: [32, 36]
  });

  // funciones de ayuda
  function createMap(data) {
    var layer = L.tileLayer(osmUrl, {maxZoom: data.maxZoom, attribution: osmAttrib});
    return L.map(data.id).setView(data.center, data.zoom).addLayer(layer);
  }

  function addMarkers(map, route) {
    var length = route.length
    for (var i = 0; i < length; i++) {
      var stop = route[i]
      L.marker(stop.coordinates, {icon: stop.icon})
      .addTo(map)
      .bindPopup(stop.title);
    }
  }

  // Mapa_1
  var mapCuautitlanLomasverdesSantaFe = {
    id: 'mapa_cuautitlan_lomasverdes_santafe',
    maxZoom: 20,
    zoom: 11,
    center: [19.4200, -99.1600]
  }

  var routeCuautitlanLomasverdesSantaFe = [
    {
      coordinates: [19.6438893415825, -99.2001326957703],
      icon: ascenso,
      title: '<b>Cuautitlán</b> <br> Av. Jose María Morelos (Palomas, Glorieta, frente al Oxxo) <br><br> <b>L - J: 06:00, 06:20, 06:50</b> <br> <b>V: 06:00, 06:20, 06:50</b>'
    },
    {
      coordinates: [19.6058121, -99.1895497],
      icon: ascenso,
      title: '<b>Perinorte</b> <br> Autopista Qro-Mex (frente a Ford) <br><br> <b>L - V: 06:10, 06:33, 07:07</b>'
    },
    {
      coordinates: [19.5182314, -99.2424462],
      icon: ascenso,
      title: '<b>Hospital San José</b> <br> Cto. Oradores y Cto. Educadores <br><br> <b>L - V: 06:45, 07:04, 07:40</b>'
    }
  ]

  // Mapa_2
  var mapSantaFeCuautitlan = {
    id: 'mapa_santafe_cuautitlan',
    maxZoom: 20,
    zoom: 12,
    center: [19.33000, -99.21000]
  }

  var routeSantaFeCuautitlan = [
    {
      coordinates: [19.3882978, -99.2510397],
      icon: ascenso,
      title: '<b>Arcos Bosques (Pantalón)</b> <br> Av. Paseo de los Tamarindos 400B (frente al Número) <br><br> <b>L - V: 15:35, 16:05, 18:00, 18:30, 18:40, 19:10</b>'
    },
    {
      coordinates: [19.3572757, -99.274824],
      icon: ascenso,
      title: '<b>Av. Santa Fe 695</b> <br> Av Sta Fe 695, Lomas de Santa Fe, Contadero, Ciudad de México, CDMX, México <br><br> <b>L - V: 15:10, 17:30, 15:40, 18:10, 18:210, 17:55</b>'
    },
    {
      coordinates: [19.3665204436737, -99.2636891031799],
      icon: ascenso,
      title: '<b>Pasaje Santa Fe</b> <br> Ernesto Martínez Domínguez, Frente a Banorte de Pasaje Santa Fe <br><br> <b>L - V: 15:10, 15:20, 15:50, 17:40, 18:10, 18:20, 18:55</b>'
    },
  ]

  // Agregar marcadores por mapa
  var map1 = createMap(mapCuautitlanLomasverdesSantaFe)
  addMarkers(map1, routeCuautitlanLomasverdesSantaFe)

  var map2 = createMap(mapSantaFeCuautitlan)
  addMarkers(map2, routeSantaFeCuautitlan)

</script>