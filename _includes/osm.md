<script>

  //Vista del mapa OSM
  var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  //Iconos Marcadores
  var ascenso = L.icon({
      iconUrl: 'https://www.jetty.mx/img/ascenso.png',
      iconSize: [32, 36]
  });

  var descenso = L.icon({
      iconUrl: 'https://www.jetty.mx/img/descenso.png',
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

  // Mapa_1 Aragon Santa Fe
  var mapAragonSantaFe = {
    id: 'mapa_aragon_santafe',
    maxZoom: 20,
    zoom: 11,
    center: [19.4200, -99.1600]
  }

  var routeAragonSantaFe = [
    {
      coordinates: [19.471657, -99.049681],
      icon: ascenso,
      title: '<b>Bosques de Egipto</b> <br> En el entronque con Bosques de África <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.458254, -99.069385],
      icon: ascenso,
      title: '<b>Bosque de Aragón</b> <br> Puerta 8 del Bosque de Aragón (junto al Metro) <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.468581, -99.049511],
      icon: ascenso,
      title: '<b>Bosque de Africa</b> <br> Blvrd. Bosque de Africa esq Bosque de Rhodesia <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.451403, -99.078917],
      icon: ascenso,
      title: '<b>Metro Deportivo Oceanía (AM)</b> <br> Metro Deportivo Oceanía, bajo el Puente de la Estación <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.37329, -99.259612],
      icon: descenso,
      title: '<b>Arcos Bosques 2</b> <br> Paseo de Los Tamarindos 150, Bosques de las Lomas <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.36783, -99.2637924],
      icon: descenso,
      title: '<b>Bahia Office Depot</b> <br> Office Depot, Juan Salvador Agraz, Contadero<br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.35755, -99.277629],
      icon: descenso,
      title: '<b>Corp. Citibanamex</b> <br> Roberto Medellín esq. Av. Vasco de Quiroga<br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
  ]

  // Mapa_2 Acoxpa Santa fe
  var mapAcoxpaSataFe = {
    id: 'mapa_acoxpa_santafe',
    maxZoom: 20,
    zoom: 12,
    center: [19.33000, -99.21000]
  }

  var routeAcoxpaSataFe = [
    {
      coordinates: [19.298926, -99.138119],
      icon: ascenso,
      title: '<b>Acoxpa</b> <br> Av. Acoxpa altura de Boutique Palacio <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.368098, -99.26025],
      icon: descenso,
      title: '<b>Samara</b> <br> Av. Santa Fe esquina Antonio Dovali Jaime <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.35790509, -99.27636846],
      icon: descenso,
      title: '<b>Glorieta Juan Salvador Agraz</b> <br> Debajo del puente, Prol. Paseo de la Reforma esq. Juan Salvador Agraz <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.3613437024667, -99.261317050154],
      icon: descenso,
      title: '<b>Tec de Monterrey Santa Fe</b> <br> Av. de los Poetas, pasando el Tecnológico de Monterrey Campus Santa Fe <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    },
    {
      coordinates: [19.3600600561175, -99.2700176629822],
      icon: descenso,
      title: '<b>Av Santa Fe</b> <br> Av Sta Fe esq Juan O Gorman, segunda glorieta de Av Santa Fe <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    }
  ]

  // Mapa_3 Acoxpa Auditorio
  var mapAcoxpaAuditorio = {
    id: 'mapa_acoxpa_auditorio',
    maxZoom: 20,
    zoom: 12,
    center: [19.49000, -99.20000]
  }

  var routeAcoxpaAuditorio = [
    {
      coordinates: [19.551745, -99.208275],
      icon: ascenso,
      title: '<b>Mundo E</b> <br> Gasolinera entre las calles de Caléndulas y Lotos <br><br> <b>Saliendo: 7:00am, 8:30am</b>'
    }
  ]

  /// MAPAS PONIENTE ///
  // Mapa_Poniente_1 Azcapotzalco Polanco Santafe
  var mapAzcapoPolancoSantafe = {
    id: 'mapa_azcapotzalco_polanco_santafe',
    maxZoom: 20,
    zoom: 12,
    center: [19.42000, -99.23000]
  }

  var routeAzcapoPolancoSantafe = [
    {
      coordinates: [19.482572, -99.174393],
      icon: ascenso,
      title: '<b>Azcapotzalco</b> <br> Frente a Angar Azcapotzalco Av. de las Granjas <br><br> <b>Saliendo: 06:40am, 07:00am</b>'
    },
    {
      coordinates: [19.434285, -99.197447],
      icon: ascenso,
      title: '<b>Parque América (AM)</b> <br> Horacio esq. Anatole France <br><br> <b>Saliendo: 07:22am, 07:44am</b>'
    },
    {
      coordinates: [19.443522, -99.183125],
      icon: ascenso,
      title: '<b>Laguna de Términos</b> <br> Esq. Mariano Escobedo (Gasolinera) <br><br> <b>Saliendo: 07:12am, 07:32am</b>'
    },
    {
      coordinates: [19.468073, -99.176563],
      icon: ascenso,
      title: '<b>Vips Camarones</b> <br> Av. Cuitláhuac <br><br> <b>Saliendo: 06:52am, 07:10am</b>'
    },
    {
      coordinates: [19.456292, -99.180746],
      icon: ascenso,
      title: '<b>Metro Cuitláhuac</b> <br> Mariano Escobedo #3 Frente al Oxxo <br><br> <b>Saliendo: 07:05am, 07:25am</b>'
    },
    {
      coordinates: [19.3628051, -99.2657969],
      icon: descenso,
      title: '<b>Punta del Parque</b> <br> Avenida Santa Fe y Av de los Poetas <br><br> <b></b>'
    },
    {
      coordinates: [19.387198, -99.253095],
      icon: descenso,
      title: '<b>Arcos Bosques 2</b> <br> Paseo de Los Tamarindos 150, Bosques de las Lomas <br><br> <b></b>'
    },
    {
      coordinates: [19.37338971, -99.25939643],
      icon: descenso,
      title: '<b>Corp. Citibanamex</b> <br> Roberto Medellín esq. Av. Vasco de Quiroga <br><br> <b></b>'
    },
    {
      coordinates: [19.3678265, -99.2637924],
      icon: descenso,
      title: '<b>Ibero</b> <br> Av. Vasco de Quiroga frente a la Ibero <br><br> <b></b>'
    },
    {
      coordinates: [19.365301969751, -99.2674281209015],
      icon: descenso,
      title: '<b>Punta Santa Fe</b> <br> Entrada peatonal a Punta Santa Fe <br><br> <b></b>'
    },
    {
      coordinates: [19.3572757, -99.274824],
      icon: descenso,
      title: '<b>Av. Santa Fe 695</b> <br> Av Sta Fe 695, Lomas de Santa Fe, Contadero <br><br> <b></b>'
    },
    {
      coordinates: [19.35749292, -99.27764941],
      icon: descenso,
      title: '<b>Bahia Office Depot</b> <br> Office Depot, Juan Salvador Agraz, Contadero <br><br> <b></b>'
    }
  ]

  // Mapa_Poniente_2 Santafe Polanco  Azcapotzalco
  var mapSantafePolancoAzcapo = {
    id: 'mapa_santafe_polanco_azcapotzalco',
    maxZoom: 20,
    zoom: 12,
    center: [19.42000, -99.23000]
  }

  var routeSantafePolancoAzcapo = [
    {
      coordinates: [19.482572, -99.174393],
      icon: ascenso,
      title: '<b>Azcapotzalco</b> <br> Frente a Angar Azcapotzalco Av. de las Granjas <br><br> <b>Saliendo: 06:40am, 07:00am</b>'
    }
  ]

  // Agregar marcadores por mapa
  var map1 = createMap(mapAragonSantaFe)
  addMarkers(map1, routeAragonSantaFe)

  var map2 = createMap(mapAcoxpaSataFe)
  addMarkers(map2, routeAcoxpaSataFe)

  var map3 = createMap(mapAcoxpaAuditorio)
  addMarkers(map3, routeAcoxpaAuditorio)

  var poniente1 = createMap(mapAzcapoPolancoSantafe)
  addMarkers(poniente1, routeAzcapoPolancoSantafe)

  var poniente2 = createMap(mapSantafePolancoAzcapo)
  addMarkers(poniente2, routeSantafePolancoAzcapo)

</script>