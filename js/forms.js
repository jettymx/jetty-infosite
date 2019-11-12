// Conductores
$('#form-drivers').submit(function (e) {
    e.preventDefault();

    var formSerialized = $('#form-drivers').
      serializeArray().
      reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    var params = {
      name: formSerialized.name,
      lastname: formSerialized.lastname,
      age: formSerialized.age,
      phone: formSerialized.phone,
      email: formSerialized.email,
      address: formSerialized.address,
      waze: formSerialized.waze,
      owner: formSerialized.isOwner,
      experience: formSerialized.experience,
      why: formSerialized.why,
      how: formSerialized.how
    };

    analytics.track("Driver - Complete", params);

    $.ajax({
        type: 'POST',
        url: "https://jetty-web.herokuapp.com/api/driver",
        data: JSON.stringify(params),
        crossDomain: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            $('#ModalConductor').modal('hide');
            $('#ModalSuccess').modal('show');
        }
      });
});

// Transportistas
$('#form-transportistas').submit(function (e) {
    e.preventDefault();

    var formSerialized = $('#form-transportistas').
      serializeArray().
      reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    var params = {
        name: formSerialized.name,
        lastname: formSerialized.lastname,
        email: formSerialized.email,
        phone: formSerialized.phone,
        address: formSerialized.address,
        licencia: formSerialized.licencia,
        experience: formSerialized.experience,
        years: formSerialized.years,
        vehiculos: formSerialized.vehiculos,
        tipo: formSerialized.tipo,
        why: formSerialized.why,
        how: formSerialized.how
    };

    $.ajax({
        type: 'POST',
        url: "https://jetty-web.herokuapp.com/api/operator",
        data: JSON.stringify(params),
        crossDomain: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            $('#ModalTransportistas').modal('hide');
            $('#ModalSuccess').modal('show');
        }
      });
});

// Eventos
$('.js--form-events').submit(function (e){
    e.preventDefault();

    var formSerialized = $(e.target)
      .serializeArray()
      .reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    var params = {
        name: formSerialized.name,
        lastname: formSerialized.lastname,
        email: formSerialized.email,
        phone: formSerialized.phone,
        event_name: formSerialized.eventname,
        is_organizer: formSerialized.organizer,
        type_trip: formSerialized.trip,
        assistants: formSerialized.people,
        origin_address: formSerialized.origin_address,
        origin_date: formSerialized.origin_date,
        origin_time: formSerialized.origin_time,
        destination_address: formSerialized.destination_address,
        destination_date: formSerialized.destination_date,
        destination_time: formSerialized.destination_time
    }

    analytics.track("Events - Complete", params)
    $.ajax({
        type: 'POST',
        url: "https://jetty-web.herokuapp.com/api/event",
        data: JSON.stringify(params),
        crossDomain: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            $(e.target).parents('.modal').modal('hide');
            $('#ModalSuccess').modal('show');
        }
    });
});


// Empresas
$('#form-company').submit(function (e){
    e.preventDefault();

    var formSerialized = $('#form-company').serializeArray()
    .reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    var params = {
        name: formSerialized.name,
        lastname: formSerialized.lastname,
        email: formSerialized.email,
        phone: formSerialized.phone,
        organization_name: formSerialized.company,
        organization_address: formSerialized.company_address,
        organization_size: formSerialized.people,
        departure_hour: formSerialized.departure_hour,
        return_hour: formSerialized.return_hour,
        have_match_service: formSerialized.match_service
    }

    analytics.track("Organizations - Complete", params)

    $.ajax({
        type: 'POST',
        url: "https://jetty-web.herokuapp.com/api/organization",
        data: JSON.stringify(params),
        crossDomain: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            $('#ModalOrganizaciones').modal('hide');
            $('#ModalSuccess').modal('show');
        }
    });

});
