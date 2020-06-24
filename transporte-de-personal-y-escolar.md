---
layout: default
title: Jetty | Transporte de personal y escolar
description: ¿Tienes vehículos que te gustaría trabajar con Jetty o una concesión de transporte público?
id: transporte de personal y escolar
---
<div class="container-fluid gradient">
  <div class="container transportista">

    <div class="row marginBottom">

      <div class="col-md-12">
        <h1>Transporte de personal y escolar</h1>
        <h2>Beneficios</h2>
      </div>

      <div class="col-md-4">
        <img src="img/icon-valorAgregado.svg">
        <h3>Mayor valor agregado para tus clientes al ofrecer tecnología para monitorear ubicación del vehículo, horarios y puntos de ascenso/descenso.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-conductorV2.svg">
        <h3>Supervisión de conductores gracias a retroalimentación de los usuarios.</h3>
      </div>
      <div class="col-md-4">
        <img src="img/icon-rutasV2.svg">
        <h3>Optimización de frecuencias y horarios.</h3>
      </div>

      <div class="clearfix marginBottom"></div>

      <div class="col-md-4">
        <img src="img/icon-servicioV2.svg">
        <h3>Mejora del servicio.</h3>
      </div>

      <div class="col-md-4">
        <img src="img/icon-capacitacionV2.svg">
        <h3>Capacitación a los conductores en servicio al cliente y perspectiva de género.</h3>
      </div>

      <div class="clearfix marginBottom"></div>

      <div class="col-md-12 text-center">
        <p>Déjanos tus datos y nos ponemos en contacto</p>
        <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalConcesionado">
         Conoce más
        </button>
      </div>

    </div>

    <div class="clearfix"></div>

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
              <label for="form-concesionado--why">Por qué quieres trabajar con Jetty</label>
              <textarea class="form-control" rows="3" name="why" id="form-concesionado--why"></textarea>
            </div>

            <div class="col-md-6 form-group">
              <label for="">¿Cómo te enteraste de Jetty?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="how"
                          value="amigo-trabaja-en-jetty" />
                  Por un amigo que trabaja en Jetty
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
                          value="prensa" />
                  Prensa
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="redes" />
                  Redes sociales
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
            <div class="col-md-6 form-group">
              <label for="">Tipo de operador</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="type"
                          value="privado" />
                  Privado
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="type"
                          value="gobierno" />
                  Gobierno
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

<!-- Modal Transportistas --><!--
<div class="modal fade" id="ModalTransportistas" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Déjanos tus datos y nos pondremos en contacto</h4>
      </div>

      <form id="form-transportistas">
        <div class="modal-body">

            <div class="col-md-6 form-group">
              <label  for="from-transportistas--name">Nombre</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Nombre"
                      maxlength="30"
                      name="name"
                      id="form-transportistas--name"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-transportistas--lastname">Apellidos</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Apellidos"
                      maxlength="60"
                      name="lastname"
                      id="form-transportistas--lastname"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-transportistas--mail">Correo electrónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="Correo electrónico"
                      name="email"
                      id="form-transportistas--email"
                      />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-transportistas--phone">Número telefónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="20"
                      placeholder="Número telefonico"
                      name="phone"
                      id="form-transportistas--phone"
                      required>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-transportistas--address">¿En qué colonia tendría origen la unidad?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      name="address"
                      id="form-transportistas--address"
                      required />
            </div>

            <div class="col-md-12 form-group">
              <label for="form-transportistas--licencia">Tipo de licencia del Conductor:</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      name="licencia"
                      id="form-transportistas--licencia"
                      required />
            </div>

            <div class="col-md-12 form-group">
              <label for="">¿Tienes experiencia en transporte de personal o transporte público?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="experience"
                          value="SI"
                          checked />
                  Sí
                </label>
              </div>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="experience"
                          value="NO" />
                  No
                </label>
              </div>
            </div>

            <div class="col-md-12 form-group">
              <p style="color: #333"><b>Cuéntanos tu experiencia como operador de transporte:</b></p>
              <label for="form-transportistas--years">Años de experiencia</label>
              <textarea class="form-control" rows="3" name="years" id="form-transportistas--years"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-transportistas--vehiculos">¿Cuántos Vehículos tienes?</label>
              <textarea class="form-control" rows="3" name="vehiculos" id="form-transportistas--vehiculos"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-transportistas--tipo">¿Qué tipos de vehículos tienes?</label>
              <textarea class="form-control" rows="3" name="tipo" id="form-transportistas--tipo"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-transportistas--why">Porqué quieres trabajar con Jetty</label>
              <textarea class="form-control" rows="3" name="why" id="form-transportistas--why"></textarea>
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
</div> -->


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
