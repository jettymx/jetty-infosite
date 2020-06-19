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
        <h1>Agencia de Gobierno</h1>
        <h2>Lleva los beneficios de la tecnología Jetty al sistema de transporte público de tu ciudad, mejora la experiencia del usuario y contribuye a la modernización.</h2>
        <!-- <div class="text-center">
          <img src="img/jetty-gobierno.png" width="90%">
        </div> -->
      </div>
    </div>

    <div class="clearfix marginBottom"></div>

    <!-- <div class="row marginBottom">
      <div class="col-md-12">
        <h2>Beneficios para el usuario</h2>
      </div>

      <div class="col-md-6">
        <img src="img/icon-rutasFrecuencia.svg">
        <p class="lead"><b>Acceder a información sobre rutas, paradas, tiempos de viaje y frecuencias de los servicios.</b></p>
      </div>
      <div class="col-md-6">
        <img src="img/icon-calificarV2.svg">
        <p class="lead"><b>Calificar el servicio y dar retroalimentación sobre el conductor y experiencia de viaje.</b></p>
      </div>
      <div class="col-md-6">
        <img src="img//icon-conductorV2.svg">
        <p class="lead"><b>Conocer quién es su conductor, vehículo y punto de ascenso.</b></p>
      </div>
      <div class="col-md-6">
        <img src="img/icon-soporteV2.svg">
        <p class="lead"><b>Tener soporte en tiempo real atendido por agentes capacitados antes, durante y después del viaje. Los usuarios tienen posibilidad de recuperar los objetos olvidados en las unidades.</b></p>
      </div>
    </div> -->


    <div class="row marginBottom">
      <div class="col-md-12">
        <h2>Beneficios para el Gobierno</h2>
      </div>

      <div class="col-md-4">
        <img src="img/icon-capacitacionV2.svg">
        <h3>Supervisión de conductores.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-optimizacionV2.svg">
        <h3>Optimización de frecuencias, rutas y horarios.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-mejoraV2.svg">
        <h3>Mejora del servicio.</h3>
      </div>

      <div class="col-md-4 col-md-offset-2">
        <img src="img/icon-encuestaV2.svg">
        <h3>Mayor cercanía al ciudadanía vía encuestas y retroalimentación inmediata de la política pública.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-inovaciónV2.svg">
        <h3>Diseño e implementacion de política pública innovadora.</h3>
      </div>
    </div>

    <div class="row marginBottom">
      <!-- <div class="col-md-12">
        <h2>Herramientas para el manejo de la flota</h2>
      </div>

      <div class="col-md-4">
        <img src="img/icon-operacionV2.svg">
        <p class="lead"><b>Visualizar información sobre la operación.</b></p>
      </div>
      <div class="col-md-4">
        <img src="img/icon-administrarV2.svg">
        <p class="lead"><b>Administrar información de unidades, choferes, rutas, corridas.</b></p>
      </div>
      <div class="col-md-4">
        <img src="img/icon-retroV2.svg">
        <p class="lead"><b>Tener un canal de retroalimentación.</b></p>
      </div>
    </div>

    <div class="row marginBottom">
      <div class="col-md-12">
        <h2>Herramientas para planificación</h2>
      </div>

      <div class="col-md-12">
        <p class="lead"><b>La tecnología de Jetty permite identificar y ubicar demanda de servicios de transporte colectivo, esto mediante la información proporcionada por los usuarios que nos usan y nos solicitan viajes.</b></p>
      </div> -->

      <!-- <div class="col-md-8 col-md-offset-2 text-center">
        <img src="img/jetty-mapa-atse.png" alt="Jetty, Atse" width="100%">
      </div> -->

      <div class="col-md-12 text-center">
        <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalGobierno">
          Solicita tu registro
        </button>
      </div>
    </div>

    <div class="clearfix"></div>

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



