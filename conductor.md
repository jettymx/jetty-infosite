---
layout: default
title: Jetty | Los beneficios de trabajar como socio conductor
description: Buscamos conductores confiables, profesionales y amables, para unirse a nuestro equipo y marcar la diferencia en la movilidad urbana.
id: conductor
---

<div class="container-fluid conductor">
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 text-center">
        <h1>¿ERES CONDUCTOR O DUEÑO DE UN VEHÍCULO Y QUIERES TRABAJAR CON NOSOTROS?</h1>
        <div class="row">
          <div class="col-md-6 text-left">
            <h3>Si tienes un vehículo...</h3>
            <p>Jetty pone a trabajar tu vehículo de lunes a viernes. No tienes que preocuparte por buscar clientes. Nosotros nos encargamos.</p>
            <p>Buscamos vehículos en buen estado, de no más de 5 años, de hasta 24 asientos con pasillo central.</p>
          </div>
          <div class="col-md-6 text-left">
            <h3>Si eres un conductor...</h3>
            <p>Siempre buscamos reclutar a conductores profesionales, responsables y con excelente trato.</p>
            <p>Como requisito, debes contar con una licencia tipo "C".</p>
          </div>
        </div>
        
        <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalConductor">
          Quiero ser parte de Jetty
        </button>
      </div>

    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4 text-center">
        <img src="img/jetty-mx-camioneta.png">
      </div>
    </div>
  </div>
</div>

<div class="clearfix"></div>

<div class="space-greenUp">
  <img src="img/back-green-up.png">
</div>

<!-- <div class="container">
  <div class="row conductor-request">
    <div class="col-md-4 text-center">
      <div class="panel panel-default">
        <div class="panel-body">
          <img src="img/icon-van.svg">
          <h2>Jetty te ofrece la posibilidad de:</h2>
          <p>Poner a trabajar tu vehículo de lunes a viernes. No tener que preocuparte por buscar clientes. Nosotros nos encargamos.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 text-center">
      <div class="panel panel-default">
        <div class="panel-body">
          <img src="img/icon-check.svg">
          <h2>¿Cuáles son los requisitos para propietarios?</h2>
          <p>Tener un vehículo en buen estado, de no más de 5 años, con por lo menos 12 asientos y pasillo central.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 text-center">
      <div class="panel panel-default">
        <div class="panel-body">
          <img src="img/icon-card.svg">
          <h2>¿Cuáles son los requisitos para conductores?</h2>
          <p>Tener o tramitar licencia tipo "C". </p>
        </div>
      </div>
    </div>
  </div>
</div> -->

<!-- <div class="space-greenUp">
  <img src="img/back-green-down.png">
</div> -->

<div class="conatiner-fluid proceso">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2>¿Cúal es el proceso?</h2>
        <br>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3 number">
        <div class="row">
          <div class="col-md-2 col-xs-3 text-right">
            <img src="img/icon-uno.svg">
          </div>
          <div class="col-md-10 col-xs-9">
            <p class="lead">Llena este formulario:</p>
            <!-- <a class="typeform-share btn btn-gray" href="https://cledestino.typeform.com/to/CLXSOj" data-mode="1" target="_blank">Quiero ser parte de Jetty</a> -->
            <button type="button" class="btn btn-gray" data-toggle="modal" data-target="#ModalConductor">
              Quiero ser parte de Jetty
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-md-offset-3 number">
        <div class="row">
          <div class="col-md-2 col-xs-3 text-right">
            <img src="img/icon-dos.svg">
          </div>
          <div class="col-md-10 col-xs-9">
            <p class="lead">Un miembro del equipo de Jetty se pondrá en contacto contigo para:</p>
            <ul>
              <li>Hacerte una entrevista personal </li>
              <li>Hacer una inspección a tu vehículo. </li>
              <li>Crear tu expediente</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-md-offset-3 number">
        <div class="row">
          <div class="col-md-2 col-xs-3 text-right">
            <img src="img/icon-tres.svg">
          </div>
          <div class="col-md-10 col-xs-9">
            <p class="lead">Únete a Jetty, la tecnología que cambiará la forma de transportarte en México</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <h3>Nosotros te podemos dar asesoría para sacar los permisos que necesitas</h3>
      </div>
    </div>
  </div>
</div>

<div class="clearfix"></div>

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
              <label  for="mail">Correo electrónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="60"
                      placeholder="Correo electrónico"
                      name="email" />
            </div>

            <div class="col-md-6 form-group">
              <label  for="phone">Número telefónico</label>
              <input  type="text"
                      class="form-control"
                      maxlength="20"
                      placeholder="Número telefonico"
                      name="phone"
                      required>
            </div>


            <div class="col-md-12 form-group">
              <label for="company">¿Cuentas con licencia tipo C?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="license"        
                          value="true"
                          checked />
                  Sí
                </label>
              </div>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="license"
                          value="false" />
                  No
                </label>
              </div>
            </div>


            <div class="col-md-12 form-group">
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

            <div class="col-md-6 form-group">
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
            </div>

            <div class="col-md-6 form-group">
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
            </div>

            <div class="col-md-12 form-group">
              <label for="company">¿Cuentas con algún permiso o placas especializadas?</label>
              <div class="radio">
                <label>
                  <input  type="radio"
                          name="plates"
                          value="true" />
                  Sí
                </label>
              </div>
              <div class="radio ">
                <label>
                  <input  type="radio"
                          name="plates"
                          value="false" />
                  No
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
