function editClient() {
    
    var datos = {
        idClient: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
        password: $("#password").val()
    }

    let datosPeticion = JSON.stringify(datos);
    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        data: datosPeticion,
        type: 'PUT',
        contentType: "application/JSON",
        success: function() {
            window.location.href = "listClient.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


}