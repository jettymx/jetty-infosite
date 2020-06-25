---
layout: default
title: Jetty | Los beneficios de trabajar como Jetty en transporte público
description: ¿Tienes vehículos que te gustaría trabajar con Jetty o una concesión de transporte público?
id: transporte-concesionado
---

<div class="container-fluid gradient">
  <div class="container transportista">

    <div class="row">
      <div class="col-md-12">
        <h1>Transporte Público</h1>
        <h2>¿Tienes una concesión de transporte público?</h2>
        <div class="text-center">
          <img src="img/jetty-publico.png" width="90%">
        </div>
      </div>
    </div>

    <div class="clearfix marginBottom"></div>

    <div class="row marginBottom">

      <div class="col-md-12">
        <h2>Beneficios para concesionarios o permisionarios.</h2>
      </div>

      <div class="col-md-4">
        <img src="img/icon-Mediopago.svg">
        <p class="lead">Mayor control sobre la operación y la caja al reducir el manejo de efectivo.</p>
      </div>
      <div class="col-md-4">
        <img src="img/icon-conductorV2.svg">
        <p class="lead">Supervisión de conductores gracias a retroalimentación de los usuarios.</p>
      </div>
      <div class="col-md-4">
        <img src="img/icon-rutasV2.svg">
        <p class="lead">Optimización de frecuencias y horarios.</p>
      </div>

      <div class="clearfix marginBottom"></div>

      <div class="col-md-4">
        <img src="img/icon-servicioV2.svg">
        <p class="lead">Mejora del servicio.</p>
      </div>
      <div class="col-md-4">
        <img src="img/icon-inovacionV2.svg">
        <p class="lead">Demostrar al usuario que el transporte concesionado también puede innovar.</p>
      </div>
      <div class="col-md-4">
        <img src="img/icon-capacitacionV2.svg">
        <p class="lead">Capacitación a los conductores en servicio al cliente y perspectiva de género.</p>
      </div>

       <div class="clearfix marginBottom"></div>

      <div class="col-md-12 text-center">
        <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalConcesionado">
         Conoce más
        </button>
      </div>

    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 text-center">
        <h3>Empresas con las que trabajamos:</h3>
        <ul class="list-transportistas">
          <li>
            <img src="img/logo-svbus.png">
          </li>
          <li>
            <img src="img/logo-spsc.png">
          </li>
          <li>
            <img src="img/logo-transportesTangamanga.png">
          </li>
          <li>
            <img src="img/Estrella-noreste.png" class="big">
          </li>
          <li>
            <img src="img/Transportes-valle-de-toluca.png">
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- Modal Concesionado -->
<div class="modal fade" id="ModalConcesionado" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Déjanos tus datos y nos pondremos en contacto</h4>
      </div>

      <form id="form-concesionado">
        <div class="modal-body">

            <div class="col-md-6 form-group">
              <label  for="from-concesionado--name">Nombre</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Nombre"
                      maxlength="30"
                      name="name"
                      id="form-concesionado--name"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-concesionado--lastname">Apellidos</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Apellidos"
                      maxlength="60"
                      name="lastname"
                      id="form-concesionado--lastname"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-concesionado--mail">Correo electrónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="Correo electrónico"
                      name="email"
                      id="form-concesionado--email"
                      />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-concesionado--phone">Número telefónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="20"
                      placeholder="Número telefonico"
                      name="phone"
                      id="form-concesionado--phone"
                      required>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-concesionado--city">¿En qué ciudad estás?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      name="city"
                      id="form-concesionado--city"
                      required />
            </div>

            <div class="col-md-12 form-group">
              <label for="form-concesionado--route">¿Qué ruta operas?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      name="route"
                      id="form-concesionado--route"
                      required />
            </div>


            <div class="col-md-12 form-group">
              <p style="color: #333"><b>Cuéntanos tu experiencia como operador de transporte:</b></p>
              <label for="form-concesionado--years">Años de experiencia</label>
              <textarea class="form-control" rows="3" name="years" id="form-concesionado--years"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-concesionado--vehiculos">¿Cuántos Vehículos tienes?</label>
              <textarea class="form-control" rows="3" name="vehiculos" id="form-concesionado--vehiculos"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-concesionado--tipo">¿Qué tipos de vehículos tienes?</label>
              <textarea class="form-control" rows="3" name="tipo" id="form-concesionado--tipo"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-concesionado--why">Porqué quieres trabajar con Jetty</label>
              <textarea class="form-control" rows="3" name="why" id="form-concesionado--why"></textarea>
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



