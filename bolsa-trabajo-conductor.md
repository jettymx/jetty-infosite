---
layout: default-cobertura
title: Jetty | El transporte que mereces.
description: Siempre buscamos reclutar a conductores profesionales, responsables y con excelente trato. Aquí algunos de nuestros requisitos.
id: conductor
---

<div class="container eres-conductor marginTop">
  <div class="row marginBottom">

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
      <button type="button" id="destino" class="btn-gray hvr-shadow" data-toggle="modal" data-target="#ModalConductor">
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
              <label  for="form-drivers--name">Nombre</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Nombre"
                      maxlength="30"
                      name="name"
                      id="form-drivers--name"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-drivers--lastname">Apellidos</label>
              <input  type="text"
                      class="form-control"
                      placeholder="Apellidos"
                      maxlength="60"
                      name="lastname"
                      id="form-drivers--lastname"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-drivers--age">Edad</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="21 años"
                      name="age"
                      id="form-drivers--age"
                      />
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-drivers--phone">Número telefónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="20"
                      placeholder="Número telefónico"
                      name="phone"
                      id="form-drivers--phone"
                      required>
            </div>

            <div class="col-md-6 form-group">
              <label  for="form-drivers--email">Correo electrónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="Correo electrónico"
                      name="email"
                      id="form-drivers--email"
                      />
            </div>

            <div class="col-md-12 form-group">
              <label for="form-drivers--address">¿Dónde vives?</label>
              <input  type="text"
                      class="form-control"
                      maxlength="120"
                      placeholder="No. Calle, Colonia, Alcaldia/Municipio, C.P."
                      name="address"
                      id="form-drivers--address"
                      required />
            </div>

            <div class="col-md-6 form-group">
              <label>¿Sabes usar Waze?</label>
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

            <div class="col-md-12 form-group">
              <label>¿Cuentas con una camioneta para pasajeros?</label>
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
              <label for="form-drivers--experience">Cuéntanos tu experiencia como conductor (empresa, tipo de vehículo, años).</label>
              <textarea class="form-control" rows="3" name="experience" id="form-drivers--experience"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label for="form-drivers--why">Porqué quieres trabajar en Jetty</label>
              <textarea class="form-control" rows="3" name="why" id="form-drivers--why"></textarea>
            </div>

            <div class="col-md-12 form-group">
              <label>Cómo te enteraste de Jetty</label>
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
          <div class="col-md-12 text-center">
              <h5>Nos pondremos en contacto contigo dentro de poco.</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


