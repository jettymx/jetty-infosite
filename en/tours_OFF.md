---
layout: tours
title: Jetty | Tours Time Out
description: Conoce nuestros tours por la Ciudad de México de la mano de Time Out
id: tours
---

<figure class="header-tours">
  <img src="../img/back-tours.jpg" alt="Jetty MX" class="back">
  <figcaption>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1 text-center">
          <h1>Conoce nuestros tours por la Ciudad de México de la mano de Time Out</h1>
          <!-- <h3>Nos adaptamos a tu necesidad al mejor precio para resolver tu transporte.</h3> -->
        </div>
      </div>
    </div>
  </figcaption>
</figure>

<div class="container-fluid eventos-content" style="margin-top: 0px">
  <div class="container">
    <div class="row tour" data-aos="fade">

      <div class="col-md-10 col-md-offset-1 info-tours">
        <div class="row">
          <div class="col-md-3 col-md-offset-3">
            <img src="{{site.baseurl}}/img/logo-Timeout.svg">
          </div>
          <div class="col-md-3">
            <img src="{{site.baseurl}}/img/logo-jetty-tours.svg">
          </div>
        </div>
      </div>

      <div class="clearfix info-tours"></div>

      <div class="col-md-4 info-tours">
        <img src="{{site.baseurl}}/img/muralismo-tour.jpg" alt="Tours Time Out Jetty">
        <h3>Nuevo Muralismo Mexicano</h3>
        <p>Te llevaremos a conocer de cerca el trabajo de artistas urbanos como Smithe, Curiot, Jesús Benítez “Dhear” y Colectivo Germen.</p>
        <p><b>Precio por persona:</b><br> $980 MXN</p>
        <p><b>Duración: 5hrs</b></p>
        <p><b>Incluye:</b> Guía, lunch y transporte</p>
        <p><b>Próxima fecha:</b> 11 de mayo</p>
        <br>
        <button type="button" class="btn btn-green-small" data-toggle="modal" data-target="#ModalTourMuralismo">
          Agendar
        </button>
        <a href="{{site.baseurl}}/tours/nuevo-muralismo-mexicano" class="btn btn-dark-gray-small">Más información</a>
      </div>

      <div class="col-md-4 info-tours">
        <img src="{{site.baseurl}}/img/mercado-san-juan-tour.jpg" alt="Tours Time Out Jetty">
        <h3>Mercado de San Juan</h3>
        <p>Además de comer en locales como Triana Café Gourmet y Las Tapas de San Juan, tendrás una clase de cocina con el chef Bernardo Bukantz.</p>
        <p><b>Precio por persona:</b><br> $2,890 MXN</p>
        <p><b>Duración: 6hrs</b></p>
        <p><b>Incluye:</b> Guía, comida y transporte</p>
        <p><b>Próxima fecha:</b> 18 de mayo</p>
        <button type="button" class="btn btn-green-small" data-toggle="modal" data-target="#ModalTourMercado">
          Agendar
        </button>
        <a href="{{site.baseurl}}/tours/mercado-san-juan" class="btn btn-dark-gray-small">Más información</a>
      </div>

      <div class="col-md-4 info-tours">
        <img src="{{site.baseurl}}/img/santa-maria-la-ribera-tour.jpg" alt="Tours Time Out Jetty">
        <h3>Santa María la Ribera</h3>
        <p>Visitarás lugares como el Kiosco Morisco, el Museo del Chopo, Museo de San Carlos, Casa Equis y Chilakillers.</p>
        <p><b>Precio por persona:</b><br> $990 MXN</p>
        <p><b>Duración: 6hrs</b></p>
        <p><b>Incluye:</b> Guía, desayuno, comida y transporte</p>
        <p><b>Próxima fecha:</b> 25 de mayo</p>
        <br>
        <button type="button" class="btn btn-green-small" data-toggle="modal" data-target="#ModalTourSantamaria">
          Agendar
        </button>
        <a href="{{site.baseurl}}/tours/santa-maria" class="btn btn-dark-gray-small">Más información</a>
      </div>

    </div>
  </div>
</div>

<!-- MODAL TOURS MURALISMO-->
<div class="modal fade" id="ModalTourMuralismo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header header-modal-muralismo">
        <h2 class="modal-title title-tours-modal" id="myModalLabel">Nuevo Muralismo Mexicano</h2>
      </div>

      <form class="js--form-events">
        <div class="modal-body">
          <div class="col-md-12">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nuevo-muralismo-name">Nombre</label>
                <input name="name" id="nuevo-muralismo-name" type="text" class="form-control" maxlength="30" placeholder="Nombre">
                <input name="eventname" type="hidden" value="Nuevo Muralismo Mexicano">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-muralismo-lastname">Apellido</label>
                <input name="lastname" id="nuevo-muralismo-lastname" type="text" class="form-control" maxlength="60" placeholder="Apellido">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-muralismo-email">Correo electrónico</label>
                <input name="email" id="nuevo-muralismo-email" type="email" class="form-control" placeholder="Correo electrónico">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-muralismo-phone">Celular</label>
                <input name="phone" id="nuevo-muralismo-phone" type="text" class="form-control" placeholder="Número telefónico">
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nuevo-muralismo-people">Número de personas</label>
                <input name="people" id="nuevo-muralismo-people" type="text" class="form-control" placeholder="Número">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-muralismo-date">Fecha de salida</label>
                <select class="form-control" id="nuevo-muralismo-date" name="origin_date">
                  <option value="11/Mayo/2019">11 de Mayo del 2019</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer modal-footer-tours">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-green-small">Enviar</button>
        </div>
      </form>

    </div>
  </div>
</div>

<!-- MODAL TOURS MERCADO-->
<div class="modal fade" id="ModalTourMercado" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header header-modal-mercado">
        <h2 class="modal-title title-tours-modal" id="myModalLabel">Mercado de San Juan</h2>
      </div>

      <form class="js--form-events">
        <div class="modal-body">
          <div class="col-md-12">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nuevo-mercado-name">Nombre</label>
                <input name="name" id="nuevo-mercado-name" type="text" class="form-control" maxlength="30" placeholder="Nombre">
                <input name="eventname" type="hidden" value="Mercado de San Juan">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-mercado-lastname">Apellido</label>
                <input name="lastname" id="nuevo-mercado-lastname" type="text" class="form-control" maxlength="60" placeholder="Apellido">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-mercado-email">Correo electrónico</label>
                <input name="email" id="nuevo-mercado-email" type="email" class="form-control" placeholder="Correo electrónico">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-mercado-phone">Celular</label>
                <input name="phone" id="nuevo-mercado-phone" type="text" class="form-control" placeholder="Número telefónico">
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nuevo-mercado-people">Número de personas</label>
                <input name="people" id="nuevo-mercado-people" type="text" class="form-control" placeholder="Número">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-mercado-date">Fecha de salida</label>
                <select class="form-control" id="nuevo-mercado-date" name="origin_date">
                  <option value="18/Mayo/2019">18 de Mayo del 2019</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer modal-footer-tours">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-green-small">Enviar</button>
        </div>
      </form>

    </div>
  </div>
</div>

<!-- MODAL TOURS SANTA MARIA-->
<div class="modal fade" id="ModalTourSantamaria" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header header-modal-santamaria">
        <h2 class="modal-title title-tours-modal" id="myModalLabel">Santa María la Ribera</h2>
      </div>

      <form class="js--form-events">
        <div class="modal-body">
          <div class="col-md-12">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nuevo-santamaria-name">Nombre</label>
                <input name="name" id="nuevo-santamaria-name" type="text" class="form-control" maxlength="30" placeholder="Nombre">
                <input name="eventname" type="hidden" value="Santa María la Ribera">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-santamaria-lastname">Apellido</label>
                <input name="lastname" id="nuevo-santamaria-lastname" type="text" class="form-control" maxlength="60" placeholder="Apellido">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-santamaria-email">Correo electrónico</label>
                <input name="email" id="nuevo-santamaria-email" type="email" class="form-control" placeholder="Correo electrónico">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-santamaria-phone">Celular</label>
                <input name="phone" id="nuevo-santamaria-phone" type="text" class="form-control" placeholder="Número telefónico">
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nuevo-santamaria-people">Número de personas</label>
                <input name="people" id="nuevo-santamaria-people" type="text" class="form-control" placeholder="Número">
              </div>
              <div class="form-group col-md-6">
                <label for="nuevo-santamaria-date">Fecha de salida</label>
                <select class="form-control" id="nuevo-santamaria-date" name="origin_date">
                  <option value="25/Mayo/2019">25 de Mayo del 2019</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer modal-footer-tours">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-green-small">Enviar</button>
        </div>
      </form>

    </div>
  </div>
</div>

