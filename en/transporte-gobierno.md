---
layout: default-en
title: Jetty | Los beneficios de trabajar como Jetty en transporte público
description: ¿Tienes vehículos que te gustaría trabajar con Jetty o una concesión de transporte público?
id: transporte-concesionado
---

<div class="container-fluid gradient">
  <div class="container transportista">

    <div class="row">
      <div class="col-md-12">
        <h1>Government agency</h1>
        <h2>Bring the benefits of Jetty technology to your city's public transit system, improve the user experience, and contribute to modernization.</h2>
      </div>
    </div>

    <div class="clearfix marginBottom"></div>

    <div class="row marginBottom">
      <div class="col-md-12">
        <h2>Government benefits</h2>
      </div>

      <div class="col-md-4 marginBottom">
        <img src="img/icon-capacitacionV2.svg">
        <p class="lead">Supervise your own drivers thanks to user feedback</p>
      </div>
      <div class="col-md-4 marginBottom">
        <img src="img/icon-optimizacionV2.svg">
        <p class="lead">Improve frequencies and schedules.</p>
      </div>
      <div class="col-md-4 marginBottom">
        <img src="img/icon-mejoraV2.svg">
        <p class="lead">Improve the service</p>
      </div>

      <div class="clearfix"></div>

      <div class="col-md-4 col-md-offset-2 marginBottom">
        <img src="img/icon-encuestaV2.svg">
        <p class="lead">Greater closeness with citizens through surveys and immediate feedback on public policy.</p>
      </div>
      <div class="col-md-4 marginBottom">
        <img src="img/icon-inovaciónV2.svg">
        <p class="lead">Design and implementation of innovative public policy</p>
      </div>
    </div>

    <div class="row marginBottom">

      <div class="col-md-12 text-center">
        <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalGobierno">
          More info
        </button>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 text-center">
        <h3>Goverments we work with:</h3>
        <ul class="list-transportistas">
          <li>
            <a href="https://www.jetty.mx/update/2020/05/13/jetty-llega-a-san-pedro-garza-garcia.html"><img src="img/logo-municipio-san-pedro.png" style="width: 200px !important;"></a>
          </li>
          <li>
            <a href="https://www.jetty.mx/update/2020/05/25/jetty-apoyo-personal-medico-toluca.html"><img src="img/edomex.png" style="width: 200px !important;"></a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- Modal Gobierno -->
<div class="modal fade" id="ModalGobierno" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Déjanos tus datos y nos pondremos en contacto</h4>
      </div>

      <form id="form-gobierno">
        <div class="modal-body">

            <div class="col-md-6 form-group">
              <label  for="from-gobierno--name">Nombre</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Nombre"
                      maxlength="30"
                      name="name"
                      id="form-gobierno--name"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-gobierno--lastname">Apellidos</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Apellidos"
                      maxlength="60"
                      name="lastname"
                      id="form-gobierno--lastname"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-gobierno--mail">Correo electrónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="Correo electrónico"
                      name="email"
                      id="form-gobierno--email"
                      />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-gobierno--phone">Número telefónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="20"
                      placeholder="Número telefonico"
                      name="phone"
                      id="form-gobierno--phone"
                      required>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-gobierno--city">¿En qué ciudad estás?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      name="city"
                      id="form-gobierno--city"
                      required />
            </div>

            <div class="col-md-12 form-group">
              <label for="form-gobierno--route">¿Representas a alguna agencia de gobierno?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      name="route"
                      id="form-gobierno--agency"
                      required />
            </div>


            <div class="col-md-12 form-group">
              <p style="color: #333"><b>Cuéntanos más</b></p>
              <label for="form-gobierno--reason">Porqué quieres trabajar con Jetty</label>
              <textarea class="form-control" rows="3" name="years" id="form-gobierno--years"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="">¿Cómo te enteraste de Jetty?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="how"
                          value="amigo-trabaja-en-jetty" />
                  Amigo que trabaja en Jetty
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="vi-vehiculo-en-calle" />
                  Vi un vehículo en la calle
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="recomendacion" />
                  Recomendación
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="otro" />
                  Otro
                </label>
              </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-green-small" data-loading-text="Espera...">Enviar</button>
        </div>
      </form>

    </div>
  </div>
</div>


 <!-- Modal Transportistas Success -->
 <div id="ModalSuccess" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Recibimos tu solicitud</h4>
      </div>

      <div class="modal-body text-center">
        <div class="row">
          <div class="col-md-12 text-center">
              <h5>Nos pondremos en contacto contigo dentro de poco.</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



