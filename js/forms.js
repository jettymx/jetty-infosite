
$('#form-drivers').submit(function (e) {
    e.preventDefault();

    var formSerialized = $('#form-drivers').serializeArray()
    .reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    var params = {
        name: formSerialized.name,
        lastname: formSerialized.lastname,
        email: formSerialized.email,
        phone: formSerialized.phone,
        license: formSerialized.license,
        owner: formSerialized.isOwner,
        vehicle_model: formSerialized.vehicleModel,
        vehicle_year: formSerialized.vehicleYear,
        plates: formSerialized.plates
    };
    
    analytics.track("conductor", params);

    $.ajax({
        type: 'POST',
        url: "http://localhost:5000/api/driver",
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

$('#form-events').submit(function (e){
    e.preventDefault();

    var formSerialized = $('#form-events').serializeArray()
    .reduce(function(a, x) { a[x.name] = x.value; return a; }, {});

    console.log(formSerialized);
});