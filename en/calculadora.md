---
layout: default-cobertura
title: Jetty | El transporte que mereces
description: Nuestra misión es ofrecer una alternativa de transporte privado seguro, confiable y accesible. Actualmente ofrecemos soluciones de traslado para personas en viajan entre las zonas de Aragón, Cuautitlán, Condesa, Narvarte, Santa Fe, Polanco.
id: vacantes
---

<div class="container marginTop calc">
  <div class="row">
    <div class="col-md-12">
      <h1>Calcula tu gasto y ahorra en tus viajes diarios</h1>
      <br>
      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>

    <div class="clearfix"></div>

    <form class="form-calc">

      <div class="col-md-12">
        <p><b>Elige el tipo de transporte que utilizas.</b></p>
      </div>
      <div class="form-group col-md-6 inputGroup">
        <input id="radio1" name="radio" type="radio"/>
        <label for="radio1">Automóvil</label>
      </div>
      <div class="form-group col-md-6 inputGroup">
        <input id="radio2" name="radio" type="radio"/>
        <label for="radio2">Transporte Público</label>
      </div>

      <div class="form-group col-md-12">
        <label>Ruta de Jetty que utilizas</label>
        <select class="form-control form-custom">
          <option value="">Norte - Santa Fe</option>
          <option value="">Venados - Santa Fe</option>
          <option value="">Acoxpa - Auditorio</option>
          <option value="">Acoxpa - Santa Fe</option>
        </select>
      </div>

      <!-- TRANSPORTE AUTOMOVIL -->
      <div class="form-group col-md-6">
        <label>Tipo de auto que tienes</label>
        <select class="form-control">
          <option value="">Compacto</option>
          <option value="">Mediano</option>
          <option value="">SUV</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label>Gasolina (Gasto semanal)</label>
        <input type="text" class="form-control" placeholder="Gasto semanal">
      </div>
      <div class="form-group col-md-6">
        <label>Caseta de cobro (Gasto por viaje)</label>
        <input type="text" class="form-control" placeholder="Gasto por viaje">
      </div>
      <div class="form-group col-md-6">
        <label>Pensión/Estacionamiento (Gasto mensual)</label>
        <input type="text" class="form-control" placeholder="Gasto mensual">
      </div>
      <div class="form-group col-md-6">
        <label>Tiempo por trayecto</label>
        <input type="text" class="form-control" placeholder="Tiempo aproximado">
      </div>

      <!-- TRANSPORTE PUBLICO -->
      <div class="form-group col-md-6">
        <label>Tiempo por traslado en transporte público</label>
        <input type="text" class="form-control" placeholder="Tiempo aproximado">
      </div>
      <div class="form-group col-md-6">
        <label>Costo de viaje en transporte público</label>
        <input type="text" class="form-control" placeholder="Costo por traslado">
      </div>
      <div class="form-group col-md-6">
        <label>Transbordos</label>
        <input type="text" class="form-control" placeholder="Cuántos trasnbordos realizas">
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-gray-small">Calcular</button>
      </div>
    </form>

    <div class="col-md-6">
      <div class="row">
        <div class="col-md-4 imgAhorro">
          <img src="img/icon-ahorroV2.svg">
        </div>
        <div class="col-md-8  ">
          <h2>En costo ahorras </h2>
          <h1><span class="ahorro">$300</span> pesos</h1>
          <p>Al mes viajando en Jetty</p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row">
        <div class="col-md-4 imgAhorro">
          <img src="img/icon-rutasV2.svg">
        </div>
        <div class="col-md-8">
          <h2>En tiempo ahorras</h2>
          <h1><span class="ahorro">20</span> minutos</h1>
          <p>Al mes viajando en Jetty</p>
        </div>
      </div>
    </div>

  </div>
</div>
