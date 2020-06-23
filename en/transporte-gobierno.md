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

      <div class="col-md-4">
        <img src="img/icon-capacitacionV2.svg">
        <h3>Supervise your own drivers thanks to user feedback</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-optimizacionV2.svg">
        <h3>Improve frequencies and schedules.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-mejoraV2.svg">
        <h3>Improve the service</h3>
      </div>

      <div class="col-md-4 col-md-offset-2">
        <img src="img/icon-encuestaV2.svg">
        <h3>Greater closeness with citizens through surveys and immediate feedback on public policy.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-inovaciónV2.svg">
        <h3>Design and implementation of innovative public policy</h3>
      </div>
    </div>

    <div class="row marginBottom">

      <div class="col-md-12 text-center">
        <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalGobierno">
          Book a demo
        </button>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 text-center">
        <h3>Goverments we work with:</h3>
        <ul class="list-transportistas">
          <li>
            <img src="img/logo-municipio-san-pedro.png" style="width: 200px !important;">
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



