---
layout: default-cobertura
title: Jetty | El transporte que mereces.
description: Buscamos conductores confiables, profesionales y amables, para unirse a nuestro equipo y marcar la diferencia en la movilidad urbana.
id: conductor
---

<div class="container eres-conductor marginTop">
  <div class="row">

    <div class="col-md-12">
      <h1>Bolsa de trabajo conductores</h1>
    </div>

    <div class="col-md-12">
      <p class="lead">Siempre buscamos reclutar a conductores profesionales, responsables y con excelente trato.</p>

      <ul class="requisitos">
        <p><b>Requisitos</b></p>
        <li>Tener al menos 21 años cumplidos.</li>
        <li>Debes contar con una licencia para transporte público.</li>
        <li>Habilidades sociales y dotes para la atención al cliente.</li>
        <li>Capaz de seguir normativa en materia de transporte y seguridad.</li>
        <li>Tener experiencia en transporte público o de personal.</li>
        <li>Tener conocimientos básicos de mecánica automotriz (identificar el estado o la condición mecánica de su unidad).</li>
      </ul>

      <ul class="requisitos">
        <p><b>¿Cúal es el proceso?</b></p>
        <li> <a href="javascript:$.scrollTo('#destino',800);">Llena</a> este formulario</li>
        <li>Un miembro del equipo de Jetty se pondrá en contacto contigo para hacerte una entrevista personal</li>
        <li>Pasar exámenes psicométricos </li>
      </ul>

      <ul class="requisitos">
        <p><b>Documentación necesaria: </b></p>
        <li>Credencial de elector.</li>
        <li>Carta de antecedentes no penales.</li>
        <li>Estar dado de alta en el Servicio de Administración Tributaria (SAT).</li>
        <li>Aprobar una entrevista presencial con Jetty.</li>
        <li>Acta de Nacimiento.</li>
        <li>CURP</li>
        <li>RFC</li>
        <li>Comprobante de domicilio.</li>
        <li>NSS (Número de seguro social).</li>
      </ul>

    </div>

    <div class="col-md-12 ">
      <button type="button" id="destino" class="btn btn-gray" data-toggle="modal" data-target="#ModalConductor">
        Formulario para conductores
      </button>
    </div>

  </div>
</div>

<!-- Modal Conductor -->
<div class="modal fade" id="ModalConductor" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Déjanos tus datos y nos pondremos en contacto</h4>
      </div>

      <form id="form-drivers">
        <div class="modal-body">

            <div class="col-md-6 form-group">
              <label  for="name">Nombre</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Nombre"
                      maxlength="30"
                      name="name"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="lastname">Apellidos</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Apellidos"
                      maxlength="60"
                      name="lastname"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="edad">Edad</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="21 años"
                      name="edad" />
            </div>

            <div class="col-md-6 form-group">
              <label  for="phone">Número telefónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="20"
                      placeholder="Número telefónico"
                      name="phone"
                      required>
            </div>

            <div class="col-md-12 form-group">
              <label for="company">¿Dónde vives?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      placeholder="No. Calle, Colonia, Alcaldia/Municipio, C.P."
                      name="address"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label for="company">¿Sabes usar Waze?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="waze"
                          value="true"
                          checked />
                          Sí
                </label>
              </div>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="waze"
                          value="false" />
                          No
                </label>
              </div>
            </div>


            <div class="col-md-6 form-group">
              <label for="company">¿Cuentas con una camioneta para pasajeros?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="isOwner"
                          value="true">
                  Sí
                </label>
              </div>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="isOwner"
                          value="false" checked>
                  No
                </label>
              </div>
            </div>

            <div class="col-md-12 form-group">
              <label for="experience">Cuéntanos tu experiencia como conductor (empresa, tipo de vehículo, años).</label>
              <textarea class="form-control" rows="3" name="experience"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="why">Porqué quieres trabajar en Jetty</label>
              <textarea class="form-control" rows="3" name="why"></textarea>
            </div>

            <!-- <div class="col-md-6 form-group">
              <label for="vehicle">¿De qué marca es tu vehículo?</label>
              <select class="form-control" name="vehicleModel">
                <option selected disabled value="none">Selecciona una opción</option>
                <option>Volkswagen</option>
                <option>Toyota</option>
                <option>Nissan</option>
                <option>Mercedes</option>
                <option>Fiat</option>
                <option>Pegout</option>
                <option>Otros</option>
              </select>
            </div> -->

            <!-- <div class="col-md-6 form-group">
              <label for="">¿De qué año es tu vehículo?</label>
              <select class="form-control" name="vehicleYear">
                <option selected disabled value="none">Selecciona una opción</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012 o anterior</option>
              </select>
            </div> -->

            <div class="col-md-12 form-group">
              <label for="company">Cómo te enteraste de Jetty</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="how"
                          value="true" />
                  Amigo que trabaja en Jetty
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="false" />
                  Vi un vehículo en la calle
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="false" />
                  Recomendación
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="how"
                          value="false" />
                  Otro
                </label>
              </div>
            </div>

        </div>
        <div class="clearfix"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-green-small">Enviar</button>
        </div>
      </form>

    </div>
  </div>
</div>


 <!-- Modal Conductor -->
 <div id="ModalSuccess" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Recibimos tu solicitud</h4>
      </div>

      <div class="modal-body text-center">
        <div class="row">
          <div class="col-md-12  .center">
              <h5>Nos pondremos en contacto contigo dentro de poco.</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


