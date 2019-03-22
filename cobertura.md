---
layout: default-cobertura
title: Jetty Cobertura | Explora Nuestras Rutas
description: Consulta nuestra cobertura y nuestros horarios de operaciones en la Zona Metropolitana del Valle de México.
id: cobertura
---

<div class="container cobertura">
  <div class="row">

    <div class="col-md-8 col-md-offset-2 text-center">
      <h1>Explora nuestas rutas</h1>
    </div>

    <div class="rutas">

        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Rutas AM</a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Rutas PM</a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">

          <!-- RUTAS AM -->
          <div role="tabpanel" class="tab-pane active" id="home">

            <ul class="nuevas-rutas">
              <h2>Norte</h2>
              <li>
                <div class="col-md-4">
                  <button type="button" data-toggle="modal" data-target="#ruta1" class="btn-ruta">
                    <h4 class="panel-title">
                      Cuautitlán
                      <img src="img/arrow-cobertura-1.png" class="arrow-cobertura">
                      Lomas Verdes
                      <img src="img/arrow-cobertura-1.png" class="arrow-cobertura">
                      Santa Fe <img src="img/icon-express.svg" width="60" >
                    </h4>
                  </button>
                </div>
              </li>

              <div class="clearfix"></div>
              <h2>Sur</h2>
              <div class="clearfix"></div>

              <div class="clearfix"></div>
              <h2>Centro</h2>
              <div class="clearfix"></div>

              <div class="clearfix"></div>
              <h2>Poniente</h2>
              <div class="clearfix"></div>

              <div class="clearfix"></div>
              <h2>Oriente</h2>
              <div class="clearfix"></div>

            </ul>
          </div>

          <!-- RUTAS PM -->
          <div role="tabpanel" class="tab-pane" id="profile">
             <ul class="nuevas-rutas">
              <h2>Norte</h2>
              <li>
                <div class="col-md-4">
                  <button type="button" data-toggle="modal" data-target="#ruta2" class="btn-ruta">
                    <h4 class="panel-title">
                      Santa Fe <img src="img/arrow-cobertura-1.png" class="arrow-cobertura">
                      Lomas Verdes <img src="img/arrow-cobertura-1.png" class="arrow-cobertura">
                      Cuautitlán
                    </h4>
                  </button>
                </div>
              </li>

              <div class="clearfix"></div>
              <h2>Sur</h2>
              <div class="clearfix"></div>

              <div class="clearfix"></div>
              <h2>Centro</h2>
              <div class="clearfix"></div>

              <div class="clearfix"></div>
              <h2>Poniente</h2>
              <div class="clearfix"></div>

              <div class="clearfix"></div>
              <h2>Oriente</h2>
              <div class="clearfix"></div>

            </ul>
          </div>

        </div>

    </div>

    <div class="clearfix"></div>

    <div class="col-md-12 text-center dondevas">
      <h3>¿Te interesa tener un Jetty cerca de ti?</h3>
      <p>Ingresa aquí tu origen y destino deseado y lo tomaremos en cuenta:</p>
      <a href="solicitud" class="btn btn-default btn-lg btn-green btn-header">¿A dónde te llevamos?</a>
    </div>

    <div class="col-md-8 col-md-offset-2 text-center dondevas">

      <h2>Para reservar tu viaje, descarga la app:</h2>
        <a href="https://itunes.apple.com/us/app/jetty-soluciona-tu-transporte/id1276413293?l=es&ls=1&mt=8" target="_blank" class="download-app hvr-shadow" target="_blank" class="download-app hvr-shadow">
          <img src="img/jetty-iOS.png" alt="Jetty Descargar iOS">
        </a>

        <a href="https://play.google.com/store/apps/details?id=mx.jetty.jetty" target="_blank" class="download-app hvr-shadow">
          <img src="img/jetty-android.png" alt="Jetty Descargar Android">
        </a>
    </div>

  </div>
</div>

<!-- /// MODAL 1 /// -->
<div class="modal fade" id="ruta1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">
          Cuautitlán
          <img src="img/arrowGreen-cobertura-1.png" class="arrow-cobertura">
          Lomas Verdes
          <img src="img/arrowGreen-cobertura-1.png" class="arrow-cobertura">
          Santa Fe
          <img src="img/icon-expressGreen.svg" width="60">
          <span style="margin-left: 30px;">$69 pesos</span>
        </h4>
      </div>
      <div class="modal-body">
        <div id="mapa_cuautitlan_lomasverdes_santafe" class="map"></div>

        <ul class="paradas">
          <p><b>Paradas de esta ruta</b></p>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Cuautitlán</b> - <i>Av. Jose María Morelos (Palomas, Glorieta, frente al Oxxo)</i> <b>Saliendo: 06:00, 06:20, 06:50</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Perinorte</b> - <i>Autopista Qro-Mex (frente a Ford)</i> <b>Saliendo: 06:10, 06:33, 07:07</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Hospital San José</b> - <i>Cto. Oradores y Cto. Educadores</i></li> <b>Saliendo: 06:45, 07:04, 07:40</b>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Fuentes de Satélite</b> - <i>Av. Fuentes de Satélite frente a Superama</i> <b>Saliendo: 06:46, 07:05, 07:43</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Apeninos</b> - <i>Av. Paseo de Lomas Verdes y Apeninos</i> <b>Saliendo: 06:48, 07:08, 07:48</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Santa Mónica</b> - <i>City Club / Puente peatonal frente a Toks</i> <b>Saliendo: 06:35, 06:55, 07:25, 07:51</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Mundo E</b> - <i>Gasolinera entre las calles de Caléndulas y Lotos</i> <b>Saliendo: 06:40, 06:58, 07:30</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>City Shops Valle Dorado</b> - <i>Periférico Boulevard Manuel Ávila Camacho 3130, Valle Dorado, bahía City Shops</i> <b>06:25, 06:48, 07:17</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Televisa Santa Fe</b> - <i>Vasco de Quiroga 2000, Santa Fe, Zedec Santa Fé</i> <b>Saliendo: 08:0, 09:18</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Pabellón Bosques</b> - <i>Av. Loma de la Plata, frente a  Pabellón Bosques</i> <b>Saliendo: 07:36, 08:23</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Hospital Ángeles Lomas</b> - <i>Blvrd. Interlomas, Bosque de las Palmas, Naucalpan de Juárez</i> <b>Saliendo: 07:33, 08:13</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>City Market</b> - <i>Avenida Santa Fe 498, Santa Fe, Contadero, Ciudad de México, CDMX, México</i> <b>Saliendo: 08:05, 08:45</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Punta Santa Fe</b> - <i>Entrada peatonal a Punta Santa Fe</i> <b>Saliendo: 08:01, 08:40</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Bahia Office Depot</b> - <i>Office Depot, Juan Salvador Agraz, Contadero, Ciudad de México, CDMX, México</i> <b>Saliendo: 07:57, 08:39</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Ibero</b> - <i>Av. Vasco de Quiroga frente a la Ibero</i> <b>Saliendo: 07:53, 08:39</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Corp. Citibanamex</b> - <i>Roberto Medellín esq. Av. Vasco de Quiroga</i> <b>Saliendo: 07:52, 08:35</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Arcos Bosques 2</b> - <i>Paseo de Los Tamarindos 150, Bosques de las Lomas, Ciudad de México, CDMX, México</i> <b>Saliendo: 07:40, 08:24</b>
          </li>
        </ul>

      </div>
      <div class="modal-footer">
        <p><b>Ascenso <img src="img/icon-ascenso.png" width="20" style="margin-right: 40px;"> Descenso <img src="img/icon-descenso.png" width="20"></b></p>
      </div>
    </div>
  </div>
</div>

<!-- /// MODAL 2 /// -->
<div class="modal fade" id="ruta2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Cuautitlán/Perinorte <img src="img/arrowGreen-cobertura-2.png" class="arrow-cobertura"> Santa Fe <span style="margin-left: 30px;">$69 pesos</span></h4>
      </div>
      <div class="modal-body">
        <div id="mapa_santafe_cuautitlan" class="map"></div>

        <ul class="paradas">
          <p><b>Paradas de esta ruta</b></p>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Arcos Bosques (Pantalón)</b> - <i>Paseo de los Tamarindos 400B (frente al Número)</i> <b>Saliendo: 15:35, 16:05, 18:00, 18:30, 18:40, 19:10</b>
          </li>
          <li>
            <img src="img/icon-ascenso.png" width="10">
            <b>Av. Santa Fe 695</b> - <i>Av Sta Fe 695, Lomas de Santa Fe, Contadero, Ciudad de México, CDMX, México</i> <b>Saliendo: 15:10, 17:30, 15:40, 18:10, 18:210, 17:55</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Pasaje Santa Fe</b> - <i>Ernesto Martínez Domínguez, Frente a Banorte de Pasaje Santa Fe</i> <b>Saliendo: 15:20, 15:50, 17:40, 18:10, 18:20, 18:55</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Punta Santa Fe</b> - <i>Entrada peatonal a Punta Santa Fe</i> <b>Saliendo: 17:24, 15:35, 15:05, 17:45, 18:00, 18:30</b>
          </li>
          <li>
            <img src="img/icon-descenso.png" width="10">
            <b>Punta Santa Fe</b> - <i>Av. Javier Barros Sierra 515</i> <b>Saliendo: 15:17, 17:35, 15:47, 18:02, 18:17, 18:50</b>
          </li>
        </ul>

      </div>
      <div class="modal-footer">
        <p><b>Ascenso <img src="img/icon-ascenso.png" width="22" style="margin-right: 40px;"> Descenso <img src="img/icon-descenso.png" width="22"></b></p>
      </div>
    </div>
  </div>
</div>

